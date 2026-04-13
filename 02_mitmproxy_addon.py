"""
mitmproxy 插件：自动捕获粤出行城际巴士小程序 API 请求
用法: mitmproxy -s 02_mitmproxy_addon.py
      或 mitmdump -s 02_mitmproxy_addon.py

捕获的请求会保存到 captured_apis.json 中
"""

import json
import time
import os
from datetime import datetime
from mitmproxy import http, ctx

OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "captured_apis.json")

KEYWORDS = [
    "ylxweb", "trip12306",
    "yuecx", "粤出行",
    "citybus", "intercity",
    "wg.do", "api/",
    "ticket", "schedule", "route", "line",
    "startCity", "endCity", "tripDate",
]

captured = []


def match_request(flow: http.HTTPFlow) -> bool:
    url = flow.request.pretty_url.lower()
    host = flow.request.pretty_host.lower()

    if any(kw in url or kw in host for kw in KEYWORDS[:6]):
        return True

    content_type = flow.request.headers.get("content-type", "").lower()
    referer = flow.request.headers.get("referer", "").lower()
    if "servicewechat" in referer or "miniprogram" in referer:
        return True

    return False


def response(flow: http.HTTPFlow):
    if not match_request(flow):
        return

    req = flow.request
    resp = flow.response

    req_body = None
    if req.content:
        try:
            req_body = json.loads(req.content.decode("utf-8", errors="replace"))
        except (json.JSONDecodeError, UnicodeDecodeError):
            req_body = req.content.decode("utf-8", errors="replace")

    resp_body = None
    if resp and resp.content:
        try:
            resp_body = json.loads(resp.content.decode("utf-8", errors="replace"))
        except (json.JSONDecodeError, UnicodeDecodeError):
            resp_body = resp.content.decode("utf-8", errors="replace")[:2000]

    entry = {
        "timestamp": datetime.now().isoformat(),
        "method": req.method,
        "url": req.pretty_url,
        "host": req.pretty_host,
        "path": req.path,
        "request_headers": dict(req.headers),
        "request_body": req_body,
        "status_code": resp.status_code if resp else None,
        "response_headers": dict(resp.headers) if resp else None,
        "response_body": resp_body,
    }

    captured.append(entry)

    ctx.log.info(
        f"[粤出行] {req.method} {req.pretty_url} -> {resp.status_code if resp else '?'}"
    )

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(captured, f, ensure_ascii=False, indent=2)

    ctx.log.info(f"[粤出行] 已捕获 {len(captured)} 个请求，保存至 {OUTPUT_FILE}")
