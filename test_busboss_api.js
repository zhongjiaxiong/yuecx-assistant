/**
 * 车盈网 (busboss.cn) API 测试脚本 — 基于反编译源码参数推测
 * 快速验证 API 结构和返回格式
 *
 * 说明:
 * - 这是"方案B"：根据反编译源码构造请求参数，快速测试 API 是否可用
 * - 实际城市ID、站点ID 需要从响应中动态获取
 * - Token 可能不需要（部分查询接口支持未登录访问）
 */

const https = require("https");
const http = require("http");
const querystring = require("querystring");

// ============================================================
// 配置
// ============================================================
const CONFIG = {
  host: "110.75.170.167", // wx.open.class.busboss.cn 的真实 IP
  hostname: "wx.open.class.busboss.cn", // 用于 Host header 和 SNI
  appid: "wx750ee6d5ddf74b19", // 如约城际巴士A
  protocol: "https",
  timeout: 15000,
  rejectUnauthorized: false, // 跳过证书验证（因为 IP 和域名不匹配）
};

// ============================================================
// 通用请求函数
// ============================================================
function request(path, method = "GET", data = null, headers = {}) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: CONFIG.host, // 使用 IP 地址
      port: 443,
      path: path,
      method: method,
      timeout: CONFIG.timeout,
      rejectUnauthorized: CONFIG.rejectUnauthorized, // 跳过证书验证
      servername: CONFIG.hostname, // SNI 使用域名
      headers: {
        "Host": CONFIG.hostname, // 手动设置 Host header
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.0(0x18002328) NetType/WIFI Language/zh_CN",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "Connection": "keep-alive",
        "Referer": `https://servicewechat.com/${CONFIG.appid}/114/page-frame.html`,
        ...headers,
      },
    };

    // 如果是 POST，添加 Content-Type
    if (method === "POST" && data) {
      options.headers["Content-Type"] = "application/json";
      options.headers["Content-Length"] = Buffer.byteLength(JSON.stringify(data));
    }

    const req = https.request(options, (res) => {
      let chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        const buffer = Buffer.concat(chunks);
        const encoding = res.headers["content-encoding"];
        
        // 简单处理 gzip（实际可能需要 zlib 解压）
        let body;
        try {
          body = buffer.toString("utf-8");
          const json = JSON.parse(body);
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body: json,
            raw: body.slice(0, 500),
          });
        } catch (e) {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body: null,
            raw: body.slice(0, 1000),
            parseError: e.message,
          });
        }
      });
    });

    req.on("error", reject);
    req.on("timeout", () => reject(new Error("Request timeout")));

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

// GET 快捷方法
function get(path, params = {}) {
  const qs = querystring.stringify(params);
  const fullPath = qs ? `${path}?${qs}` : path;
  return request(fullPath, "GET");
}

// POST 快捷方法
function post(path, data = {}) {
  return request(path, "POST", data);
}

// ============================================================
// API 测试函数（推测的参数格式）
// ============================================================

/** 测试1: 获取出发城市列表 */
async function testStartCities() {
  console.log("\n[TEST 1] 获取出发城市列表...");
  try {
    const res = await get("/BookSeatsApi/WX_StartCityQuery", {
      appid: CONFIG.appid,
      // 可能的额外参数
      version: "1.0",
      timestamp: Date.now(),
    });
    console.log("Status:", res.statusCode);
    console.log("Response:", JSON.stringify(res.body, null, 2)?.slice(0, 800));
    return res.body;
  } catch (err) {
    console.error("Error:", err.message);
    return null;
  }
}

/** 测试2: 获取到达城市列表（需出发城市ID）*/
async function testArrivalCities(startCityId) {
  console.log(`\n[TEST 2] 获取到达城市列表 (from ${startCityId})...`);
  try {
    const res = await get("/BookSeatsApi/WX_ArrivalCityQuery", {
      appid: CONFIG.appid,
      startCityId: startCityId,
    });
    console.log("Status:", res.statusCode);
    console.log("Response:", JSON.stringify(res.body, null, 2)?.slice(0, 800));
    return res.body;
  } catch (err) {
    console.error("Error:", err.message);
    return null;
  }
}

/** 测试3: 获取出发站点 */
async function testStartNodes(cityId) {
  console.log(`\n[TEST 3] 获取出发站点 (city ${cityId})...`);
  try {
    const res = await get("/BookSeatsApi/API_StartNodeQuery", {
      appid: CONFIG.appid,
      cityId: cityId,
    });
    console.log("Status:", res.statusCode);
    console.log("Response:", JSON.stringify(res.body, null, 2)?.slice(0, 800));
    return res.body;
  } catch (err) {
    console.error("Error:", err.message);
    return null;
  }
}

