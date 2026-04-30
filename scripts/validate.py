from __future__ import annotations

import json
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Any


@dataclass(frozen=True)
class ValidationResult:
    ok: bool
    errors: list[str]


def load_json(path: Path) -> dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def validate_unpacked(unpacked_root: Path, ad_rules_path: Path) -> ValidationResult:
    errors: list[str] = []

    must_exist = [
        "AndroidManifest.xml",
        "classes.dex",
        "resources.arsc",
        "assets/public/index.html",
        "assets/public/asset-manifest.json",
    ]
    for rel in must_exist:
        if not (unpacked_root / rel).exists():
            errors.append(f"missing:{rel}")

    manifest_path = unpacked_root / "assets/public/asset-manifest.json"
    if manifest_path.exists():
        try:
            manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
            files = manifest.get("files") or {}
            main_js = files.get("main.js")
            if isinstance(main_js, str) and main_js:
                p = unpacked_root / "assets/public" / main_js.lstrip("/")
                if not p.exists():
                    errors.append(f"missing:manifest_ref:{main_js}")
        except Exception:
            errors.append("bad:asset-manifest.json")

    ad = load_json(ad_rules_path)
    blocklist = [str(s).lower() for s in ad.get("string_blocklist", []) if str(s).strip()]
    scan_globs = ad.get("scan_file_globs") or ad.get("file_globs") or []
    scan_ext = {".js", ".html", ".xml", ".json"}

    for g in scan_globs:
        for p in unpacked_root.glob(str(g)):
            if not p.is_file():
                continue
            if p.suffix.lower() not in scan_ext:
                continue
            try:
                text = p.read_text(encoding="utf-8", errors="ignore").lower()
            except Exception:
                continue
            for s in blocklist:
                if s and s in text:
                    errors.append(f"ad-hit:{s}:{p.as_posix()}")
                    break

    return ValidationResult(ok=(len(errors) == 0), errors=errors)

