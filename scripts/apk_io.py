from __future__ import annotations

import shutil
import os
import subprocess
import zipfile
from pathlib import Path

from scripts.tooling import ensure_android_build_tools


def unzip_apk(apk_path: Path, out_dir: Path) -> None:
    if out_dir.exists():
        shutil.rmtree(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(apk_path) as z:
        z.extractall(out_dir)


def zip_dir(src_dir: Path, out_apk: Path) -> None:
    if out_apk.exists():
        out_apk.unlink()
    out_apk.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(out_apk, "w", compression=zipfile.ZIP_DEFLATED) as z:
        for p in sorted(src_dir.rglob("*")):
            if p.is_dir():
                continue
            z.write(p, p.relative_to(src_dir).as_posix())


def strip_v1_signature_files(unpacked_root: Path) -> int:
    meta = unpacked_root / "META-INF"
    if not meta.exists() or not meta.is_dir():
        return 0
    removed = 0
    patterns = ["*.RSA", "*.DSA", "*.EC", "*.SF", "MANIFEST.MF"]
    for pat in patterns:
        for p in meta.glob(pat):
            if p.is_file():
                p.unlink()
                removed += 1
    return removed


def zipalign_and_sign(
    unsigned_apk: Path,
    aligned_apk: Path,
    signed_apk: Path,
    keystore: Path,
    ks_pass: str,
    alias: str,
    key_pass: str,
    build_tools_version: str = "34.0.0",
) -> None:
    zipalign, apksigner = ensure_android_build_tools(build_tools_version)
    aligned_apk.parent.mkdir(parents=True, exist_ok=True)
    signed_apk.parent.mkdir(parents=True, exist_ok=True)

    try:
        env = os.environ.copy()
        lib64 = zipalign.parent / "lib64"
        if lib64.exists():
            env["LD_LIBRARY_PATH"] = str(lib64) + (":" + env["LD_LIBRARY_PATH"] if env.get("LD_LIBRARY_PATH") else "")
        subprocess.run([str(zipalign), "-f", "4", str(unsigned_apk), str(aligned_apk)], check=True, env=env)
    except Exception:
        shutil.copy2(unsigned_apk, aligned_apk)
    subprocess.run(
        [
            str(apksigner),
            "sign",
            "--v1-signing-enabled",
            "true",
            "--v2-signing-enabled",
            "true",
            "--ks",
            str(keystore),
            "--ks-pass",
            f"pass:{ks_pass}",
            "--ks-key-alias",
            alias,
            "--key-pass",
            f"pass:{key_pass}",
            "--out",
            str(signed_apk),
            str(aligned_apk),
        ],
        check=True,
    )
    subprocess.run([str(apksigner), "verify", "--verbose", str(signed_apk)], check=True)
