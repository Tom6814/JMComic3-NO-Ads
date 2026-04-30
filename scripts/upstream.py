from __future__ import annotations

import hashlib
import json
import os
import urllib.request
from dataclasses import dataclass
from pathlib import Path
from typing import Any


GITHUB_API = "https://api.github.com"


def load_json(path: Path) -> dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, data: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def github_token() -> str | None:
    t = os.environ.get("GITHUB_TOKEN")
    if not t:
        return None
    t = t.strip()
    return t or None


def request_json(url: str) -> dict[str, Any]:
    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "jmcomic-adfree-bot",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    token = github_token()
    if token:
        headers["Authorization"] = f"Bearer {token}"
    req = urllib.request.Request(url, headers=headers, method="GET")
    with urllib.request.urlopen(req, timeout=60) as resp:
        body = resp.read().decode("utf-8")
    return json.loads(body)


@dataclass(frozen=True)
class UpstreamRelease:
    tag_name: str
    published_at: str | None
    apk_name: str
    apk_url: str


def get_latest_release(repo: str) -> UpstreamRelease:
    data = request_json(f"{GITHUB_API}/repos/{repo}/releases/latest")
    tag = str(data["tag_name"])
    published_at = data.get("published_at")
    assets = data.get("assets") or []
    apk_assets = [a for a in assets if str(a.get("name", "")).lower().endswith(".apk")]
    if not apk_assets:
        raise RuntimeError(f"no apk asset found in latest release for {repo} ({tag})")
    apk = apk_assets[0]
    return UpstreamRelease(
        tag_name=tag,
        published_at=str(published_at) if published_at is not None else None,
        apk_name=str(apk["name"]),
        apk_url=str(apk["browser_download_url"]),
    )


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def download_file(url: str, dst: Path) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={"User-Agent": "jmcomic-adfree-bot"}, method="GET")
    with urllib.request.urlopen(req, timeout=300) as resp, dst.open("wb") as out:
        while True:
            chunk = resp.read(1024 * 1024)
            if not chunk:
                break
            out.write(chunk)


def should_process(state_path: Path, rel: UpstreamRelease) -> bool:
    state = load_json(state_path)
    last_tag = state.get("last_processed_tag")
    last_published = state.get("last_processed_published_at")
    if last_tag == rel.tag_name and (last_published == rel.published_at or rel.published_at is None):
        return False
    return True


def mark_processed(state_path: Path, rel: UpstreamRelease, apk_path: Path) -> None:
    state = load_json(state_path)
    state["last_processed_tag"] = rel.tag_name
    state["last_processed_published_at"] = rel.published_at
    state["last_asset_name"] = rel.apk_name
    state["last_asset_sha256"] = sha256(apk_path)
    save_json(state_path, state)

