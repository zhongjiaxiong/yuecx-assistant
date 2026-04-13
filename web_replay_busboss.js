/**
 * 车盈网 (busboss.cn) API 重放脚本 — 如约城际巴士等 30+ 品牌
 * 逆向自 wx750ee6d5ddf74b19 (如约城际巴士A小程序)
 *
 * 架构特点:
 *   - 标准 REST API, GET/POST, 无 PoW, 无 SM4 加密
 *   - Token 认证 (登录 → access_token → 刷新)
 *   - 支持 30+ 品牌: 如约城际、巴巴站、浚通出行、湛运巴士等
 *
 * 关键端点:
 *   - 查询: GET /BookSeatsApi/WX_StartCityQuery, API_LineClassDaySaleQuery, etc.
 *   - 登录: POST /WeiXinApp/WXApp_LoginByPhone
 *   - 下单: POST /BookSeatsApi/API_TicketOrderCreate
 */

const crypto = require("crypto");

// ============================================================
// 配置 (从反编译源码中提取)
// ============================================================
const CONFIG = {
  host: "https://wx.open.class.busboss.cn",
  cdn: "https://cdn.class.busboss.cn",
  brandList: [
    { name: "如约城际巴士A", appid: "wx750ee6d5ddf74b19" },
    { name: "巴巴站", appid: "wx7323ae957dd0b2d5" },
    { name: "浚通出行", appid: "wxbcfee4a8dcfe69a6" },
    { name: "湛运巴士", appid: "wx987279186735a045" },
    { name: "粤约出行", appid: "wx9ba571ec3b03c48b" },
    { name: "壹号巴士出行", appid: "wx35d237306ef42b65" },
    // ... 30+ 品牌共享同一套 API
  ],
  // 需要从小程序抓包获取真实值
  defaultAppid: "wx750ee6d5ddf74b19", // 如约城际巴士A
  defaultToken: process.env.BUSBOSS_TOKEN || "", // 从抓包获取
};

// ============================================================
// 通用请求函数
// ============================================================

async function request(method, path, data = null, headers = {}) {
  const url = `${CONFIG.host}${path}`;
  const opts = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.0",
      "Referer": `https://servicewechat.com/${CONFIG.defaultAppid}/0/page-frame.html`,
      ...headers,
    },
  };

  if (CONFIG.defaultToken) {
    opts.headers["Authorization"] = `Bearer ${CONFIG.defaultToken}`;
    // 或可能是 X-Token, access-token 等，需抓包确认
  }

  if (data && (method === "POST" || method === "PUT")) {
    opts.body = JSON.stringify(data);
  }

  console.log(`  [${method}] ${url}`);
  const resp = await fetch(url, opts);
  const json = await resp.json();
  return json;
}

// GET 快捷方法
async function get(path, params = {}, headers = {}) {
  const qs = new URLSearchParams(params).toString();
  const url = qs ? `${path}?${qs}` : path;
  return request("GET", url, null, headers);
}

// POST 快捷方法
async function post(path, data = {}, headers = {}) {
  return request("POST", path, data, headers);
}

// ============================================================
// 认证相关 (需要抓包获取真实参数结构)
// ============================================================

/**
 * 微信登录换取 Token
 * 注意: 需要真实的 code (从小程序 wx.login 获取)
 */
async function loginByWechat(code, encryptedData, iv) {
  // 参数结构需抓包确认
  return post("/WeiXinApp/WXApp_LoginByPhone", {
    appid: CONFIG.defaultAppid,
    code, // wx.login 获取的 code
    encryptedData, // 可选: 手机号授权
    iv,
  });
}

/**
 * 刷新 Token
 */
async function refreshToken(refreshToken) {
  return get("/WeiXinApp/WXApp_RefreshToken", {
    refreshToken,
  });
}

// ============================================================
// 查询接口 (核心)
// ============================================================

/** 查询出发城市列表 */
async function queryStartCities() {
  return get("/BookSeatsApi/WX_StartCityQuery", {
    appid: CONFIG.defaultAppid,
  });
}

/** 查询到达城市列表 (根据出发城市) */
async function queryArrivalCities(startCityId) {
  return get("/BookSeatsApi/WX_ArrivalCityQuery", {
    appid: CONFIG.defaultAppid,
    startCityId,
  });
}

/** 查询出发站点 */
async function queryStartNodes(cityId) {
  return get("/BookSeatsApi/API_StartNodeQuery", {
    appid: CONFIG.defaultAppid,
    cityId,
  });
}

/** 查询到达站点 */
async function queryArrivalNodes(cityId, startNodeId) {
  return get("/BookSeatsApi/API_ArrivalNodeQuery", {
    appid: CONFIG.defaultAppid,
    cityId,
    startNodeId,
  });
}

/** 查询线路 (根据起止站点) */
async function queryLines(startNodeId, arrivalNodeId) {
  return get("/BookSeatsApi/API_LineQuery", {
    appid: CONFIG.defaultAppid,
    startNodeId,
    arrivalNodeId,
  });
}

