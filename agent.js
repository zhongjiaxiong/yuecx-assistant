/**
 * 粤程助手 — LLM Agent
 * DashScope qwen-max + Function Calling
 */

require("dotenv/config");
const { TOOL_SCHEMAS, executeTool } = require("./tools");
const db = require("./db");

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

典型流程（用户说"我要去广州华景新城"）:
1. 立即调 get_user_location
2. "华景新城"是比"广州"更具体的地名 → 必须传 preferDropoff=["华景新城"]
3. 调 score_and_rank(startCity="深圳", endCity="广州", date="${dateStr}", timeMode="asap", targetTime="${timeStr}", preferDropoff=["华景新城"])
4. 结果会包含每个下车站到华景新城的距离，告知用户最近下车站

典型流程（用户说"我要去广州"，没提日期和时间）:
1. 立即调 get_user_location → 获取 city="深圳"、district="南山"
2. 用户没说日期 → 默认今天；没说时间偏好 → timeMode=asap
3. 三要素齐了: 出发=深圳、到达=广州、日期=今天
4. 只说了城市没说具体地点 → 不传 preferDropoff
5. 调 score_and_rank(startCity="深圳", endCity="广州", date="${dateStr}", timeMode="asap", targetTime="${timeStr}")

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
- 出发侧: GPS 自动处理上车距离，不需要设 preferBoarding（除非用户指定）
- ⚠ 收齐三要素之前不调查询工具（get_user_location 除外）

🔴 preferDropoff 提取规则（非常重要）:
- 凡是用户消息中提到了比"城市名"更具体的地名，一律提取为 preferDropoff
- 包括但不限于: 小区名、商圈、学校、医院、地铁站、商场、景点、村镇、道路名等
- "去广州华景新城" → preferDropoff=["华景新城"]（小区名）
- "去广州天河体育中心" → preferDropoff=["天河体育中心"]（地标）
- "去广州番禺万达" → preferDropoff=["番禺万达"]（商圈）
- "去广州岗顶" → preferDropoff=["岗顶"]（地名）
- "去广州大学城" → preferDropoff=["大学城"]（区域地标）
- "去天河" → preferDropoff=["天河"]（区名，按关键词匹配）
- "去广州"（只有城市名，无具体地点）→ 不传 preferDropoff
- ⚠ 只要地名比城市更具体就必须传，不传会导致用户看不到下车距离！

score_and_rank 用法:
- "最便宜" → 不传额外参数，系统有默认权重
- "尽快出发" → timeMode=asap
- "赶几点到" → timeMode=arrive, targetTime="HH:MM"
- 用户说了具体目的地 → 必须传 preferDropoff（见上方规则）

展示结果 — 系统已自动将 score_and_rank 的卡片推送给用户:
- ⚠ 你不需要输出 [ROUTE_RESULTS:JSON]，系统已自动处理
- ⚠ 你只需要用1-2句简短的话总结推荐，例如:"为你找到5个班次，离你最近的上车站是深大地铁站（约1.5km），最早07:05出发。"
- 如有距离信息（boardingDistMeters/dropoffDistMeters），提及最近的上车站和下车站
- 不要重复列出每个班次的详细信息，卡片里已经有了
- 如果结果为空: 全部过时 → 建议看明天; 全部售罄 → 建议其他日期

