/**
 * 粤程助手 — Express API 服务
 * POST /api/chat  — 对话接口
 * GET  /          — 聊天页面
 * GET  /api/health — 健康检查
 */

require("dotenv/config");
const express = require("express");
const path = require("path");
const multer = require("multer");
const { chat, buildSystemPrompt } = require("./agent");

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
    return s.messages;
  }
  const messages = [{ role: "system", content: buildSystemPrompt() }];
  sessions.set(sessionId, { messages, lastAccess: Date.now() });
  return messages;
}

// Periodic cleanup
setInterval(() => {
  const now = Date.now();
  for (const [id, s] of sessions) {
    if (now - s.lastAccess > SESSION_TTL) sessions.delete(id);
  }
}, 5 * 60 * 1000);

app.post("/api/chat", async (req, res) => {
  const { sessionId, message } = req.body;
  if (!sessionId || !message) {
    return res.status(400).json({ error: "sessionId 和 message 必填" });
  }

  const messages = getOrCreateSession(sessionId);
  messages.push({ role: "user", content: message });

  const timeout = setTimeout(() => {
    if (!res.headersSent) {
      res.status(504).json({ error: "请求超时，请重试" });
    }
  }, 60000);

  try {
    const reply = await chat(messages);
    clearTimeout(timeout);
    if (!res.headersSent) res.json({ reply });
  } catch (err) {
    clearTimeout(timeout);
    console.error("Chat error:", err);
    if (!res.headersSent) res.status(500).json({ error: "服务异常，请稍后重试" });
  }
});

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

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
