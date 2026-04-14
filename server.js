/**
 * 粤程助手 — Express API 服务
 *
 * 认证:
 *   GET  /auth/wechat           — 发起微信授权
 *   GET  /auth/wechat/callback  — 微信回调
 *   POST /auth/dev-login        — 开发模式登录
 *   GET  /api/me                — 当前用户信息
 *
 * 核心:
 *   POST /api/chat              — 对话接口
 *   POST /api/stt               — 语音转文字
 *
 * 乘客:
 *   GET    /api/passengers       — 常用乘客列表
 *   POST   /api/passengers       — 添加乘客
 *   DELETE /api/passengers/:id   — 删除乘客
 *
 * 搜索历史:
 *   GET  /api/search-history     — 搜索历史
 *
 * 行程:
 *   GET    /api/trips            — 行程列表
 *   POST   /api/trips            — 收藏行程
 *   PATCH  /api/trips/:id/status — 更新行程状态
 *   DELETE /api/trips/:id        — 删除行程
 *
 * 运维:
 *   POST /api/cron/crawl         — 手动触发广深爬虫
 *   GET  /api/health             — 健康检查
 */

require("dotenv/config");
const express = require("express");
const path = require("path");
const multer = require("multer");
const { chat, buildSystemPrompt } = require("./agent");
const { crawlHotRoutes } = require("./crawler");
const auth = require("./auth");
const db = require("./db");

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

const LLM_BASE_URL = process.env.LLM_BASE_URL || "https://dashscope.aliyuncs.com/compatible-mode/v1";
const LLM_API_KEY = process.env.LLM_API_KEY || "";

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ── 认证路由 ──────────────────────────────────────────────────

auth.registerRoutes(app);

// ── 会话管理 ──────────────────────────────────────────────────

const sessions = new Map();
const SESSION_TTL = 60 * 60 * 1000;

function getOrCreateSession(sessionId) {
  if (sessions.has(sessionId)) {
    const s = sessions.get(sessionId);
    s.lastAccess = Date.now();
    return s;
  }
  const session = { messages: [{ role: "system", content: buildSystemPrompt() }], lastAccess: Date.now(), location: null };
  sessions.set(sessionId, session);
  return session;
}

setInterval(() => {
  const now = Date.now();
  for (const [id, s] of sessions) {
    if (now - s.lastAccess > SESSION_TTL) sessions.delete(id);
  }
}, 5 * 60 * 1000);

// ── 对话 ──────────────────────────────────────────────────────

app.post("/api/chat", auth.optionalAuth, async (req, res) => {
  const { sessionId, message, location } = req.body;
  if (!sessionId || !message) {
    return res.status(400).json({ error: "sessionId 和 message 必填" });
  }

  const session = getOrCreateSession(sessionId);

  if (location && location.latitude && location.longitude) {
    session.location = { latitude: location.latitude, longitude: location.longitude };
  }

  session.messages.push({ role: "user", content: message });

  const timeout = setTimeout(() => {
    if (!res.headersSent) res.status(504).json({ error: "请求超时，请重试" });
  }, 60000);

  try {
    const ctx = { location: session.location };
    const reply = await chat(session.messages, req.userId || null, ctx);
    clearTimeout(timeout);
    if (!res.headersSent) res.json({ reply });
  } catch (err) {
    clearTimeout(timeout);
    console.error("Chat error:", err);
    if (!res.headersSent) res.status(500).json({ error: "服务异常，请稍后重试" });
  }
});

// ── 语音转文字 ────────────────────────────────────────────────

