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
const REFRESH_COOLDOWN_MS = 30 * 60 * 1000; // 续期失败后冷却 30 分钟

let cachedConfig = null;
let refreshTimer = null;
let inflightRefresh = null; // 并发去重
let nextRefreshAllowedAt = 0; // 冷却截止时间
let unavailableLogged = false; // 「不可用」日志只打一次

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

  // 实际响应格式：{ success: true, msg: "", Authorization: "<newJwt>" }
  // 兼容旧格式：{ Code: 200, Data: "<newJwt>" }
  const newToken = data?.Authorization || data?.Data || "";
  const ok = data?.success === true || data?.Code === 200;

  if (ok && newToken) {
    console.log("[token_manager] token 续期成功");
    return newToken;
  }

  // success:true 但 Authorization 为空 = 服务端拒绝续期（一般是 refreshToken 已彻底过期）
  const unrecoverable = ok && !newToken;
  const err = new Error(`续期失败: ${JSON.stringify(data)}`);
  err.unrecoverable = unrecoverable;
  throw err;
}

async function tryRefresh() {
  if (inflightRefresh) return inflightRefresh;
  if (Date.now() < nextRefreshAllowedAt) return false;

  inflightRefresh = (async () => {
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
      if (config.headers_template) config.headers_template.Authorization = newToken;
      saveConfig(config);
      unavailableLogged = false;

      const newExpiry = getTokenExpiry(newToken);
      const remainMin = newExpiry ? Math.round((newExpiry - Date.now()) / 60000) : "?";
      console.log(`[token_manager] 新 token 有效期还剩 ${remainMin} 分钟`);
      return true;
    } catch (err) {
      nextRefreshAllowedAt = Date.now() + REFRESH_COOLDOWN_MS;
      if (err.unrecoverable) {
        if (!unavailableLogged) {
          console.error(
            "[token_manager] token 已彻底过期，服务端拒绝续期。请通过微信小程序重新登录以获取新 refreshToken，然后更新 busboss_config.json。"
          );
          unavailableLogged = true;
        }
      } else {
        console.error("[token_manager] token 续期失败:", err.message, `（${REFRESH_COOLDOWN_MS / 60000} 分钟内不再重试）`);
      }
      return false;
    }
  })().finally(() => {
    inflightRefresh = null;
  });

  return inflightRefresh;
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
    // 冷却期内不再发起续期，直接判定为不可用
    if (Date.now() < nextRefreshAllowedAt && !inflightRefresh) {
      if (!unavailableLogged) {
        console.warn("[token_manager] busboss token 不可用（处于续期冷却期）");
        unavailableLogged = true;
      }
      return null;
    }
    const ok = await tryRefresh();
    if (!ok) return null;
    return cachedConfig.token;
  }

  if (isTokenExpiringSoon(config.token) && Date.now() >= nextRefreshAllowedAt) {
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
