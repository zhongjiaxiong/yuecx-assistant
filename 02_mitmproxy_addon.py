"""
mitmproxy 插件：自动捕获广东城际巴士 API 请求
支持：粤出行(ylxweb)、如约城际/车盈网(busboss)、深巴出行(szbus)

用法:
  mitmproxy -s 02_mitmproxy_addon.py
  或
  mitmdump -s 02_mitmproxy_addon.py -w captured_flows.mitm

捕获的请求会保存到 captured_apis.json 中
"""

import json
import time
import os
from datetime import datetime
from mitmproxy import http, ctx

OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "captured_apis.json")

# 关键 API 域名和关键词
DOMAINS = [
    "ylxweb.com",      # 亿路行/粤出行
    "busboss.cn",      # 车盈网/如约城际
    "szbus.cn",        # 深巴出行
    "trip12306.com",   # 亿路行备用域名
]

KEYWORDS = [
    "yuecx", "粤出行",
    "ruyue", "如约",
    "busboss", "车盈网",
    "shenba", "深巴",
    "wg.do",             # 亿路行旧网关
    "api/",              # 通用 API 前缀
    "query", "Query",    # 查询操作
    "schedule", "line",  # 班次/线路
    "startCity", "endCity", "tripDate", "classDate",  # 查询参数
    "ticket", "order",   # 票务/订单
    "wx.open.class",     # 车盈网 API
    "go.szbus",          # 深巴 API
]

captured = []


def match_request(flow: http.HTTPFlow) -> bool:
    """判断请求是否为目标 API"""
    url = flow.request.pretty_url.lower()
    host = flow.request.pretty_host.lower()

    # 域名匹配
    for domain in DOMAINS:
        if domain in host:
            return True

    # 关键词匹配 URL
    for kw in KEYWORDS:
        if kw in url:
            return True

    # 小程序请求特征
    referer = flow.request.headers.get("referer", "").lower()
    if "servicewechat" in referer:
        return True

    return False


def response(flow: http.HTTPFlow):
    """捕获响应"""
    if not match_request(flow):
        return

    req = flow.request
    resp = flow.response

    # 解析请求体
    req_body = None
    if req.content:
        try:
            req_body = json.loads(req.content.decode("utf-8", errors="replace"))
        except (json.JSONDecodeError, UnicodeDecodeError):
            req_body = req.content.decode("utf-8", errors="replace")[:2000]

    # 解析响应体
    resp_body = None
    if resp and resp.content:
        try:
            resp_body = json.loads(resp.content.decode("utf-8", errors="replace"))
        except (json.JSONDecodeError, UnicodeDecodeError):
            resp_body = resp.content.decode("utf-8", errors="replace")[:2000]

    entry = {
        "timestamp": datetime.now().isoformat(),
        "platform": detect_platform(host),  # 识别平台
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

    # 实时日志
    platform_tag = entry["platform"]
    ctx.log.info(
        f"[{platform_tag}] {req.method} {req.pretty_host}{req.path} -> {resp.status_code if resp else '?'}}"
    )

    # 保存到文件
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(captured, f, ensure_ascii=False, indent=2)

    ctx.log.info(f"已捕获 {len(captured)} 个请求")


def detect_platform(host: str) -> str:
    """识别请求所属的平台"""
    h = host.lower()
    if "ylxweb" in h or "trip12306" in h:
        return "ylxweb/亿路行"
    elif "busboss" in h:
        return "busboss/车盈网"
    elif "szbus" in h:
        return "szbus/深巴"
    return "unknown"


# 启动时清理旧数据
def load(l):
    """mitmproxy 启动时执行"""
    if os.path.exists(OUTPUT_FILE):
        try:
            with open(OUTPUT_FILE, "r", encoding="utf-8") as f:
                global captured
                captured = json.load(f)
            ctx.log.info(f"加载了 {len(captured)} 条历史捕获记录")
        except:
            captured = []


def done():
    """mitmproxy 退出时执行"""
    ctx.log.info(f"总共捕获 {len(captured)} 个 API 请求")
    ctx.log.info(f"数据保存至: {OUTPUT_FILE}")