app.post("/api/stt", upload.single("audio"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "缺少音频文件" });

  try {
    const mime = req.file.mimetype || "audio/webm";
    const b64 = req.file.buffer.toString("base64");
    const dataUri = `data:${mime};base64,${b64}`;

    const resp = await fetch(`${LLM_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LLM_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen3-asr-flash",
        messages: [{ role: "user", content: [{ type: "input_audio", input_audio: { data: dataUri } }] }],
        stream: false,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error("STT error:", resp.status, errText);
      return res.status(502).json({ error: "语音识别失败" });
    }

    const data = await resp.json();
    res.json({ text: data.choices?.[0]?.message?.content || "" });
  } catch (err) {
    console.error("STT error:", err);
    res.status(500).json({ error: "语音识别异常" });
  }
});

// ── 常用乘客 ──────────────────────────────────────────────────

app.get("/api/passengers", auth.requireAuth, async (req, res) => {
  try {
    const rows = await db.listPassengers(req.userId);
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post("/api/passengers", auth.requireAuth, async (req, res) => {
  try {
    const { name, phone, id_card, is_default } = req.body;
    if (!name) return res.status(400).json({ success: false, error: "姓名必填" });
    const row = await db.addPassenger(req.userId, { name, phone, id_card, is_default });
    res.json({ success: true, data: row });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete("/api/passengers/:id", auth.requireAuth, async (req, res) => {
  try {
    const ok = await db.deletePassenger(req.userId, parseInt(req.params.id));
    res.json({ success: ok });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ── 搜索历史 ──────────────────────────────────────────────────

app.get("/api/search-history", auth.requireAuth, async (req, res) => {
  try {
    const rows = await db.getSearchHistory(req.userId);
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ── 行程管理 ──────────────────────────────────────────────────

app.get("/api/trips", auth.requireAuth, async (req, res) => {
  try {
    const rows = await db.listTrips(req.userId, { status: req.query.status });
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post("/api/trips", auth.requireAuth, async (req, res) => {
  try {
    const { startCity, endCity, travelDate } = req.body;
    if (!startCity || !endCity || !travelDate) {
      return res.status(400).json({ success: false, error: "出发城市、到达城市、日期必填" });
    }
    const row = await db.addTrip(req.userId, req.body);
    res.json({ success: true, data: row });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.patch("/api/trips/:id/status", auth.requireAuth, async (req, res) => {
  try {
    const ok = await db.updateTripStatus(parseInt(req.params.id), req.userId, req.body.status);
    res.json({ success: ok });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete("/api/trips/:id", auth.requireAuth, async (req, res) => {
  try {
    const ok = await db.deleteTrip(parseInt(req.params.id), req.userId);
    res.json({ success: ok });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ── 健康检查 ──────────────────────────────────────────────────

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString(), wechat: auth.isWechatConfigured() });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ── 定时爬虫（广深）────────────────────────────────────────────

app.post("/api/cron/crawl", async (req, res) => {
  const secret = req.headers["x-cron-secret"] || req.query.secret;
  if (process.env.CRON_SECRET && secret !== process.env.CRON_SECRET) {
    return res.status(403).json({ error: "forbidden" });
  }
  res.json({ status: "started" });
  crawlHotRoutes().catch((e) => console.error("[cron] manual trigger error:", e.message));
});

function msUntilBeijing(hour, minute) {
  const now = new Date();
  const bj = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
  const target = new Date(bj);
  target.setHours(hour, minute, 0, 0);
  if (target <= bj) target.setDate(target.getDate() + 1);
  return target - bj;
}

function scheduleDailyCrawl() {
  const run = () => {
    crawlHotRoutes().catch((e) => console.error("[cron] daily error:", e.message));
    setTimeout(run, msUntilBeijing(6, 0));
  };
  const delay = msUntilBeijing(6, 0);
  console.log(`[cron] 下次广深定时抓取: ${Math.round(delay / 60000)} 分钟后`);
  setTimeout(run, delay);
}

// ── 启动 ──────────────────────────────────────────────────────

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`WeChat login: ${auth.isWechatConfigured() ? "configured" : "not configured (dev mode available)"}`);

  db.migrate().catch((e) => console.error("[db] auto-migrate:", e.message));

  console.log("[cron] 服务启动，开始预热广深数据...");
  crawlHotRoutes().catch((e) => console.error("[cron] startup crawl error:", e.message));
  scheduleDailyCrawl();
});
