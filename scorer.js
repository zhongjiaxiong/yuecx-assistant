/**
 * 多因子评分引擎
 * 对班次列表进行 时间匹配 / 价格 / 站点就近 / 余票 四维评分排序。
 * 纯函数，不依赖外部 IO。
 */

const DEFAULT_WEIGHTS = { time: 0.40, price: 0.20, station: 0.25, seat: 0.15 };
const TIME_WINDOW = 120;     // depart/arrive 模式窗口（分钟）
const ASAP_WINDOW = 180;     // asap 模式窗口（分钟）
const TRIP_ESTIMATE = 150;   // 估算车程（分钟）

const ADCODE_DISTRICT = {
  "440106": "天河", "440105": "海珠", "440104": "越秀", "440103": "荔湾",
  "440111": "白云", "440113": "番禺", "440112": "黄埔", "440117": "从化",
  "440114": "花都", "440115": "南沙",
  "440305": "南山", "440303": "罗湖", "440304": "福田", "440306": "宝安",
  "440307": "龙岗", "440308": "盐田", "440309": "龙华", "440310": "坪山",
  "440311": "光明",
};

function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function nowMinutes() {
  const n = new Date();
  return n.getHours() * 60 + n.getMinutes();
}

function scoreTime(fromTimeStr, targetTime, timeMode) {
  const from = timeToMinutes(fromTimeStr);
  const target = timeToMinutes(targetTime);
  if (timeMode === "asap") {
    const now = nowMinutes();
    if (from <= now) return -1;
    return Math.max(0, 1 - (from - now) / ASAP_WINDOW);
  }
  if (timeMode === "arrive") {
    const diff = Math.abs(from + TRIP_ESTIMATE - target);
    return Math.max(0, 1 - diff / TIME_WINDOW);
  }
  return Math.max(0, 1 - Math.abs(from - target) / TIME_WINDOW);
}

function scorePrices(intervals) {
  const prices = intervals.map((iv) => iv.priceFen);
  const minP = Math.min(...prices);
  const maxP = Math.max(...prices);
  if (maxP === minP) return intervals.map(() => 1.0);
  return intervals.map((iv) => 1 - (iv.priceFen - minP) / (maxP - minP));
}

function matchStationList(stations, keywords) {
  if (!keywords || keywords.length === 0) return { score: 1.0, matched: null };
  let bestScore = 0;
  let matched = null;
  for (const st of stations) {
    for (const kw of keywords) {
      const kwLower = kw.toLowerCase();
      if (st.name.toLowerCase().includes(kwLower)) return { score: 1.0, matched: st.name };
      const district = ADCODE_DISTRICT[st.adcode];
      if (district && district === kw && 0.7 > bestScore) {
        bestScore = 0.7;
        matched = st.name;
      }
    }
  }
  return { score: bestScore, matched };
}

function scoreStation(interval, preferBoarding, preferDropoff) {
  const boarding = matchStationList(interval.boardingStations || interval.boarding_stations || [], preferBoarding);
  const dropoff = matchStationList(interval.dropoffStations || interval.dropoff_stations || [], preferDropoff);
  const hasB = preferBoarding && preferBoarding.length > 0;
  const hasD = preferDropoff && preferDropoff.length > 0;
  let score;
  if (hasB && hasD) score = boarding.score * 0.5 + dropoff.score * 0.5;
  else if (hasB) score = boarding.score;
  else if (hasD) score = dropoff.score;
  else score = 1.0;
  return { score, matchedBoarding: boarding.matched, matchedDropoff: dropoff.matched };
}

function scoreSeat(residue) {
  if (residue <= 0) return -1;
  if (residue >= 10) return 1.0;
  if (residue >= 5) return 0.7;
  return 0.3;
}

function scoreAndRank(opts) {
  const {
    intervals, targetTime, timeMode,
    preferBoarding = [], preferDropoff = [],
    weights: customWeights, topN = 5,
  } = opts;
  const w = { ...DEFAULT_WEIGHTS, ...customWeights };
  const total = intervals.length;
  let filteredSoldOut = 0;
  let filteredPastTime = 0;

  const candidates = [];
  for (const iv of intervals) {
    const seatS = scoreSeat(iv.residue);
    if (seatS < 0) { filteredSoldOut++; continue; }
    const timeS = scoreTime(iv.from_time || iv.fromTime, targetTime, timeMode);
    if (timeS < 0) { filteredPastTime++; continue; }
    candidates.push({ iv, timeS, seatS });
  }

  const priceScores = scorePrices(candidates.map((c) => c.iv));

  const scored = candidates.map((c, i) => {
    const stns = c.iv.boardingStations || c.iv.boarding_stations || [];
    const doff = c.iv.dropoffStations || c.iv.dropoff_stations || [];
    const ivNorm = { ...c.iv, boardingStations: stns, dropoffStations: doff };
    const { score: stationS, matchedBoarding, matchedDropoff } = scoreStation(ivNorm, preferBoarding, preferDropoff);
    const final = w.time * c.timeS + w.price * priceScores[i] + w.station * stationS + w.seat * c.seatS;
    return {
      finalScore: Math.round(final * 100) / 100,
      scores: {
        time: Math.round(c.timeS * 100) / 100,
        price: Math.round(priceScores[i] * 100) / 100,
        station: Math.round(stationS * 100) / 100,
        seat: Math.round(c.seatS * 100) / 100,
      },
      interval: c.iv,
      matchedBoarding: matchedBoarding || stns[0]?.name || "",
      matchedDropoff: matchedDropoff || doff[0]?.name || "",
    };
  });

  scored.sort((a, b) => b.finalScore - a.finalScore);
  const results = scored.slice(0, topN).map((r, i) => ({ rank: i + 1, ...r }));

  return {
    results,
    stats: { totalCandidates: total, afterFilter: candidates.length, filteredSoldOut, filteredPastTime },
  };
}

module.exports = { scoreAndRank, ADCODE_DISTRICT };
