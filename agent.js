/**
 * 粤出行城际出行助手 — LLM Agent
 * DashScope qwen-max + Function Calling
 * 可作为模块被 server.js 引用，也可直接 CLI 交互。
 */

const { TOOL_SCHEMAS, executeTool } = require("./tools");

const LLM_BASE_URL = process.env.LLM_BASE_URL || "https://dashscope.aliyuncs.com/compatible-mode/v1";
const LLM_API_KEY = process.env.LLM_API_KEY || "";
const LLM_MODEL = process.env.LLM_MODEL || "qwen-max";
const MAX_TOOL_ROUNDS = 8;

function buildSystemPrompt() {
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  return `你是「粤出行城际出行助手」，帮用户查询和推荐广东省城际巴士班次。
当前: ${dateStr} ${timeStr}（北京时间）。

支持广东省内及部分省外共约 89 个城市的城际巴士线路。

核心行为:
1. 用户说出发和目的地后，如缺少日期，默认今天；如缺少时间偏好，问一下。
2. 遇到不确定的城市名，先调 list_cities 确认。
3. 用 score_and_rank 做推荐时，根据用户需求调整权重:
   - "最便宜" → price 权重调高
   - "最近的站" → station 权重调高
   - "尽快出发" → timeMode=asap
   - "赶几点到" → timeMode=arrive
4. 展示推荐时格式:
   排名. HH:MM 上车站→下车站 | ¥价格 | 余票N张 | 综合评分
5. 用户确认某班次时，调 verify_realtime 获取最新状态再告知。
6. 简洁友好。不要暴露内部 ID。`;
}

async function callLLM(messages) {
  const resp = await fetch(`${LLM_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LLM_API_KEY}`,
    },
    body: JSON.stringify({
      model: LLM_MODEL,
      messages,
      tools: TOOL_SCHEMAS,
    }),
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`LLM ${resp.status}: ${text}`);
  }
  return resp.json();
}

/**
 * 处理一轮对话（含多轮 tool calling）。
 * @param {Array} messages - 完整消息历史
 * @returns {string} assistant 最终文本回复
 */
async function chat(messages) {
  if (messages[0]?.role !== "system") {
    messages.unshift({ role: "system", content: buildSystemPrompt() });
  }

  for (let round = 0; round < MAX_TOOL_ROUNDS; round++) {
    const result = await callLLM(messages);
    const choice = result.choices?.[0];
    if (!choice) throw new Error("LLM 无返回");

    const msg = choice.message;
    messages.push(msg);

    if (!msg.tool_calls || msg.tool_calls.length === 0) {
      return msg.content || "";
    }

    for (const tc of msg.tool_calls) {
      const args = typeof tc.function.arguments === "string"
        ? JSON.parse(tc.function.arguments)
        : tc.function.arguments;
      const toolResult = await executeTool(tc.function.name, args);
      messages.push({ role: "tool", tool_call_id: tc.id, content: toolResult });
    }
  }

  return "抱歉，处理中遇到了问题，请重试。";
}

module.exports = { chat, buildSystemPrompt };

// ── CLI 交互模式 ────────────────────────────────────────────

if (require.main === module) {
  const readline = require("readline");
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const messages = [{ role: "system", content: buildSystemPrompt() }];

  console.log("粤出行城际出行助手 (输入 exit 退出)\n");

  function ask() {
    rl.question("你> ", async (input) => {
      input = input.trim();
      if (!input || input === "exit") { rl.close(); process.exit(0); }
      messages.push({ role: "user", content: input });
      try {
        const reply = await chat(messages);
        console.log(`\n助手> ${reply}\n`);
      } catch (err) {
        console.error(`错误: ${err.message}`);
      }
      ask();
    });
  }
  ask();
}
