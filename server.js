/**
 * 粤程助手 — Express API 服务
 * POST /api/chat      — 对话接口
 * POST /api/stt       — 语音转文字
 * POST /api/cron/crawl — 手动触发广深爬虫
 * GET  /              — 聊天页面
 * GET  /api/health    — 健康检查
 */

require("dotenv/config");
const express = require("express");
const path = require("path");
const multer = require("multer");
const { chat, buildSystemPrompt } = require("./agent");
const { crawlHotRoutes } = require("./crawler");

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

const LLM_BASE_URL = process.env.LLM_BASE_URL || "https://dashscope.aliyuncs.com/compatible-mode/v1";
const LLM_API_KEY = process.env.LLM_API_KEY || "";

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// sessionId → messages[]
const sessions = new Map();
const SESSION_TTL = 60 * 60 * 1000; // 1h

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

app.post("/api/chat", async (req, res) => {
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
    if (!res.headersSent) {
      res.status(504).json({ error: "请求超时，请重试" });
    }
  }, 60000);

  try {
    const ctx = { location: session.location };
    const reply = await chat(session.messages, null, ctx);
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
        messages: [
          {
            role: "user",
            content: [{ type: "input_audio", input_audio: { data: dataUri } }],
          },
        ],
        stream: false,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error("STT error:", resp.status, errText);
      return res.status(502).json({ error: "语音识别失败" });
    }

    const data = await resp.json();
    const text = data.choices?.[0]?.message?.content || "";
    res.json({ text });
  } catch (err) {
    console.error("STT error:", err);
    res.status(500).json({ error: "语音识别异常" });
  }
});

// ── 健康检查 ──────────────────────────────────────────────────

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
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
  console.log(`API endpoints:`);
  console.log(`  - POST /api/chat         对话接口`);
  console.log(`  - POST /api/stt          语音转文字`);
  console.log(`  - POST /api/cron/crawl   手动触发广深爬虫`);
  console.log(`  - GET  /api/health       健康检查`);

  console.log("[cron] 服务启动，开始预热广深数据...");
  crawlHotRoutes().catch((e) => console.error("[cron] startup crawl error:", e.message));

  scheduleDailyCrawl();
});
