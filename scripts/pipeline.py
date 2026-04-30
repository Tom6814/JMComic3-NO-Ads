from __future__ import annotations

import argparse
import json
import secrets
import shutil
import subprocess
import sys
from pathlib import Path
from typing import Any

from scripts.apk_io import unzip_apk, zip_dir, zipalign_and_sign
from scripts.git_utils import current_repo_slug, git
from scripts.github_release import ensure_release, upload_asset
from scripts.patcher import apply_rules
from scripts.tooling import cache_root, repo_root
from scripts.upstream import download_file, get_latest_release, mark_processed, should_process
from scripts.validate import validate_unpacked


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser()
    p.add_argument("--force", action="store_true")
    p.add_argument("--dry-run", action="store_true")
    p.add_argument("--no-push", action="store_true")
    p.add_argument("--no-release", action="store_true")
    return p.parse_args()


def write_json(path: Path, data: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def log_path(tag: str) -> Path:
    return repo_root() / "artifacts" / "logs" / f"{tag}.json"


def log(tag: str, data: dict[str, Any]) -> None:
    write_json(log_path(tag), data)


def ensure_git_clean() -> None:
    status = git(["status", "--porcelain"])
    if status.strip():
        raise RuntimeError("git working tree is not clean")


def ensure_keystore() -> tuple[Path, str, str]:
    base = cache_root() / "keystore"
    base.mkdir(parents=True, exist_ok=True)
    ks = base / "adfree.jks"
    pass_file = base / "pass.txt"
    alias = "adfree"

    if pass_file.exists():
        pw = pass_file.read_text(encoding="utf-8").strip()
    else:
        pw = secrets.token_urlsafe(24)
        pass_file.write_text(pw + "\n", encoding="utf-8")
        pass_file.chmod(0o600)

    if not ks.exists():
        subprocess.run(
            [
                "keytool",
                "-genkeypair",
                "-keystore",
                str(ks),
                "-storepass",
                pw,
                "-keypass",
                pw,
                "-alias",
                alias,
                "-keyalg",
                "RSA",
                "-keysize",
                "2048",
                "-validity",
                "10000",
                "-dname",
                "CN=JMComicAdFree,OU=AdFree,O=JMComic,C=CN",
            ],
            check=True,
        )
        ks.chmod(0o600)

    return ks, pw, alias


def sync_unpacked_into_repo(unpacked_root: Path) -> None:
    root = repo_root()
    keep = {
        ".git",
        ".gitignore",
        ".cache",
        "docs",
        "scripts",
        "rules",
        "tests",
        "state",
        "artifacts",
        ".github",
    }

    for p in root.iterdir():
        if p.name in keep:
            continue
        if p.is_dir():
            shutil.rmtree(p)
        else:
            p.unlink()

    for src in unpacked_root.iterdir():
        dst = root / src.name
        if src.is_dir():
            shutil.copytree(src, dst, dirs_exist_ok=True)
        else:
            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, dst)


def main() -> int:
    args = parse_args()

    ensure_git_clean()

    state_path = repo_root() / "state" / "upstream.json"
    ad_rules = repo_root() / "rules" / "ad_patterns.json"
    ui_rules = repo_root() / "rules" / "ui_tweaks.json"

    state = json.loads(state_path.read_text(encoding="utf-8"))
    upstream_repo = str(state["upstream_repo"])
    rel = get_latest_release(upstream_repo)

    if not args.force and not should_process(state_path, rel):
        return 0

    tag = rel.tag_name.replace("/", "_")
    input_dir = repo_root() / "artifacts" / "input" / tag
    work_dir = repo_root() / "artifacts" / "work" / tag
    out_dir = repo_root() / "artifacts" / "output" / tag

    apk_in = input_dir / rel.apk_name
    if not apk_in.exists():
        download_file(rel.apk_url, apk_in)

    unpacked = work_dir / "unpacked"
    unzip_apk(apk_in, unpacked)

    patch_report = apply_rules(unpacked, ad_rules, ui_rules)
    validation = validate_unpacked(unpacked, ad_rules)
    if not validation.ok:
        log(tag, {"stage": "validate", "errors": validation.errors, "patch_hits": patch_report.hits})
        return 2

    unsigned_apk = out_dir / f"jmcomic3_adfree_{tag}_unsigned.apk"
    aligned_apk = out_dir / f"jmcomic3_adfree_{tag}_aligned.apk"
    signed_apk = out_dir / f"jmcomic3_adfree_{tag}.apk"

    zip_dir(unpacked, unsigned_apk)
    ks, pw, alias = ensure_keystore()
    zipalign_and_sign(unsigned_apk, aligned_apk, signed_apk, ks, pw, alias, pw)

    if args.dry_run:
        log(tag, {"stage": "dry-run", "patch_hits": patch_report.hits})
        return 0

    sync_unpacked_into_repo(unpacked)

    subprocess.run(["git", "add", "-A"], check=True)
    if git(["status", "--porcelain"]).strip():
        subprocess.run(["git", "commit", "-m", f"chore: sync upstream {tag} and apply patches"], check=True)

    if not args.no_push:
        subprocess.run(["git", "push"], check=True)

    if not args.no_release:
        repo = current_repo_slug()
        release_tag = f"{tag}-adfree"
        release = ensure_release(
            repo,
            release_tag,
            f"JMComic AdFree {tag}",
            f"Upstream: {rel.tag_name}\nAsset: {rel.apk_name}\n",
        )
        upload_asset(repo, int(release["id"]), signed_apk, signed_apk.name)

    mark_processed(state_path, rel, apk_in)
    subprocess.run(["git", "add", "state/upstream.json"], check=True)
    if git(["status", "--porcelain"]).strip():
        subprocess.run(["git", "commit", "-m", f"chore: mark processed {tag}"], check=True)
        if not args.no_push:
            subprocess.run(["git", "push"], check=True)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

