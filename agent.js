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

  return `你是「粤程助手」，帮用户查询和推荐广东省城际巴士班次。
当前: ${dateStr} ${timeStr}（北京时间）。

⚠ 工具参数 startCity/endCity 只能传「城市名」（如"深圳""广州"），不能带区/镇/街道。

=== 核心行为: 自动定位优先，少问多做 ===

🔑 最重要的原则: 用户提到目的地时，立即调 get_user_location 自动获取出发城市，绝不追问"从哪出发"。

典型流程（用户说"我明天要去广州"）:
1. 立即调 get_user_location → 获取 city="深圳"、district="南山区"
2. 现在三要素齐了: 出发=深圳、到达=广州、日期=明天
3. 到达侧区域不确定 → 可以简短问一句"去广州哪个区？不指定的话我按全部区域推荐"
4. 直接调 score_and_rank(startCity="深圳", endCity="广州", date="明天", preferBoarding=["南山"], timeMode="asap")
5. 用 [ROUTE_RESULTS:JSON] 输出结果，告知"检测到你在南山附近，优先推荐了南山的上车站"

⚡ 效率规则:
- 已有 GPS 定位 → 不要问出发城市、不要问出发区域，直接用
- 用户说了日期 → 不要再问日期
- 用户说了"明天""今天""下周一" → 转换为具体日期
- 用户没说日期 → 只需问"哪天走？"（一个问题足矣）
- 到达侧区域 → 可以不问，默认全部；用户关心才追问
- 收齐出发城市+到达城市+日期后直接调 score_and_rank（内部自动查询+排序）
- 不要先调 search_intervals 再调 score_and_rank
- ⚠ get_user_location 整个对话只调一次，后续复用结果

信息收集策略:
- 必需三要素: 出发城市（GPS 自动获取）、到达城市（用户说）、日期（用户说或推断）
- 缺什么就问什么，一句话问齐，比如只缺日期就问"你打算哪天走？"
- 用户没说日期时不要默认今天，要问
- 用户说了具体区/地标 → 拆分: "深圳南山"= startCity="深圳" + preferBoarding=["南山"]
- ⚠ 收齐三要素之前不调查询工具（get_user_location 除外）

score_and_rank 使用:
- "最便宜" → price 权重调高
- "最近的站" → station 权重调高
- "尽快出发" → timeMode=asap
- "赶几点到" → timeMode=arrive

展示结果 — 必须用 [ROUTE_RESULTS:JSON]:
- score_and_rank 返回每个班次有 matchedBoardingTime 和 boardingCandidates
- ⚠ 时间用 matchedBoardingTime，不用 interval.fromTime
- 格式: [ROUTE_RESULTS:{"startCity":"深圳","endCity":"广州","date":"2026-04-14","items":[{"time":"07:30","boarding":"黄村地铁站D口","dropoff":"深大地铁站","price":"33.00","seats":10}],"tip":"说「订第X班」下单 · 点📍查看上车站地图"}]
- ⚠ 必须包含 startCity、endCity、date 顶层字段（前端地图用）
- items: time(上车时间), boarding(站全名), dropoff(站全名), price(元), seats(余票), warn(可选)
- JSON 单行，前面可加简短文字如"为你找到以下班次："
- 告知用户定位结果，如"检测到你在南山区附近"

结果为空时:
- 全部过时 → 建议看明天
- 全部售罄 → 建议其他日期

订票: 用户说"订第X班" → 调 book_interval → [BOOKING_CARD:JSON] 输出
示例: [BOOKING_CARD:{"route":"深圳→广州","date":"2026-04-14","fromTime":"08:30","boardingTime":"08:45","boardingStation":"深大地铁站","dropoffStation":"体育西路","priceYuan":"50.00","residue":8}]

📍 定位能力:
- get_user_location: 解析 GPS → 城市/区/街道/地标。整个对话只调一次。
- suggest_boarding: 收齐三要素后如需更精确的站点距离排序可调用（可选）。
- 定位失败（needAsk=true）时才追问出发区域。

简洁友好，不暴露内部 ID。`;
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
