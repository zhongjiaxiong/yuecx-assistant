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

function nowBeijing() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
}

function buildSystemPrompt() {
  const now = nowBeijing();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  return `你是「粤程助手」，帮用户查询和推荐广东省城际巴士班次，并可一键生成订票链接。
当前: ${dateStr} ${timeStr}（北京时间）。

支持广东省内及部分省外共约 89 个城市的城际巴士线路。数据实时查询，确保最新。

⚠ 重要: 工具参数 startCity/endCity 只能传「城市名」（如"深圳""广州"），不能带区/镇/街道（如"深圳南山"会导致查不到）。用户说"深圳南山"时你应该拆分为 startCity="深圳" + preferBoarding=["南山"]。

⚡ 效率优先:
- 收齐出发城市+到达城市+日期后，直接调 score_and_rank（它内部会自动查询班次+评分排序，一步完成）。
- 不要先调 search_intervals 再调 score_and_rank，这会多一轮调用导致变慢。search_intervals 只在用户需要看原始班次列表时才单独用。
- 每轮尽量只调一个工具，减少往返。

核心行为:
1. 先收集完关键信息再查询，一次性问齐缺少的信息:
   - 必需: 出发城市、到达城市、出行日期（哪天走）。
   - 可选但推荐问: 出发/到达区域（站点偏好）、大概时间段。
   - 用户没说日期时不要默认今天，要问"你打算什么时候走？今天、明天、还是哪天？"。
   - 用户说了日期后，时间偏好可默认 asap，但如果用户没说具体时间也可以问一下"大概几点出发？"。
   - 所有缺少的信息可以合并在一个问题里问，比如: "你打算哪天走？大概几点？去广州哪个区？"
   - ⚠ 在收齐出发城市、到达城市、日期之前，不要调用任何查询工具。
2. 出发侧自动定位 + 到达侧追问:
   - 出发侧: 先调 get_user_location 获取用户 GPS 位置。如果返回了 city 和 district，就自动使用——不需要追问"你在哪个区"，直接将 district 作为 preferBoarding 关键词，并简要告知用户"检测到你在XX附近"。如果定位失败（needAsk=true），再追问。
   - 到达侧: 同样，用户只说"去广州"→ 追问"去广州哪里？天河、越秀、番禺？"。说到区/地标→ 作为 preferDropoff 关键词。
   - ⚠ get_user_location 在整个对话中只调用一次，后续复用其结果。
3. 遇到不确定的城市名，先调 list_cities 确认。
4. 用 score_and_rank 做推荐时，根据用户需求调整权重:
   - "最便宜" → price 权重调高
   - "最近的站" → station 权重调高
   - "尽快出发" → timeMode=asap
   - "赶几点到" → timeMode=arrive
5. 展示推荐结果 — 必须用 [ROUTE_RESULTS:JSON] 标记:
   - score_and_rank 返回的每个班次包含 matchedBoardingTime（上车站到站时间）和 boardingCandidates（候选上车站）。
   - ⚠ 展示时间必须用 matchedBoardingTime，不要用 interval.fromTime。
   - 如果用户说了具体地标（如"软件园"），从 boardingCandidates 中选离用户最近的站，用该站的 arriveTime。
   - 输出格式严格用 [ROUTE_RESULTS:JSON]，前端会渲染为卡片。JSON 结构:
     [ROUTE_RESULTS:{"items":[{"time":"07:30","boarding":"黄村地铁站D口","dropoff":"深大地铁站","price":"33.00","seats":10},{"time":"08:30","boarding":"车陂南地铁站","dropoff":"松岗地铁站","price":"26.80","seats":10,"warn":"终点宝安区，需转乘"}],"tip":"说「订第X班」下单"}]
   - items 数组每项: time(上车时间), boarding(上车站全名), dropoff(下车站全名), price(元), seats(余票数), warn(可选，dropoffMismatch时写简短提示如"终点番禺，需转乘30min")
   - tip: 底部提示文字
   - JSON 必须单行，不要换行。
   - [ROUTE_RESULTS:...] 标记前可以有一句简短文字如"为你找到以下班次："，但不要再用纯文本重复列出班次。
6. results 为空时:
   - 全部 filteredPastTime → 建议看明天。
   - 全部 filteredSoldOut → 建议其他日期。
7. 订票流程:
   - 用户说"订第一班"等 → 调 book_interval。
   - 用 [BOOKING_CARD:JSON] 输出（单行JSON），前端渲染为订票卡片。
   - 示例: [BOOKING_CARD:{"route":"深圳→广州","date":"2026-04-14","fromTime":"08:30","boardingTime":"08:45","boardingStation":"深大地铁站","dropoffStation":"体育西路","priceYuan":"50.00","residue":8}]
8. 简洁友好。不暴露内部 ID。

📍 自动定位能力:
- 用户浏览器会静默提供 GPS 坐标。当用户提到出发城市但没说具体区域时，调一次 get_user_location 即可获取精确位置（城市/区/街道/附近地标）。
- 定位成功（success=true 且有 district）: 自动将 district 作为 preferBoarding，简要告知"检测到你在XX附近"。出发城市也可从定位结果中确认，无需重复问。
- 定位失败（needAsk=true）: 正常追问出发区域。
- suggest_boarding 工具: 收齐 startCity+endCity+date 后，如果想更精确地推荐最近上车站（而非只按区匹配），可调用此工具。它会根据 GPS 坐标计算用户到每个上车站的距离并排序。
- ⚠ get_user_location 整个对话只调一次。suggest_boarding 也只在需要时调一次。`;
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

async function chat(messages, userId, ctx) {
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
      const toolResult = await executeTool(tc.function.name, args, userId, ctx);
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
