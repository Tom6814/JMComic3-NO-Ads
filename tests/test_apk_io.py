import unittest
import zipfile
from pathlib import Path
from tempfile import TemporaryDirectory

from scripts.apk_io import unzip_apk, zip_dir


class TestApkIo(unittest.TestCase):
    def test_zip_unzip_roundtrip(self) -> None:
        with TemporaryDirectory() as td:
            root = Path(td)
            src = root / "src"
            src.mkdir()
            (src / "a.txt").write_text("x", encoding="utf-8")
            (src / "dir").mkdir()
            (src / "dir" / "b.txt").write_text("y", encoding="utf-8")

            apk = root / "a.apk"
            zip_dir(src, apk)

            out = root / "out"
            unzip_apk(apk, out)

            self.assertEqual((out / "a.txt").read_text(encoding="utf-8"), "x")
            self.assertEqual((out / "dir" / "b.txt").read_text(encoding="utf-8"), "y")

    def test_resources_arsc_is_stored(self) -> None:
        with TemporaryDirectory() as td:
            root = Path(td)
            src = root / "src"
            src.mkdir()
            (src / "resources.arsc").write_bytes(b"123")
            apk = root / "a.apk"
            zip_dir(src, apk)
            with zipfile.ZipFile(apk) as z:
                info = z.getinfo("resources.arsc")
                self.assertEqual(info.compress_type, zipfile.ZIP_STORED)
