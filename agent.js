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

典型流程（用户说"我明天要去广州天河体育中心"）:
1. 立即调 get_user_location → 获取 city="深圳"、district="南山"
2. 三要素齐了: 出发=深圳、到达=广州、日期=明天
3. 用户说了具体目的地"天河体育中心" → 传 preferDropoff=["天河体育中心"]
4. 调 score_and_rank(startCity="深圳", endCity="广州", date="明天", timeMode="asap", preferDropoff=["天河体育中心"])
5. score_and_rank 自动做三件事:
   a) 用 GPS 坐标计算每个上车站到用户的真实距离（上车距离评分）
   b) 把"天河体育中心"自动 geocode 得到坐标，计算每个下车站到目的地的距离（下车距离评分）
   c) 六维度综合排序: 时间20% + 价格10% + 上车距离25% + 下车距离20% + 站点关键词10% + 余票15%
6. 结果中 matchedBoarding 是离用户最近的上车站，boardingDistMeters 是距离（米）
7. 结果中 matchedDropoff 是离目的地最近的下车站，dropoffDistMeters 是距离（米）
8. 告知用户: "离你最近的上车站是XX（约1.2km），离天河体育中心最近的下车站是YY（约800m）"

典型流程（用户说"我要去广州"，没提日期和时间）:
1. 立即调 get_user_location → 获取 city="深圳"、district="南山"
2. 用户没说日期 → 默认今天；没说时间偏好 → timeMode=asap
3. 三要素齐了: 出发=深圳、到达=广州、日期=今天
4. 调 score_and_rank(startCity="深圳", endCity="广州", date="${dateStr}", timeMode="asap", targetTime="${timeStr}")

⚡ 效率规则:
- 已有 GPS → 不要问出发城市/区域，直接用
- 用户说了日期 → 不要再问
- 用户说了"明天""今天""下周一" → 转换为具体日期
- 用户没说日期 → 默认今天，timeMode=asap（尽快出发）
- 收齐出发城市+到达城市+日期后直接调 score_and_rank
- 不要先调 search_intervals 再调 score_and_rank
- ⚠ get_user_location 整个对话只调一次，后续复用结果

信息收集:
- 必需三要素: 出发城市（GPS 自动获取）、到达城市（用户说）、日期（用户说或推断，未提及则默认今天）
- 用户只说了目的地没说日期 → 日期=今天、timeMode=asap，无需追问直接查
- 缺什么问什么，一句话问齐
- 用户说了具体目的地/地标 → preferDropoff=["地标名"]（系统自动 geocode 排距离）
- 用户只说了区名（如"天河"） → preferDropoff=["天河"]（按关键词匹配）
- 出发侧: GPS 自动处理上车距离，不需要设 preferBoarding（除非用户指定）
- ⚠ 收齐三要素之前不调查询工具（get_user_location 除外）

score_and_rank 用法:
- "最便宜" → 不传额外参数，系统有默认权重
- "尽快出发" → timeMode=asap
- "赶几点到" → timeMode=arrive, targetTime="HH:MM"
- 用户说了具体目的地（"天河体育中心""番禺万达"等）→ preferDropoff=["天河体育中心"]
- 用户只说了区（"去天河"）→ preferDropoff=["天河"]

展示结果 — 系统已自动将 score_and_rank 的卡片推送给用户:
- ⚠ 你不需要输出 [ROUTE_RESULTS:JSON]，系统已自动处理
- ⚠ 你只需要用1-2句简短的话总结推荐，例如:"为你找到5个班次，离你最近的上车站是深大地铁站（约1.5km），最早07:05出发。"
- 如有距离信息（boardingDistMeters/dropoffDistMeters），提及最近的上车站和下车站
- 不要重复列出每个班次的详细信息，卡片里已经有了
- 如果结果为空: 全部过时 → 建议看明天; 全部售罄 → 建议其他日期

订票: 用户说"订第X班" → 调 book_interval → [BOOKING_CARD:JSON] 输出
⚠ BOOKING_CARD 必须包含 book_interval 返回的所有字段（特别是 miniappAppId、miniappPath），直接透传 data 对象的全部字段。
示例: [BOOKING_CARD:{"route":"深圳→广州","date":"2026-04-14","fromTime":"08:30","boardingTime":"08:45","boardingStation":"深大地铁站","dropoffStation":"体育西路","priceYuan":"50.00","residue":8,"source":"yuecx","miniappAppId":"wx44d254291f27af7c","miniappPath":"/package/interval2/pages/interval2/interval2?corpid=ycx&tripDate=2026-04-14&beginCityCode=4403&beginCityName=%E6%B7%B1%E5%9C%B3&endCityCode=4401&endCityName=%E5%B9%BF%E5%B7%9E"}]

📍 定位能力:
- get_user_location: 解析 GPS → 城市/区/街道。整个对话只调一次。
- 上车距离: score_and_rank 自动根据 GPS 计算真实距离，无需额外设置。
- 下车距离: 用户说了目的地关键词就传 preferDropoff，系统自动 geocode + 距离排序。
- suggest_boarding: 可选，用于更精确的站点排序。
- 定位失败（needAsk=true）时才追问出发区域。

