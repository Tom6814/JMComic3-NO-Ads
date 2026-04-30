from __future__ import annotations

import shutil
import urllib.error
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
    home = base / "home"
    zipalign = home / "zipalign"
    apksigner = home / "apksigner"
    if zipalign.exists() and apksigner.exists() and (home / "lib" / "apksigner.jar").exists():
        return zipalign, apksigner

    base.mkdir(parents=True, exist_ok=True)
    archive = base / f"build-tools_r{version}-linux.zip"
    if not archive.exists():
        major = version.split(".", 1)[0]
        candidates = [
            f"https://dl.google.com/android/repository/build-tools_r{version}-linux.zip",
            f"https://dl.google.com/android/repository/build-tools_r{major}-linux.zip",
            f"https://dl.google.com/android/repository/build-tools_r{major}-rc3-linux.zip",
            f"https://dl.google.com/android/repository/build-tools_r{major}-rc2-linux.zip",
            f"https://dl.google.com/android/repository/build-tools_r{major}-rc1-linux.zip",
        ]
        last_err: Exception | None = None
        for url in candidates:
            try:
                download(url, archive)
                last_err = None
                break
            except (urllib.error.HTTPError, urllib.error.URLError) as e:
                last_err = e
        if last_err:
            raise last_err

    extract_dir = base / "_extract"
    if extract_dir.exists():
        shutil.rmtree(extract_dir)
    extract_dir.mkdir(parents=True, exist_ok=True)

    with zipfile.ZipFile(archive) as z:
        z.extractall(extract_dir)

    bt_dir = None
    for p in extract_dir.iterdir():
        if p.is_dir() and (p / "apksigner").exists() and (p / "lib" / "apksigner.jar").exists():
            bt_dir = p
            break
    if not bt_dir:
        raise RuntimeError("android build-tools download succeeded but expected layout not found")

    if home.exists():
        shutil.rmtree(home)
    shutil.move(str(bt_dir), str(home))
    shutil.rmtree(extract_dir)

    (home / "zipalign").chmod(0o755)
    (home / "apksigner").chmod(0o755)
    return zipalign, apksigner
