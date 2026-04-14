/**
 * 认证模块 — 微信网页授权 + JWT
 *
 * 支持两种微信授权模式:
 * 1. 微信开放平台 (open.weixin.qq.com) — 扫码登录，适合 PC 浏览器
 * 2. 微信公众号网页授权 — 静默/弹窗授权，适合微信内置浏览器
 *
 * 环境变量:
 *   WECHAT_APP_ID, WECHAT_APP_SECRET — 微信应用凭证
 *   JWT_SECRET — JWT 签名密钥
 *   HOST_URL — 服务公网地址 (如 https://yuecx-assistant.onrender.com)
 */

const jwt = require("jsonwebtoken");
const db = require("./db");

const WECHAT_APP_ID = process.env.WECHAT_APP_ID || "";
const WECHAT_APP_SECRET = process.env.WECHAT_APP_SECRET || "";
const JWT_SECRET = process.env.JWT_SECRET || "yuecheng-dev-secret-change-me";
const JWT_EXPIRES = "7d";
const HOST_URL = process.env.HOST_URL || "";

function isWechatConfigured() {
  return !!(WECHAT_APP_ID && WECHAT_APP_SECRET);
}

function signToken(userId) {
  return jwt.sign({ uid: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

function getCallbackUrl() {
  const base = HOST_URL || "http://localhost:3000";
  return `${base}/auth/wechat/callback`;
}

function buildAuthorizeUrl(state) {
  const redirect = encodeURIComponent(getCallbackUrl());
  const isMP = WECHAT_APP_ID.startsWith("wx") && WECHAT_APP_ID.length <= 18;
  if (isMP) {
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${WECHAT_APP_ID}&redirect_uri=${redirect}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`;
  }
  return `https://open.weixin.qq.com/connect/qrconnect?appid=${WECHAT_APP_ID}&redirect_uri=${redirect}&response_type=code&scope=snsapi_login&state=${state}#wechat_redirect`;
}

async function exchangeCode(code) {
  const url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${WECHAT_APP_ID}&secret=${WECHAT_APP_SECRET}&code=${code}&grant_type=authorization_code`;
  const resp = await fetch(url);
  const data = await resp.json();
  if (data.errcode) throw new Error(`WeChat token error: ${data.errmsg}`);
  return data;
}

async function fetchUserInfo(accessToken, openid) {
  const url = `https://api.weixin.qq.com/sns/userinfo?access_token=${accessToken}&openid=${openid}&lang=zh_CN`;
  const resp = await fetch(url);
  const data = await resp.json();
  if (data.errcode) throw new Error(`WeChat userinfo error: ${data.errmsg}`);
  return data;
}

// Express 中间件: 可选认证 — 有 token 就解析 userId，没有也放行
function optionalAuth(req, res, next) {
  const header = req.headers.authorization;
  if (header && header.startsWith("Bearer ")) {
    const payload = verifyToken(header.slice(7));
    if (payload) req.userId = payload.uid;
  }
  next();
}

// Express 中间件: 强制认证
function requireAuth(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ error: "未登录" });
  }
  const payload = verifyToken(header.slice(7));
  if (!payload) return res.status(401).json({ error: "登录已过期" });
  req.userId = payload.uid;
  next();
}

function registerRoutes(app) {
  // 发起微信授权
  app.get("/auth/wechat", (req, res) => {
    if (!isWechatConfigured()) {
      return res.status(503).json({ error: "微信登录未配置" });
    }
    const state = Math.random().toString(36).slice(2, 10);
    res.redirect(buildAuthorizeUrl(state));
  });

  // 微信授权回调
  app.get("/auth/wechat/callback", async (req, res) => {
    const { code } = req.query;
    if (!code) return res.redirect("/?login=error&msg=missing_code");

    try {
      const tokenData = await exchangeCode(code);
      const wxUser = await fetchUserInfo(tokenData.access_token, tokenData.openid);

      const user = await db.createUser({
        openid: wxUser.openid,
        unionid: wxUser.unionid,
        nickname: wxUser.nickname,
        avatar_url: wxUser.headimgurl,
      });

      const token = signToken(user.id);
      res.redirect(`/?token=${token}`);
    } catch (err) {
      console.error("[auth] wechat callback error:", err.message);
      res.redirect("/?login=error&msg=" + encodeURIComponent(err.message));
    }
  });

  // 开发模式: 无微信时用临时账号登录
  app.post("/auth/dev-login", async (req, res) => {
    const { nickname } = req.body || {};
    const devOpenid = "dev_" + Math.random().toString(36).slice(2, 10);
    const user = await db.createUser({
      openid: devOpenid,
      nickname: nickname || "开发用户",
      avatar_url: "",
    });
    const token = signToken(user.id);
    res.json({ token, user: { id: user.id, nickname: user.nickname, avatar_url: user.avatar_url } });
  });

  // 获取当前用户信息
  app.get("/api/me", requireAuth, async (req, res) => {
    const user = await db.getUserById(req.userId);
    if (!user) return res.status(404).json({ error: "用户不存在" });
    res.json({
      id: user.id,
      nickname: user.nickname,
      avatar_url: user.avatar_url,
      phone: user.phone,
      created_at: user.created_at,
    });
  });
}

module.exports = {
  signToken, verifyToken, optionalAuth, requireAuth,
  isWechatConfigured, registerRoutes,
};