⚠ 绝对不要在回复中输出图片、链接或 URL（包括 markdown 图片语法 ![](url)、超链接 [text](url)、裸 URL）。只用纯文本。

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

const TOOL_STEP_MAP = {
  get_user_location: "locating",
  search_intervals: "searching",
  score_and_rank: "searching",
  suggest_boarding: "searching",
  verify_realtime: "searching",
  refresh_cache: "searching",
  book_interval: "booking",
  list_cities: "searching",
};

function fmtDist(meters) {
  if (meters == null) return null;
  return meters < 1000 ? `${meters}m` : `${(meters / 1000).toFixed(1)}km`;
}

function buildCardFromToolResult(parsed) {
  const q = parsed.query || {};
  const ri = parsed.routeInfo || {};
  const items = (parsed.results || []).map((r) => {
    const iv = r.interval || {};
    const item = {
      time: r.matchedBoardingTime || iv.fromTime || iv.from_time || "",
      boarding: r.matchedBoarding || "",
      dropoff: r.matchedDropoff || "",
      price: iv.priceYuan || (iv.priceFen ? (iv.priceFen / 100).toFixed(2) : ""),
      seats: iv.residue != null ? iv.residue : null,
    };
    const bd = fmtDist(r.boardingDistMeters);
    if (bd) item.boardingDist = bd;
    const dd = fmtDist(r.dropoffDistMeters);
    if (dd) item.dropoffDist = dd;
    if (iv.residue != null && iv.residue <= 3 && iv.residue > 0) item.warn = "余票紧张";
    return item;
  });
  return {
    startCity: ri.startCityName || q.startCity || "",
    endCity: ri.endCityName || q.endCity || "",
    date: q.date || "",
    items,
    tip: "说「订第X班」下单 · 点📍查看上车站地图",
  };
}

function sanitizeReply(text) {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/(?<!\[)\[([^\]]+)\]\(https?:\/\/[^)]*\)/g, "$1")
    .replace(/(^|[\s，。！？、])https?:\/\/\S+/g, "$1")
    .replace(/ {2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function ensureBookingCardFields(reply, lastBookingData) {
  if (!lastBookingData || !reply.includes("[BOOKING_CARD:")) return reply;

  return reply.replace(/\[BOOKING_CARD:([\s\S]*?)\]/g, (match, jsonStr) => {
    try {
      const card = JSON.parse(jsonStr);
      if (!card.miniappAppId && lastBookingData.miniappAppId) {
        card.miniappAppId = lastBookingData.miniappAppId;
      }
      if (!card.miniappPath && lastBookingData.miniappPath) {
        card.miniappPath = lastBookingData.miniappPath;
      }
      if (!card.source && lastBookingData.source) {
        card.source = lastBookingData.source;
      }
      return `[BOOKING_CARD:${JSON.stringify(card)}]`;
    } catch {
      return match;
    }
  });
}

async function chat(messages, userId, ctx, onProgress, onCardReady) {
  if (messages[0]?.role !== "system") {
    messages.unshift({ role: "system", content: buildSystemPrompt() });
  }

  if (onProgress) onProgress("thinking");

  let lastBookingData = null;

  for (let round = 0; round < MAX_TOOL_ROUNDS; round++) {
    const result = await callLLM(messages);
    const choice = result.choices?.[0];
    if (!choice) throw new Error("LLM 无返回");

    const msg = choice.message;
    messages.push(msg);

    if (!msg.tool_calls || msg.tool_calls.length === 0) {
      const reply = msg.content || "";
      return sanitizeReply(ensureBookingCardFields(reply, lastBookingData));
    }

    const toolCalls = msg.tool_calls;
    const uniqueSteps = [...new Set(toolCalls.map(tc => TOOL_STEP_MAP[tc.function.name] || "processing"))];
    for (const step of uniqueSteps) { if (onProgress) onProgress(step); }

    const toolResults = await Promise.all(toolCalls.map(async (tc) => {
      const args = typeof tc.function.arguments === "string"
        ? JSON.parse(tc.function.arguments)
        : tc.function.arguments;
      return { id: tc.id, name: tc.function.name, content: await executeTool(tc.function.name, args, userId, ctx) };
    }));

    for (const tr of toolResults) {
      messages.push({ role: "tool", tool_call_id: tr.id, content: tr.content });
      if (tr.name === "score_and_rank" && onCardReady) {
        try {
          const parsed = JSON.parse(tr.content);
          if (parsed.success && parsed.results && parsed.results.length > 0) {
            onCardReady(buildCardFromToolResult(parsed));
          }
        } catch (_) {}
      }
      if (tr.name === "book_interval") {
        try {
          const parsed = JSON.parse(tr.content);
          if (parsed.success && parsed.data) {
            lastBookingData = parsed.data;
          }
        } catch (_) {}
      }
    }

    if (onProgress) onProgress("thinking");
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
