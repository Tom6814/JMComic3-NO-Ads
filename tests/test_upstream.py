import json
import unittest
from pathlib import Path
from tempfile import TemporaryDirectory

from scripts.upstream import UpstreamRelease, mark_processed, should_process


class TestUpstream(unittest.TestCase):
    def test_should_process_by_tag_change(self) -> None:
        with TemporaryDirectory() as td:
            state = Path(td) / "state.json"
            state.write_text(json.dumps({"last_processed_tag": "v1", "last_processed_published_at": "t1"}), encoding="utf-8")
            self.assertTrue(should_process(state, UpstreamRelease("v2", "t2", "a.apk", "http://x")))

    def test_should_skip_same_tag_and_published_at(self) -> None:
        with TemporaryDirectory() as td:
            state = Path(td) / "state.json"
            state.write_text(json.dumps({"last_processed_tag": "v1", "last_processed_published_at": "t1"}), encoding="utf-8")
            self.assertFalse(should_process(state, UpstreamRelease("v1", "t1", "a.apk", "http://x")))

    def test_mark_processed_sets_fields(self) -> None:
        with TemporaryDirectory() as td:
            root = Path(td)
            state = root / "state.json"
            state.write_text(json.dumps({"last_processed_tag": None, "last_processed_published_at": None}), encoding="utf-8")
            apk = root / "a.apk"
            apk.write_bytes(b"123")
            mark_processed(state, UpstreamRelease("v9", "t9", "a.apk", "http://x"), apk)
            out = json.loads(state.read_text(encoding="utf-8"))
            self.assertEqual(out["last_processed_tag"], "v9")
            self.assertEqual(out["last_asset_name"], "a.apk")
            self.assertIsInstance(out["last_asset_sha256"], str)
