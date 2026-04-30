from __future__ import annotations

import shutil
import urllib.request
import zipfile
from pathlib import Path


def repo_root() -> Path:
    return Path(__file__).resolve().parents[1]


def cache_root() -> Path:
    p = repo_root() / ".cache"
    p.mkdir(parents=True, exist_ok=True)
    return p


def download(url: str, dst: Path) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={"User-Agent": "jmcomic-adfree-bot"}, method="GET")
    with urllib.request.urlopen(req, timeout=300) as resp, dst.open("wb") as out:
        out.write(resp.read())


def ensure_android_build_tools(version: str = "34.0.0") -> tuple[Path, Path]:
    base = cache_root() / "android-build-tools" / version
    zipalign = base / "zipalign"
    apksigner = base / "apksigner"
    if zipalign.exists() and apksigner.exists():
        return zipalign, apksigner

    base.mkdir(parents=True, exist_ok=True)
    archive = base / f"build-tools_r{version}-linux.zip"
    if not archive.exists():
        download(f"https://dl.google.com/android/repository/build-tools_r{version}-linux.zip", archive)

    extract_dir = base / "_extract"
    if extract_dir.exists():
        shutil.rmtree(extract_dir)
    extract_dir.mkdir(parents=True, exist_ok=True)

    with zipfile.ZipFile(archive) as z:
        z.extractall(extract_dir)

    zipalign_src = None
    apksigner_src = None
    for p in extract_dir.rglob("*"):
        if p.is_file() and p.name == "zipalign":
            zipalign_src = p
        if p.is_file() and p.name == "apksigner":
            apksigner_src = p
    if not zipalign_src or not apksigner_src:
        raise RuntimeError("android build-tools download succeeded but zipalign/apksigner not found")

    shutil.copy2(zipalign_src, zipalign)
    shutil.copy2(apksigner_src, apksigner)
    zipalign.chmod(0o755)
    apksigner.chmod(0o755)

    shutil.rmtree(extract_dir)
    return zipalign, apksigner

