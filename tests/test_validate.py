import json
import unittest
from pathlib import Path
from tempfile import TemporaryDirectory

from scripts.validate import validate_unpacked


class TestValidate(unittest.TestCase):
    def test_validate_missing_files(self) -> None:
        with TemporaryDirectory() as td:
            root = Path(td)
            (root / "assets/public").mkdir(parents=True)
            ad_rules = root / "ad.json"
            ad_rules.write_text(json.dumps({"string_blocklist": ["ad"], "scan_file_globs": []}), encoding="utf-8")
            res = validate_unpacked(root, ad_rules)
            self.assertFalse(res.ok)

    def test_validate_manifest_ref(self) -> None:
        with TemporaryDirectory() as td:
            root = Path(td)
            (root / "assets/public/static/js").mkdir(parents=True)
            (root / "AndroidManifest.xml").write_text("x", encoding="utf-8")
            (root / "classes.dex").write_bytes(b"1")
            (root / "resources.arsc").write_bytes(b"1")
            (root / "assets/public/index.html").write_text("x", encoding="utf-8")
            (root / "assets/public/asset-manifest.json").write_text(
                json.dumps({"files": {"main.js": "/static/js/main.js"}}), encoding="utf-8"
            )
            (root / "assets/public/static/js/main.js").write_text("x", encoding="utf-8")
            ad_rules = root / "ad.json"
            ad_rules.write_text(json.dumps({"string_blocklist": ["ad"], "scan_file_globs": []}), encoding="utf-8")
            res = validate_unpacked(root, ad_rules)
            self.assertTrue(res.ok)