/**
 * 查询班次列表 (核心接口)
 * @param {Object} params - 查询参数
 *   - startCityId: 出发城市ID
 *   - arrivalCityId: 到达城市ID
 *   - startNodeId: 出发站点ID (可选)
 *   - arrivalNodeId: 到达站点ID (可选)
 *   - classDate: 日期 YYYY-MM-DD
 */
async function queryLineClassDaySale(params) {
  return get("/BookSeatsApi/API_LineClassDaySaleQuery", {
    appid: CONFIG.defaultAppid,
    ...params,
  });
}

/** 查询班次详情 (V2 版本) */
async function queryLineClassDaySaleV2(params) {
  return get("/BookSeatsApi/API_LineClassDaySaleQuery_V2", {
    appid: CONFIG.defaultAppid,
    ...params,
  });
}

/** 查询票价 */
async function queryTicketPrice(params) {
  return get("/BookSeatsApi/WX_LineClassDayTicketPriceQuery", {
    appid: CONFIG.defaultAppid,
    ...params,
  });
}

/** 查询余票 */
async function queryAvailableCount(params) {
  return get("/BookSeatsApi/WX_LineClassDayCanSaleCount", {
    appid: CONFIG.defaultAppid,
    ...params,
  });
}

/** 查询最低价 */
async function queryMinPrice(params) {
  return get("/BookSeatsApi/API_LineClassDayMinPriceQuery", {
    appid: CONFIG.defaultAppid,
    ...params,
  });
}

// ============================================================
// 订单接口 (需登录态)
// ============================================================

/** 创建订单号 (预占座) */
async function createOrderNo(params) {
  return get("/BookSeatsApi/WX_TicketOrderNoCreate", {
    appid: CONFIG.defaultAppid,
    ...params,
  });
}

/**
 * 创建订单 (确认下单)
 * 注意: 需要完整的乘客信息、联系人、订单号等
 */
async function createOrder(orderData) {
  return post("/BookSeatsApi/API_TicketOrderCreate", {
    appid: CONFIG.defaultAppid,
    ...orderData,
  });
}

/** 查询订单详情 */
async function queryOrderDetail(orderId) {
  return get("/BookSeatsApi/WX_TicketOrderDetailQuery", {
    appid: CONFIG.defaultAppid,
    orderId,
  });
}

/** 查询订单列表 */
async function queryOrders(params) {
  return get("/BookSeatsApi/WX_TicketOrderNewQuery", {
    appid: CONFIG.defaultAppid,
    ...params,
  });
}

/** 取消订单 */
async function cancelOrder(orderId) {
  return get("/BookSeatsApi/API_TicketOrderCancel", {
    appid: CONFIG.defaultAppid,
    orderId,
  });
}

// ============================================================
// 主流程测试
// ============================================================

async function main() {
  console.log("============================================");
  console.log("车盈网 (busboss.cn) API 重放测试");
  console.log("Host:", CONFIG.host);
  console.log("Brand:", CONFIG.brandList[0].name, CONFIG.defaultAppid);
  console.log("============================================\n");

  if (!CONFIG.defaultToken) {
    console.warn("[!] 未设置 BUSBOSS_TOKEN 环境变量");
    console.warn("[!] 请先通过微信小程序抓包获取真实 token");
    console.warn("[!] 运行 mitmproxy 抓包后再执行此脚本\n");
  }

  try {
    // 1. 查询出发城市
    console.log("[1/5] 查询出发城市...");
    const cities = await queryStartCities();
    console.log("结果:", JSON.stringify(cities, null, 2).slice(0, 500));

    // 2. 如果有深圳和广州的数据，查询线路
    // 注意: 实际城市ID需要通过抓包获取
    console.log("\n[2/5] 查询示例线路 (深圳→广州)...");
    // 参数需根据实际情况调整
    // const lines = await queryLineClassDaySale({
    //   startCityId: "440300", // 深圳
    //   arrivalCityId: "440100", // 广州
    //   classDate: tomorrow(),
    // });
    console.log("[跳过] 需要真实的城市ID和站点ID");

    console.log("\n[+] 基础查询完成");
    console.log("[!] 下一步: 用 mitmproxy 抓包获取完整请求参数");

  } catch (err) {
    console.error("请求失败:", err.message);
    console.error("[!] 请确认:");
    console.error("    1. 已通过微信小程序抓包获取真实 token");
    console.error("    2. 已设置 BUSBOSS_TOKEN 环境变量");
    console.error("    3. 请求参数结构与抓包一致");
  }
}

function tomorrow() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

// 如果直接运行
if (require.main === module) {
  main();
}

// 导出供其他模块使用
module.exports = {
  CONFIG,
  loginByWechat,
  refreshToken,
  queryStartCities,
  queryArrivalCities,
  queryStartNodes,
  queryArrivalNodes,
  queryLines,
  queryLineClassDaySale,
  queryLineClassDaySaleV2,
  queryTicketPrice,
  queryAvailableCount,
  queryMinPrice,
  createOrderNo,
  createOrder,
  queryOrderDetail,
  queryOrders,
  cancelOrder,
};
