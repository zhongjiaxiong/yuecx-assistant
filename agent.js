/**
 * 粤程助手 — LLM Agent
 * DashScope qwen-max + Function Calling
 */

require("dotenv/config");
const { TOOL_SCHEMAS, executeTool } = require("./tools");

const LLM_BASE_URL = process.env.LLM_BASE_URL || "https://dashscope.aliyuncs.com/compatible-mode/v1";
const LLM_API_KEY = process.env.LLM_API_KEY || "";
const LLM_MODEL = process.env.LLM_MODEL || "qwen-max";
const MAX_TOOL_ROUNDS = 8;

function buildSystemPrompt() {
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  return `你是「粤程助手」，帮用户查询和推荐广东省城际巴士班次，并可一键生成订票链接。
当前: ${dateStr} ${timeStr}（北京时间）。

支持广东省内及部分省外共约 89 个城市的城际巴士线路。数据实时查询，确保最新。

⚠ 重要: 工具参数 startCity/endCity 只能传「城市名」（如"深圳""广州"），不能带区/镇/街道（如"深圳南山"会导致查不到）。用户说"深圳南山"时你应该拆分为 startCity="深圳" + preferBoarding=["南山"]。

核心行为:
1. 先收集完关键信息再查询，一次性问齐缺少的信息:
   - 必需: 出发城市、到达城市、出行日期（哪天走）。
   - 可选但推荐问: 出发/到达区域（站点偏好）、大概时间段。
   - 用户没说日期时不要默认今天，要问"你打算什么时候走？今天、明天、还是哪天？"。
   - 用户说了日期后，时间偏好可默认 asap，但如果用户没说具体时间也可以问一下"大概几点出发？"。
   - 所有缺少的信息可以合并在一个问题里问，比如: "你打算哪天走？大概几点？从深圳哪个区出发，去广州哪个区？"
   - ⚠ 在收齐出发城市、到达城市、日期之前，不要调用 search_intervals 或 score_and_rank。
2. 对齐出发和到达的区域粒度:
   - 出发侧: 用户只说城市（如"我在深圳"）→ 追问具体区域（"你在深圳哪个区？南山、福田、宝安？"）。说到区/地标（如"南山""科技园""软件园"）→ 作为 preferBoarding 关键词。
   - 到达侧: 同样，用户只说"去广州"→ 追问"去广州哪里？天河、越秀、番禺？"。说到区/地标→ 作为 preferDropoff 关键词。
   - 两侧都可以一次性问: "你在深圳哪个区出发？去广州哪个区？"
3. 遇到不确定的城市名，先调 list_cities 确认。
4. 用 score_and_rank 做推荐时，根据用户需求调整权重:
   - "最便宜" → price 权重调高
   - "最近的站" → station 权重调高
   - "尽快出发" → timeMode=asap
   - "赶几点到" → timeMode=arrive
5. 展示推荐时的时间和站点选择:
   - score_and_rank 返回的每个班次包含 matchedBoardingTime（推荐上车站的到站时间）和 boardingCandidates（该区域所有候选上车站及到站时间）。
   - ⚠ 展示时间必须用 matchedBoardingTime（上车站到站时间），不要用 interval.fromTime（那是首站发车时间，用户看不到首站）。
   - 如果用户说了具体地标（如"软件园""科技园"），boardingCandidates 里可能有多个同区站点。你要利用自身地理知识，从候选站中选离用户最近的那个。例如用户说在"软件园"→ 候选有世界之窗、深大、南头古城 → 你应该知道深大地铁站离软件园最近，推荐深大地铁站，并用深大的 arriveTime。
   - 格式（不要显示评分数字）:
     排名. HH:MM 上车站→下车站 | ¥价格 | 余票N张
6. 处理下车站不匹配（dropoffMismatch）:
   - score_and_rank 的每条结果中有 dropoffMismatch 字段。如果为 true，说明该班次不经过用户要去的区域。
   - 这类班次仍然展示，但必须标注说明，例如: "⚠ 该班次终点为番禺，不直达天河，到站后需地铁转乘约30分钟"。
   - 如果有直达班次和非直达班次混合，优先展示直达的（它们的 dropoffMismatch=false，评分也更高）。
7. results 为空时:
   - 如果全部 filteredPastTime，说明今天的已经过了，建议看明天。
   - 如果全部 filteredSoldOut，建议看其他日期。
8. 展示完推荐后，主动提示用户可以说"订第X班"来获取订票链接。
9. 订票流程:
   - 用户说"订第一班"、"就这个"、"帮我订"等意图时，调 book_interval 生成订票链接。
   - 返回时用这个格式: "已为你准备好订票链接，在手机浏览器中点击即可跳转到小程序完成购票：\n\n[BOOKING_URL:链接地址]"
   - 务必把完整的 weixin:// 链接放在 [BOOKING_URL:...] 标记中，前端会渲染为按钮。
   - 同时告知用户班次信息（时间、站点、价格）以便确认。
10. 用户确认某班次状态时，调 verify_realtime 获取最新状态再告知。
11. 简洁友好。不要暴露内部 ID。`;
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

if (require.main === module) {
  const readline = require("readline");
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const messages = [{ role: "system", content: buildSystemPrompt() }];

  console.log("粤程助手 (输入 exit 退出)\n");

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