订票: 用户说"订第X班" → 调 book_interval({rank: X}) → [BOOKING_CARD:JSON] 输出
⚠ 用 rank 参数最简单——传 1/2/3 这种序号，系统会自动从上一次 score_and_rank 的结果里取真实班次；**不要**把"订第1班"里的 1 当成 intervalId 传！
⚠ BOOKING_CARD 必须包含 book_interval 返回的所有字段（特别是 miniappAppId、miniappPath），直接透传 data 对象的全部字段。
示例: [BOOKING_CARD:{"route":"深圳→广州","date":"2026-04-14","fromTime":"08:30","boardingTime":"08:45","boardingStation":"深大地铁站","dropoffStation":"体育西路","priceYuan":"50.00","residue":8,"source":"yuecx","miniappAppId":"wx44d254291f27af7c","miniappPath":"/package/bus/pages/interval/interval?corpid=ycx&tripDate=2026-04-14&beginCityCode=440300&beginCityName=%E6%B7%B1%E5%9C%B3&beginAddressCode=395453864&beginAddressName=%E6%B7%B1%E5%A4%A7%E5%9C%B0%E9%93%81%E7%AB%99&endCityCode=020&endCityName=%E5%B9%BF%E5%B7%9E&endAddressCode=401391011&endAddressName=%E4%BD%93%E8%82%B2%E8%A5%BF%E8%B7%AF"}]

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
  const body = JSON.stringify({ model: LLM_MODEL, messages, tools: TOOL_SCHEMAS });
  const MAX_RETRIES = 5;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const controller = new AbortController();
    const to = setTimeout(() => controller.abort(), 45000);
    try {
      const resp = await fetch(`${LLM_BASE_URL}/chat/completions`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${LLM_API_KEY}` },
        body,
        signal: controller.signal,
      });
      clearTimeout(to);
      if (!resp.ok) {
        const text = await resp.text();
        // Don't retry on 4xx (bad request, etc.) — those won't succeed on retry
        if (resp.status >= 400 && resp.status < 500) throw new Error(`LLM ${resp.status}: ${text}`);
        throw new Error(`LLM ${resp.status}: ${text}`);
      }
      return resp.json();
    } catch (err) {
      clearTimeout(to);
      const code = err.cause?.code || err.code || "";
      // Don't retry on 4xx (returned early above); do retry on network errors
      const retriable = code === "UND_ERR_SOCKET" || code === "ECONNRESET" || code === "ETIMEDOUT" || err.message?.includes("fetch failed") || err.message?.match(/LLM 5\d\d/);
      console.error(`[llm] attempt ${attempt}/${MAX_RETRIES} failed:`, err.message, code);
      if (!retriable || attempt === MAX_RETRIES) throw err;
      await new Promise(r => setTimeout(r, Math.min(500 * Math.pow(2, attempt - 1), 4000)));
    }
  }
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

/**
 * 确定性路由：如果用户最新消息是明确的"[日期] [从X] 去 Y" 模式，直接跳过 LLM 第一轮，
 * 自己决定工具调用。保证 100% 触发 score_and_rank → 卡片。
 * 返回 null 表示不匹配，走正常 LLM 流程。
 */
async function tryFastRoute(ctx) {
  const msg = ctx?.lastUserMessage;
  if (!msg || typeof msg !== "string") return null;
  const text = msg.trim().replace(/^[,，\s。!！?？.]+|[,，\s。!！?？.]+$/g, "");

  // 宽松抓日期词（可以在任意位置）
  const dateMap = { 今天: 0, 明天: 1, 后天: 2, 大后天: 3 };
  let offsetDays = 0;
  let textForMatch = text;
  const dateMatch = text.match(/(今天|明天|后天|大后天)/);
  if (dateMatch) {
    offsetDays = dateMap[dateMatch[1]];
    textForMatch = text.replace(dateMatch[1], "");
  }
  // 剥掉开头的主语/助动词等噪音
  textForMatch = textForMatch.replace(/^(我|要|想|需要|打算|准备|得|该|计划)+/, "").trim();

  // 出发 + 目的 关键词：
  //   可选前缀：从 X / 在 X（位置）
  //   动作：去/回/到/前往/赶去/飞往
  //   目的：[地名|家|公司|单位|学校|宿舍]
  // 例：回家 / 去公司 / 去广州 / 从深圳回东莞老家
  const m = textForMatch.match(/^(?:(?:从|在)([\u4e00-\u9fa5]{2,6}?))?\s*(?:去|回|到|往|前往|赴|飞往|赶去)([\u4e00-\u9fa5]+?)(?:[？?。!！.,，\s]|$)/);
  if (!m) return null;
  const fromRaw = m[1] || null;
  const toBlob = m[2];
  if (!toBlob) return null;

  // 语义目的地：家/公司/单位/学校/宿舍 → 查用户保存的 addresses
  // label 约定：'home' = 家，'company' = 公司/单位
  const SEMANTIC_LABELS = {
    "家": ["home", "家"],
    "家里": ["home", "家"],
    "回家": ["home", "家"],  // 兜底 —— toBlob 本身就是"家"时 outer regex 已把"回"吃掉，这里 key 是为了覆盖万一
    "公司": ["company", "公司", "单位", "办公室"],
    "单位": ["company", "公司", "单位", "办公室"],
    "办公室": ["company", "公司", "单位", "办公室"],
    "学校": ["school", "学校", "大学"],
    "宿舍": ["dorm", "宿舍"],
  };
  let endCity = null;
  let preferDropoff = null;

  const semanticKey = Object.keys(SEMANTIC_LABELS).find((k) => toBlob === k || toBlob.startsWith(k));
  if (semanticKey && ctx?.userId) {
    try {
      const addrs = await db.listAddresses(ctx.userId);
      const wanted = SEMANTIC_LABELS[semanticKey];
      const hit = addrs.find((a) => {
        const lbl = String(a.label || "").toLowerCase();
        return wanted.some((w) => lbl === w.toLowerCase() || lbl.includes(w));
      });
      if (hit && hit.city) {
        const cityRows = await db.findCityByName(hit.city).catch(() => []);
        endCity = cityRows.length ? cityRows[0].city_name : hit.city.replace(/市|省|区/g, "");
        // 用完整地址作为 preferDropoff 给 scorer geocode
        if (hit.address) preferDropoff = hit.address;
        console.log(`[fast-route] 语义目的: "${semanticKey}" → ${endCity} / ${preferDropoff || '(无具体地址)'}`);
      } else {
        // 用户说"回家"但没存地址 → 让 LLM 友好提示
        console.log(`[fast-route] 用户说"${semanticKey}"但未找到对应地址 (label wanted: ${wanted.join("/")})`);
        return null;
      }
    } catch (e) {
      console.warn("[fast-route] 查用户地址失败:", e.message);
      return null;
    }
  }

  // 不是语义词 → 老流程拆"城市名 + 目的地关键词"
  if (!endCity) {
    for (let len = Math.min(toBlob.length, 6); len >= 2; len--) {
      const candidate = toBlob.slice(0, len);
      const rows = await db.findCityByName(candidate).catch(() => []);
      if (rows.length > 0) {
        endCity = rows[0].city_name;
        const rest = toBlob.slice(len);
        if (rest.length >= 2) preferDropoff = rest;
        break;
      }
    }
  }
  if (!endCity) return null;

  // 起点：用户明说 > GPS 定位 > 放弃（没法自动）
  let startCity = null;
  if (fromRaw) {
    const fromRows = await db.findCityByName(fromRaw).catch(() => []);
    if (fromRows.length > 0) startCity = fromRows[0].city_name;
  }
  if (!startCity && ctx?.session?.locationResolved?.city) {
    startCity = ctx.session.locationResolved.city;
  }
  if (!startCity) return null; // 缺起点，LLM 去处理
  if (startCity === endCity) return null; // 同城，让 LLM 引导

  // 算出行日期
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
  now.setDate(now.getDate() + offsetDays);
  const date = now.toISOString().slice(0, 10);

  // 算当前时间给 score_and_rank 用
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");

  return {
    date,
    startCity,
    endCity,
    preferDropoff: preferDropoff ? [preferDropoff] : undefined,
    targetTime: `${hh}:${mm}`,
    timeMode: "asap",
    _userSpecifiedDate: !!dateMatch,  // if user said 今天/明天/后天, don't auto-retry other days
  };
}

// Chinese numeral to digit
const CN_NUM = { 一:1, 二:2, 两:2, 三:3, 四:4, 五:5, 六:6, 七:7, 八:8, 九:9, 十:10 };

function _dateOffset(dateStr, days) {
  // Parse yyyy-mm-dd as Beijing date and add days, avoiding UTC drift.
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + days);
  return dt.toISOString().slice(0, 10);
}

/**
 * 识别"订第X班/车/的"等订票意图，短路 LLM 直接 book_interval(rank)。
 * 匹配：订第1班 / 订第一班车 / 定第1班的 / 要订第二班
 */
function tryFastBook(ctx) {
  const msg = ctx?.lastUserMessage;
  if (!msg) return null;
  const text = msg.trim();
  const m = text.match(/^(?:我?(?:要|想|需要)?)?\s*(?:订|定|预订|要)\s*第?\s*(\d+|[一二两三四五六七八九十])\s*(?:班|个)?(?:车|的)?\s*[？?。!！.,，]?\s*$/);
  if (!m) return null;
  const raw = m[1];
  const rank = /^\d+$/.test(raw) ? parseInt(raw, 10) : CN_NUM[raw];
  if (!rank || rank < 1 || rank > 20) return null;
  // Must have a prior score_and_rank in this session
  if (!ctx?.session?.lastRanked?.results?.length) return null;
  return { rank };
}

async function chat(messages, userId, ctx, onProgress, onCardReady) {
  if (messages[0]?.role !== "system") {
    messages.unshift({ role: "system", content: buildSystemPrompt() });
  }
  // 让工具/fast-path 链路都能从 ctx 拿到 userId（查用户保存的地址/乘车人等）
  if (ctx && userId && !ctx.userId) ctx.userId = userId;

  if (onProgress) onProgress("thinking");

  let lastBookingData = null;
  let lastRouteCard = null;
  let fastPathReply = null;

  // Fast-path book: "订第1班" / "订第一班车" 等 → 直接调 book_interval(rank)
  const bookShortcut = tryFastBook(ctx);
  if (bookShortcut) {
    console.log(`[fast-book] shortcut: rank=${bookShortcut.rank}`);
    if (onProgress) onProgress("booking");
    const toolResult = await executeTool("book_interval", bookShortcut, userId, ctx);
    messages.push({
      role: "assistant",
      tool_calls: [{ id: "fastbook_0", type: "function", function: { name: "book_interval", arguments: JSON.stringify(bookShortcut) } }],
    });
    messages.push({ role: "tool", tool_call_id: "fastbook_0", content: toolResult });
    try {
      const parsed = JSON.parse(toolResult);
      if (parsed.success && parsed.data) {
        const d = parsed.data;
        const summary = `已为你准备好${d.date} ${d.fromTime} ${d.route}的订票信息，点卡片跳转${d.miniappName || "小程序"}完成支付。`;
        return `[BOOKING_CARD:${JSON.stringify(d)}]\n${summary}`;
      }
      // else fall through to LLM so it can apologize / retry
    } catch (_) {}
    messages.pop(); messages.pop();
  }

  // Deterministic route shortcut: skip LLM round 1 entirely for "[明天|今天] [从X] 去 Y" messages
  const routeShortcut = await tryFastRoute(ctx);
  if (routeShortcut) {
    // 如果用户没明说日期，且今天查出空（常见于晚上没车了），自动降到明天重试
    const tryDates = routeShortcut._userSpecifiedDate ? [routeShortcut.date] : [routeShortcut.date, _dateOffset(routeShortcut.date, 1)];

    for (const tryDate of tryDates) {
      const toolArgs = { ...routeShortcut, date: tryDate };
      delete toolArgs._userSpecifiedDate;
      console.log(`[fast-route] shortcut: ${JSON.stringify(toolArgs)}`);
      if (onProgress) onProgress("searching");
      const toolResult = await executeTool("score_and_rank", toolArgs, userId, ctx);
      messages.push({
        role: "assistant",
        tool_calls: [{ id: "fastroute_" + tryDate, type: "function", function: { name: "score_and_rank", arguments: JSON.stringify(toolArgs) } }],
      });
      messages.push({ role: "tool", tool_call_id: "fastroute_" + tryDate, content: toolResult });

      try {
        const parsed = JSON.parse(toolResult);
        if (parsed.success && parsed.results?.length > 0) {
          if (ctx?.session) {
            ctx.session.lastRanked = {
              results: parsed.results,
              startCity: parsed.routeInfo?.startCityName || parsed.query?.startCity,
              endCity: parsed.routeInfo?.endCityName || parsed.query?.endCity,
              date: parsed.query?.date,
            };
          }
          const card = buildCardFromToolResult(parsed);
          if (onCardReady) onCardReady(card); else lastRouteCard = card;
          const top = parsed.results[0];
          const bits = [`为你找到 ${parsed.results.length} 个班次`];
          if (tryDate !== routeShortcut.date) bits.unshift(`今天已没合适班次，为你查了 ${tryDate}`);
          if (top?.boardingDistMeters != null) {
            const d = fmtDist(top.boardingDistMeters);
            if (d) bits.push(`最近上车站「${top.matchedBoarding}」约 ${d}`);
          }
          if (top?.matchedBoardingTime) bits.push(`最早 ${top.matchedBoardingTime} 出发`);
          const reply = bits.join("，") + "。";
          if (lastRouteCard) return `[ROUTE_RESULTS:${JSON.stringify(lastRouteCard)}]\n${reply}`;
          return reply;
        }
      } catch (e) {
        console.warn("[fast-route] parse failed, falling back to LLM:", e.message);
      }
      messages.pop(); messages.pop();
    }
  }

  for (let round = 0; round < MAX_TOOL_ROUNDS; round++) {
    const result = await callLLM(messages);
    const choice = result.choices?.[0];
    if (!choice) throw new Error("LLM 无返回");

    const msg = choice.message;
    messages.push(msg);

    if (!msg.tool_calls || msg.tool_calls.length === 0) {
      let reply = msg.content || "";
      reply = sanitizeReply(ensureBookingCardFields(reply, lastBookingData));
      if (lastRouteCard && !reply.includes("[ROUTE_RESULTS:")) {
        reply = `[ROUTE_RESULTS:${JSON.stringify(lastRouteCard)}]\n${reply}`;
      }
      if (lastBookingData && !reply.includes("[BOOKING_CARD:")) {
        reply = `[BOOKING_CARD:${JSON.stringify(lastBookingData)}]\n${reply}`;
      }
      return reply;
    }

    const toolCalls = msg.tool_calls;
    const uniqueSteps = [...new Set(toolCalls.map(tc => TOOL_STEP_MAP[tc.function.name] || "processing"))];
    for (const step of uniqueSteps) { if (onProgress) onProgress(step); }

    // Serialize tool calls so downstream ones (e.g. book_interval) see state from earlier ones (e.g. score_and_rank)
    const toolResults = [];
    for (const tc of toolCalls) {
      const args = typeof tc.function.arguments === "string"
        ? JSON.parse(tc.function.arguments)
        : tc.function.arguments;
      toolResults.push({ id: tc.id, name: tc.function.name, content: await executeTool(tc.function.name, args, userId, ctx) });
      // Eagerly persist score_and_rank result to session so book_interval(rank) in same batch can resolve
      if (tc.function.name === "score_and_rank") {
        try {
          const parsed = JSON.parse(toolResults[toolResults.length - 1].content);
          if (parsed.success && parsed.results?.length && ctx?.session) {
            ctx.session.lastRanked = {
              results: parsed.results,
              startCity: parsed.routeInfo?.startCityName || parsed.query?.startCity,
              endCity: parsed.routeInfo?.endCityName || parsed.query?.endCity,
              date: parsed.query?.date,
            };
          }
        } catch (_) {}
      }
    }
    for (const tr of toolResults) {
      messages.push({ role: "tool", tool_call_id: tr.id, content: tr.content });
      if (tr.name === "score_and_rank") {
        try {
          const parsed = JSON.parse(tr.content);
          if (parsed.success && parsed.results && parsed.results.length > 0) {
            if (ctx?.session) {
              ctx.session.lastRanked = {
                results: parsed.results,
                startCity: parsed.routeInfo?.startCityName || parsed.query?.startCity,
                endCity: parsed.routeInfo?.endCityName || parsed.query?.endCity,
                date: parsed.query?.date,
              };
            }
            // 隐式沉淀：记录常走路线
            if (userId) {
              const ri = parsed.routeInfo || {};
              const q = parsed.query || {};
              const sc = ri.startCityName || q.startCity;
              const ec = ri.endCityName || q.endCity;
              if (sc && ec) db.recordRouteUse(userId, sc, ec).catch(() => {});
            }
            const card = buildCardFromToolResult(parsed);
            if (onCardReady) {
              onCardReady(card);
              // Fast-path: card + deterministic summary is enough for a route query.
              // Skipping LLM round 2 saves ~15s (total ~9s instead of ~24s).
              const top = parsed.results[0];
              const bits = [`为你找到 ${parsed.results.length} 个班次`];
              if (top?.boardingDistMeters != null) {
                const d = fmtDist(top.boardingDistMeters);
                if (d) bits.push(`最近上车站「${top.matchedBoarding}」约 ${d}`);
              }
              if (top?.matchedBoardingTime) bits.push(`最早 ${top.matchedBoardingTime} 出发`);
              fastPathReply = bits.join("，") + "。";
            } else {
              lastRouteCard = card;
            }
          }
        } catch (_) {}
      }
      if (tr.name === "book_interval") {
        try {
          const parsed = JSON.parse(tr.content);
          if (parsed.success && parsed.data) {
            lastBookingData = parsed.data;
            // 隐式沉淀：下单时学出"这次实际从哪上的车"
            if (userId) {
              const d = parsed.data;
              const rawRoute = typeof d.route === "string" ? d.route : "";
              const [sc, ec] = rawRoute.split(/[→\->]/).map((s) => (s || "").trim()).filter(Boolean);
              if (sc && ec) db.recordRouteUse(userId, sc, ec).catch(() => {});
              if (sc && d.boardingStation) db.setBoardingPref(userId, sc, d.boardingStation).catch(() => {});
            }
            // Fast-path: we have everything needed for [BOOKING_CARD:…]. Skip LLM round 2.
            const d = parsed.data;
            const summary = `已为你准备好${d.date} ${d.fromTime} ${d.route}的订票信息，点卡片跳转${d.miniappName || "小程序"}完成支付。`;
            fastPathReply = `[BOOKING_CARD:${JSON.stringify(d)}]\n${summary}`;
          }
        } catch (_) {}
      }
    }

    // Fast-path exit: we already emitted the card and have a deterministic summary.
    // No need to spin another LLM round just to rewrite it.
    if (fastPathReply) {
      return fastPathReply;
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
