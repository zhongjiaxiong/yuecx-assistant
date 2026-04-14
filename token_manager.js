/**
 * 车盈网 (busboss) JWT Token 自动续期管理
 * - 从 busboss_config.json 读写 token
 * - 解码 JWT 检查 exp
 * - 过期前自动调用 WXApp_RefreshToken 续期
 * - 提供 getValidToken() 给所有 busboss API 调用使用
 */

const fs = require("fs");
const path = require("path");

const CONFIG_PATH = process.env.BUSBOSS_CONFIG_PATH || path.join(__dirname, "busboss_config.json");
const REFRESH_MARGIN_MS = 60 * 60 * 1000; // 过期前 1 小时续期
const REFRESH_CHECK_INTERVAL_MS = 10 * 60 * 1000; // 每 10 分钟检查一次

let cachedConfig = null;
let refreshTimer = null;

function loadConfig() {
  try {
    const raw = fs.readFileSync(CONFIG_PATH, "utf-8");
    cachedConfig = JSON.parse(raw);
    return cachedConfig;
  } catch (err) {
    console.error("[token_manager] 读取 busboss_config.json 失败:", err.message);
    return null;
  }
}

function saveConfig(config) {
  try {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");
    cachedConfig = config;
  } catch (err) {
    console.error("[token_manager] 写入 busboss_config.json 失败:", err.message);
  }
}

function decodeJwtPayload(token) {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payload = JSON.parse(Buffer.from(parts[1], "base64url").toString("utf-8"));
    return payload;
  } catch {
    return null;
  }
}

function getTokenExpiry(token) {
  const payload = decodeJwtPayload(token);
  if (!payload || !payload.exp) return null;
  return payload.exp * 1000; // convert to ms
}

function isTokenExpiringSoon(token) {
  const expiry = getTokenExpiry(token);
  if (!expiry) return true;
  return Date.now() + REFRESH_MARGIN_MS >= expiry;
}

function isTokenExpired(token) {
  const expiry = getTokenExpiry(token);
  if (!expiry) return true;
  return Date.now() >= expiry;
}

async function refreshTokenFromServer(config) {
  const host = `https://${config.host}`;
  const url = `${host}/WeiXinApp/WXApp_RefreshToken?refreshToken=${encodeURIComponent(config.token)}`;
  console.log("[token_manager] 发起 token 续期请求...");

  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: config.token,
      agentappid: config.agentappid || "rycjbsID",
      iswxapp: "1",
      xweb_xhr: "1",
      Referer: `https://servicewechat.com/${config.appid}/0/page-frame.html`,
    },
    signal: AbortSignal.timeout(15000),
  });

  const data = await resp.json();

  if (data.Code === 200 && data.Data) {
    const newToken = data.Data;
    console.log("[token_manager] token 续期成功");
    return newToken;
  }

  throw new Error(`续期失败: Code=${data.Code}, Msg=${data.Msg || JSON.stringify(data)}`);
}

async function tryRefresh() {
  const config = loadConfig();
  if (!config || !config.token) {
    console.warn("[token_manager] 无 token 可续期");
    return false;
  }

  if (!isTokenExpiringSoon(config.token)) {
    const expiry = getTokenExpiry(config.token);
    const remainMin = Math.round((expiry - Date.now()) / 60000);
    console.log(`[token_manager] token 尚未过期，剩余 ${remainMin} 分钟`);
    return true;
  }

  try {
    const newToken = await refreshTokenFromServer(config);
    config.token = newToken;
    config.headers_template.Authorization = newToken;
    saveConfig(config);

    const newExpiry = getTokenExpiry(newToken);
    const remainMin = newExpiry ? Math.round((newExpiry - Date.now()) / 60000) : "?";
    console.log(`[token_manager] 新 token 有效期还剩 ${remainMin} 分钟`);
    return true;
  } catch (err) {
    console.error("[token_manager] token 续期失败:", err.message);
    return false;
  }
}

/**
 * 获取有效的 busboss token。
 * 如果 token 即将过期会尝试续期，续期失败则返回当前 token（可能已过期）。
 * 返回 null 表示完全没有 token。
 */
async function getValidToken() {
  const config = cachedConfig || loadConfig();
  if (!config || !config.token) return null;

  if (isTokenExpired(config.token)) {
    const ok = await tryRefresh();
    if (!ok) {
      console.warn("[token_manager] token 已过期且续期失败，busboss 数据源将不可用");
      return null;
    }
    return cachedConfig.token;
  }

  if (isTokenExpiringSoon(config.token)) {
    tryRefresh().catch((e) => console.error("[token_manager] 后台续期失败:", e.message));
  }

  return config.token;
}

/**
 * 获取完整的 busboss 请求配置（host, token, headers）
 * 返回 null 表示 busboss 不可用
 */
async function getBusbossRequestConfig() {
  const token = await getValidToken();
  if (!token) return null;

  const config = cachedConfig || loadConfig();
  if (!config) return null;

  return {
    host: `https://${config.host}`,
    appid: config.appid,
    agentappid: config.agentappid,
    token,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
      agentappid: config.agentappid || "rycjbsID",
      iswxapp: "1",
      xweb_xhr: "1",
      Referer: `https://servicewechat.com/${config.appid}/0/page-frame.html`,
      "User-Agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.0",
    },
  };
}

/** 启动定时续期 */
function startAutoRefresh() {
  if (refreshTimer) return;
  console.log("[token_manager] 启动自动续期，间隔", REFRESH_CHECK_INTERVAL_MS / 60000, "分钟");

  loadConfig();
  tryRefresh().catch((e) => console.error("[token_manager] 首次续期检查失败:", e.message));

  refreshTimer = setInterval(() => {
    tryRefresh().catch((e) => console.error("[token_manager] 定时续期失败:", e.message));
  }, REFRESH_CHECK_INTERVAL_MS);
}

/** 停止定时续期 */
function stopAutoRefresh() {
  if (refreshTimer) {
    clearInterval(refreshTimer);
    refreshTimer = null;
  }
}

module.exports = {
  getValidToken,
  getBusbossRequestConfig,
  startAutoRefresh,
  stopAutoRefresh,
  isTokenExpired,
  loadConfig,
};