/** 测试4: 获取到达站点 */
async function testArrivalNodes(cityId, startNodeId) {
  console.log(`\n[TEST 4] 获取到达站点 (city ${cityId}, from node ${startNodeId})...`);
  try {
    const res = await get("/BookSeatsApi/API_ArrivalNodeQuery", {
      appid: CONFIG.appid,
      cityId: cityId,
      startNodeId: startNodeId,
    });
    console.log("Status:", res.statusCode);
    console.log("Response:", JSON.stringify(res.body, null, 2)?.slice(0, 800));
    return res.body;
  } catch (err) {
    console.error("Error:", err.message);
    return null;
  }
}

/** 测试5: 查询班次（核心接口）*/
async function testLineClassDaySale(params) {
  console.log(`\n[TEST 5] 查询班次...`);
  console.log("Params:", JSON.stringify(params, null, 2));
  try {
    const res = await get("/BookSeatsApi/API_LineClassDaySaleQuery", {
      appid: CONFIG.appid,
      ...params,
    });
    console.log("Status:", res.statusCode);
    console.log("Response preview:", JSON.stringify(res.body, null, 2)?.slice(0, 1500));
    return res.body;
  } catch (err) {
    console.error("Error:", err.message);
    return null;
  }
}

/** 测试6: 尝试登录接口（获取 token 结构）*/
async function testLoginStructure() {
  console.log("\n[TEST 6] 探测登录接口结构...");
  try {
    // 尝试不带参数访问，看返回的错误提示
    const res = await post("/WeiXinApp/WXApp_LoginByPhone", {
      appid: CONFIG.appid,
      // 缺少必要参数，应该返回错误
    });
    console.log("Status:", res.statusCode);
    console.log("Response:", JSON.stringify(res.body, null, 2)?.slice(0, 800));
    return res.body;
  } catch (err) {
    console.error("Error:", err.message);
    return null;
  }
}

// ============================================================
// 主流程
// ============================================================

async function main() {
  console.log("============================================");
  console.log("车盈网 (busboss.cn) API 测试 - 方案B");
  console.log("Host:", CONFIG.host);
  console.log("AppID:", CONFIG.appid, "(如约城际巴士A)");
  console.log("============================================");
  console.log("\n[!] 这是基于反编译源码的参数推测测试");
  console.log("[!] 实际城市ID/站点ID需要从响应中确认\n");

  // 测试1: 获取出发城市（最基础的查询，大概率不需要登录）
  const cities = await testStartCities();

  // 如果能获取到城市数据，继续测试
  if (cities && cities.data && cities.data.length > 0) {
    console.log("\n[✓] 成功获取城市列表，取第一个城市继续测试...");
    const firstCity = cities.data[0];
    console.log("First city:", firstCity);

    // 测试2: 到达城市
    const arrivalCities = await testArrivalCities(firstCity.cityId || firstCity.id);

    // 测试3: 出发站点
    const startNodes = await testStartNodes(firstCity.cityId || firstCity.id);

    if (startNodes && startNodes.data && startNodes.data.length > 0) {
      const firstNode = startNodes.data[0];

      // 测试4: 到达站点
      const arrivalNodes = await testArrivalNodes(
        firstCity.cityId || firstCity.id,
        firstNode.nodeId || firstNode.id
      );

      // 测试5: 班次查询（需要知道目的城市ID）
      if (arrivalCities && arrivalCities.data && arrivalCities.data.length > 0) {
        const destCity = arrivalCities.data[0];
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const dateStr = tomorrow.toISOString().split("T")[0];

        const schedules = await testLineClassDaySale({
          startCityId: firstCity.cityId || firstCity.id,
          arrivalCityId: destCity.cityId || destCity.id,
          classDate: dateStr,
          // 可选参数
          startNodeId: firstNode.nodeId || firstNode.id,
        });

        if (schedules && schedules.data) {
          console.log("\n[✓] 成功获取班次数据！API 结构验证通过");
          console.log("    找到", schedules.data.length || 0, "条班次");
        }
      }
    }
  } else {
    console.log("\n[!] 未能获取城市列表，可能的错误：");
    console.log("    1. API 需要登录 token（未开放查询）");
    console.log("    2. 参数格式不正确（需要抓包确认）");
    console.log("    3. 请求频率限制/IP 限制");
  }

  // 测试6: 探测登录接口
  console.log("\n\n[TEST 6] 探测登录接口...");
  await testLoginStructure();

  console.log("\n\n============================================");
  console.log("测试完成");
  console.log("============================================");
}

// 运行
main().catch(console.error);
