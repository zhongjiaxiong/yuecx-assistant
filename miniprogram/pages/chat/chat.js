const api = require('../../utils/api');
const auth = require('../../utils/auth');

const LOADING_TEXTS = {
  thinking: '正在思考...',
  locating: '正在定位...',
  searching: '正在查询班次...',
  booking: '正在生成订票信息...',
};

let msgIdCounter = 0;

Page({
  data: {
    messages: [],
    inputValue: '',
    loading: false,
    loadingText: '正在思考...',
    locationGranted: false,
    scrollTarget: '',
  },

  _location: null,

  onLoad() {
    this._checkLocationAuth();
  },

  // ── 定位 ──────────────────────────────────────────

  _checkLocationAuth() {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userLocation']) {
          this.setData({ locationGranted: true });
          this._getLocation();
        }
      },
    });
  },

  requestLocation() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this._location = { latitude: res.latitude, longitude: res.longitude };
        this.setData({ locationGranted: true });
      },
      fail: () => {
        wx.showModal({
          title: '定位权限',
          content: '需要定位权限来推荐最近的上车站，请在设置中开启',
          confirmText: '去设置',
          success: (modalRes) => {
            if (modalRes.confirm) wx.openSetting();
          },
        });
      },
    });
  },

  _getLocation() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this._location = { latitude: res.latitude, longitude: res.longitude };
      },
    });
  },

  // ── 输入与发送 ────────────────────────────────────

  onInput(e) {
    this.setData({ inputValue: e.detail.value });
  },

  onSend() {
    const text = this.data.inputValue.trim();
    if (!text || this.data.loading) return;

    this._addMessage('user', text);
    this.setData({ inputValue: '', loading: true, loadingText: LOADING_TEXTS.thinking });
    this._scrollToBottom();

    this._callChat(text);
  },

  onQuickBook(e) {
    const text = e.detail.text;
    if (!text || this.data.loading) return;

    this._addMessage('user', text);
    this.setData({ loading: true, loadingText: LOADING_TEXTS.booking });
    this._scrollToBottom();

    this._callChat(text);
  },

  // ── API 调用 ──────────────────────────────────────

  async _callChat(message) {
    try {
      if (!auth.isLoggedIn()) {
        await auth.silentLogin();
      }

      const data = { message };
      if (this._location) {
        data.location = this._location;
      }

      const result = await api.post('/api/chat', data, { timeout: 90000 });
      const reply = result.reply || result.error || '抱歉，没有收到回复';

      const segments = this._parseReply(reply);
      this._addAssistantMessage(segments);
    } catch (err) {
      console.error('[chat] error:', err);
      this._addAssistantMessage([{ type: 'text', content: '网络异常，请稍后重试' }]);
    } finally {
      this.setData({ loading: false });
      this._scrollToBottom();
    }
  },

  // ── 消息解析 ──────────────────────────────────────

  _parseReply(reply) {
    const segments = [];
    let remaining = reply;

    const patterns = [
      { regex: /\[ROUTE_RESULTS:([\s\S]*?)\]/g, type: 'route' },
      { regex: /\[BOOKING_CARD:([\s\S]*?)\]/g, type: 'booking' },
    ];

    const matches = [];
    for (const p of patterns) {
      let m;
      p.regex.lastIndex = 0;
      while ((m = p.regex.exec(reply)) !== null) {
        try {
          const data = JSON.parse(m[1]);
          matches.push({ type: p.type, data, start: m.index, end: m.index + m[0].length });
        } catch (e) {
          console.warn('[parse] JSON parse failed:', e.message);
        }
      }
    }

    matches.sort((a, b) => a.start - b.start);

    let cursor = 0;
    for (const match of matches) {
      if (match.start > cursor) {
        const text = remaining.slice(cursor, match.start).trim();
        if (text) segments.push({ type: 'text', content: text });
      }
      segments.push({ type: match.type, data: match.data });
      cursor = match.end;
    }

    if (cursor < remaining.length) {
      const text = remaining.slice(cursor).trim();
      if (text) segments.push({ type: 'text', content: text });
    }

    if (segments.length === 0) {
      segments.push({ type: 'text', content: reply });
    }

    return segments;
  },

  // ── 消息管理 ──────────────────────────────────────

  _addMessage(role, content) {
    const id = ++msgIdCounter;
    const messages = this.data.messages.concat([{ id, role, content, segments: [{ type: 'text', content }] }]);
    this.setData({ messages });
  },

  _addAssistantMessage(segments) {
    const id = ++msgIdCounter;
    const contentText = segments.map((s) => (s.type === 'text' ? s.content : `[${s.type}]`)).join(' ');
    const messages = this.data.messages.concat([{ id, role: 'assistant', content: contentText, segments }]);
    this.setData({ messages });
  },

  _scrollToBottom() {
    setTimeout(() => {
      this.setData({ scrollTarget: 'scroll-bottom' });
    }, 100);
  },
});
