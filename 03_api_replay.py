"""
粤出行城际巴士 API 重放脚本模板
基于亿路行(ylxweb)平台的常见 API 结构

使用前需要：
1. 先用 mitmproxy 抓包获取真实请求参数
2. 将抓到的参数填入下方配置
3. 如有加密参数（challenge/sign），需先反编译小程序分析算法
"""

import requests
import json
import time
import hashlib
import hmac
from datetime import datetime, timedelta
from typing import Optional

# ============================================================
# 配置区 - 用抓包获取的真实数据替换
# ============================================================

BASE_URL = ""          # 例: https://xxxxx-api.ylxweb.com
CORP_ID = ""           # 企业ID，从抓包中获取
TOKEN = ""             # 认证token，从抓包中获取

HEADERS_TEMPLATE = {
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) "
                  "AppleWebKit/605.1.15 (KHTML, like Gecko) "
                  "Mobile/15E148 MicroMessenger/8.0.0",
    "Referer": "https://servicewechat.com/",
}


# ============================================================
# 签名/加密函数 - 需根据反编译结果实现
# ============================================================

def generate_sign(params: dict, secret: str = "") -> str:
    """
    签名生成函数 - 占位
    实际算法需要从反编译的小程序源码中还原
    常见模式：
    - 参数按 key 排序拼接 + secret -> MD5/HMAC
    - timestamp + nonce + body -> SHA256
    """
    sorted_params = "&".join(f"{k}={v}" for k, v in sorted(params.items()) if v)
    if secret:
        return hmac.new(
            secret.encode(), sorted_params.encode(), hashlib.sha256
        ).hexdigest()
    return hashlib.md5(sorted_params.encode()).hexdigest()


def generate_challenge() -> Optional[str]:
    """
    Challenge/PoW 生成函数 - 占位
    部分亿路行平台小程序使用工作量证明(PoW)反爬
    需要从反编译的源码中还原具体算法
    """
    return None


# ============================================================
# API 接口封装
# ============================================================

class YueCXClient:
    def __init__(self, base_url: str, corp_id: str, token: str = ""):
        self.base_url = base_url.rstrip("/")
        self.corp_id = corp_id
        self.token = token
        self.session = requests.Session()
        self.session.headers.update(HEADERS_TEMPLATE)
        if token:
            self.session.headers["Authorization"] = f"Bearer {token}"

    def _post(self, action: str, params: dict = None) -> dict:
        """通用POST请求（亿路行平台常见的 wg.do 接口模式）"""
        payload = {
            "action": action,
            "corpID": self.corp_id,
            "timestamp": int(time.time() * 1000),
        }
        if params:
            payload.update(params)

        challenge = generate_challenge()
        if challenge:
            payload["challenge"] = challenge

        url = f"{self.base_url}/api/wg.do"
        print(f"[请求] POST {url}")
        print(f"[参数] {json.dumps(payload, ensure_ascii=False, indent=2)}")

        resp = self.session.post(url, json=payload, timeout=15)
        resp.raise_for_status()
        data = resp.json()

        print(f"[响应] status={resp.status_code}")
        print(f"[数据] {json.dumps(data, ensure_ascii=False, indent=2)[:500]}")
        return data

    def query_routes(self, start_city: str, end_city: str,
                     trip_date: str = None) -> dict:
        """查询线路班次"""
        if not trip_date:
            trip_date = datetime.now().strftime("%Y-%m-%d")

        return self._post("querySchedule", {
            "startCityName": start_city,
            "endCityName": end_city,
            "tripDate": trip_date,
        })

    def query_stations(self, line_id: str = "") -> dict:
        """查询站点列表"""
        params = {}
        if line_id:
            params["lineId"] = line_id
        return self._post("queryStation", params)

    def query_line_detail(self, line_id: str, trip_date: str = None) -> dict:
        """查询线路详情（站点、票价、余票）"""
        if not trip_date:
            trip_date = datetime.now().strftime("%Y-%m-%d")

        return self._post("queryLineDetail", {
            "lineId": line_id,
            "tripDate": trip_date,
        })

    def query_all_lines(self) -> dict:
        """查询所有线路"""
        return self._post("queryAllLines")


# ============================================================
# 使用示例
# ============================================================

if __name__ == "__main__":
    if not BASE_URL:
        print("=" * 60)
        print("请先完成以下步骤：")
        print("1. 使用 mitmproxy 抓包获取 API 地址和参数")
        print("   命令: mitmproxy -s 02_mitmproxy_addon.py")
        print("2. 查看 captured_apis.json 中的请求数据")
        print("3. 将 BASE_URL、CORP_ID、TOKEN 等填入脚本顶部")
        print("4. 如有加密参数，需反编译小程序分析算法")
        print("=" * 60)
        print()
        print("抓包要点：")
        print("- 在小程序中搜索 深圳→广州 的班次")
        print("- 点击某条线路查看详情")
        print("- 查看站点列表")
        print("- 以上操作会触发关键 API 请求")
        exit(0)

    client = YueCXClient(BASE_URL, CORP_ID, TOKEN)

    print("\n=== 查询 深圳 → 广州 班次 ===")
    routes = client.query_routes("深圳", "广州")

    print("\n=== 查询站点列表 ===")
    stations = client.query_stations()
