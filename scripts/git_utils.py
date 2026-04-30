from __future__ import annotations

import re
import subprocess


def git(args: list[str]) -> str:
    p = subprocess.run(["git", *args], check=True, capture_output=True, text=True)
    return p.stdout.strip()


def origin_url() -> str:
    return git(["remote", "get-url", "origin"])


def current_repo_slug() -> str:
    url = origin_url()
    m = re.search(r"github\.com[:/](?P<slug>[^/]+/[^/]+?)(?:\.git)?$", url)
    if not m:
        raise RuntimeError("cannot parse repo slug from origin url")
    return m.group("slug")


def origin_token() -> str | None:
    url = origin_url()
    m = re.search(r"https://x-access-token:(?P<t>[^@]+)@github\.com/", url)
    if not m:
        return None
    t = m.group("t").strip()
    return t or None

