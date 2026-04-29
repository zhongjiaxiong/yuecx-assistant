const api = require('../../utils/api');
const auth = require('../../utils/auth');

let msgIdCounter = 0;

function genSessionId() {
  return 's_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
}

const STEP_MAP = { thinking: 0, locating: 1, searching: 2, ranking: 2, processing: 2, booking: 2, done: 3 };
const STEP_TEXT = ['正在思考...', '正在定位...', '正在查询班次...', ''];

Page({
  data: {
    messages: [],
    inputValue: '',
    loading: false,
    loadingText: '正在思考...',
    loadingStep: 0,
    locationGranted: false,
    scrollTarget: '',
    inputMode: 'text',
    recording: false,
    lastRouteContext: null,
    hasPhone: false,
  },

  _location: null,
  _sessionId: '',
  _recorder: null,
  _recordFile: '',

  onLoad() {
    this._sessionId = genSessionId();
    this._checkLocationAuth();
    this._initRecorder();
    this._refreshPhoneStatus();
  },

  onShow() {
    this._refreshPhoneStatus();
  },

  _refreshPhoneStatus() {
    this.setData({ hasPhone: auth.hasPhone() });
  },

  async onGetPhoneNumber(e) {
    if (e.detail.errMsg !== 'getPhoneNumber:ok') return;
    const code = e.detail.code;
    if (!code) {
      wx.showToast({ title: '授权失败', icon: 'none' });
      return;
    }
    wx.showLoading({ title: '登录中...', mask: true });
    try {
      if (!auth.isLoggedIn()) await auth.silentLogin();
      const data = await auth.bindPhone(code);
      if (!data || !data.phone) {
        throw new Error((data && data.error) || '未返回手机号');
      }
      this._refreshPhoneStatus();
      wx.showToast({ title: '登录成功', icon: 'success' });
    } catch (err) {
      console.error('[chat] bindPhone error:', err);
      const msg = (err && (err.message || err.errMsg)) || '请重试';
      wx.showModal({ title: '登录失败', content: String(msg).slice(0, 200), showCancel: false });
    } finally {
      wx.hideLoading();
    }
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
    this.setData({ inputValue: '' });
    this._scrollToBottom();
    this._callChat(text);
  },

  onQuickBook(e) {
    const text = e.detail.text;
    if (!text || this.data.loading) return;

    this._addMessage('user', text);
    this._scrollToBottom();
    this._callChat(text);
  },

  // ── 录音 ────────────────────────────────────────

  _initRecorder() {
    const mgr = wx.getRecorderManager();
    mgr.onStop((res) => {
      this._recordFile = res.tempFilePath;
      if (this.data.recording) this.setData({ recording: false });
      if (res.duration < 800) {
        wx.showToast({ title: '说话时间太短', icon: 'none' });
        return;
      }
      this._uploadVoice(res.tempFilePath);
    });
    mgr.onError((err) => {
      console.error('[recorder] error:', err);
      this.setData({ recording: false });
      wx.showToast({ title: '录音失败', icon: 'none' });
    });
    this._recorder = mgr;
  },

  toggleInputMode() {
    this.setData({ inputMode: this.data.inputMode === 'text' ? 'voice' : 'text' });
  },

  onTouchStartRecord() {
    this.setData({ recording: true });
    this._recorder.start({ format: 'mp3', duration: 60000, sampleRate: 16000, numberOfChannels: 1 });
  },

  onTouchEndRecord() {
    this._recorder.stop();
  },

  onTouchCancelRecord() {
    this._recorder.stop();
    this.setData({ recording: false });
  },

  async _uploadVoice(filePath) {
    this.setData({ loading: true, loadingStep: -1, loadingText: '语音识别中...' });
    const startTs = Date.now();
    try {
      const token = wx.getStorageSync('token') || '';
      const baseUrl = (getApp() && getApp().globalData.baseUrl) || 'http://localhost:3000';
      console.log('[stt] uploading to:', `${baseUrl}/api/stt`, 'file:', filePath);

      const res = await new Promise((resolve, reject) => {
        wx.uploadFile({
          url: `${baseUrl}/api/stt`,
          filePath,
          name: 'audio',
          formData: { format: 'mp3' },
          header: token ? { Authorization: `Bearer ${token}` } : {},
          timeout: 90000,
          success: (r) => resolve(r),
          fail: reject,
        });
      });

      const cost = Date.now() - startTs;
      console.log(`[stt] response: status=${res.statusCode} cost=${cost}ms body.len=${(res.data || '').length}`);

      if (res.statusCode !== 200) {
        this.setData({ loading: false });
        const isCold = cost > 30000;
        wx.showToast({
          title: isCold ? '后端唤醒超时，请稍后重试' : `服务异常 (${res.statusCode})`,
          icon: 'none',
          duration: 2500,
        });
        return;
      }

      let data;
      try { data = JSON.parse(res.data); }
      catch (e) {
        console.error('[stt] body not JSON:', res.data && res.data.slice(0, 200));
        this.setData({ loading: false });
        wx.showToast({ title: '后端响应异常', icon: 'none' });
        return;
      }

      if (data.text) {
        this._addMessage('user', data.text);
        this._scrollToBottom();
        await this._callChat(data.text);
      } else {
        this.setData({ loading: false });
        wx.showToast({
          title: data.error || '未识别到语音',
          icon: 'none',
          duration: 2000,
        });
      }
    } catch (err) {
      const cost = Date.now() - startTs;
      const errMsg = (err && err.errMsg) || String(err);
      console.error(`[stt] upload failed after ${cost}ms:`, errMsg);
      this.setData({ loading: false });

      let title = '语音识别失败';
      if (errMsg.includes('timeout')) title = '网络超时，请重试';
      else if (errMsg.includes('fail')) title = '网络连接失败';
      wx.showToast({ title, icon: 'none', duration: 2500 });
    }
  },

  // ── API 调用 (SSE 流式) ───────────────────────────

  async _callChat(message) {
    try {
      if (!auth.isLoggedIn()) {
        try { await auth.silentLogin(); } catch (e) { console.warn('[chat] login skipped:', e.message); }
      }

      const data = { message, sessionId: this._sessionId };
      if (this._location) data.location = this._location;

      this.setData({ loading: true, loadingStep: 0, loadingText: '正在思考...' });
      let cardReceived = false;

      await api.streamPost('/api/chat', data, (evt) => {
        switch (evt.type) {
          case 'progress': {
            const idx = STEP_MAP[evt.step];
            if (idx != null && this.data.loading) {
              this.setData({ loadingStep: idx, loadingText: STEP_TEXT[idx] || '' });
            }
            break;
          }
          case 'card':
            cardReceived = true;
            this.setData({ loading: false });
            this._addAssistantMessage([{ type: 'route', data: evt.data }]);
            this._extractRouteContext([{ type: 'route', data: evt.data }]);
            this._scrollToBottom();
            break;
          case 'supplement':
            if (evt.text) {
              this._addAssistantMessage([{ type: 'text', content: this._sanitize(evt.text) }]);
              this._scrollToBottom();
            }
            break;
          case 'done':
            if (!cardReceived && evt.reply) {
              const segments = this._parseReply(evt.reply);
              this._addAssistantMessage(segments);
              this._extractRouteContext(segments);
              this._scrollToBottom();
            }
            break;
          case 'error':
            this._addAssistantMessage([{ type: 'text', content: evt.error || '服务异常，请稍后重试' }]);
            this._scrollToBottom();
            break;
        }
      }, { timeout: 95000 });
    } catch (err) {
      console.error('[chat] error:', err);
      if (!cardReceived) {
        this._addAssistantMessage([{ type: 'text', content: '网络异常，请稍后重试' }]);
      }
    } finally {
      this.setData({ loading: false });
      this._scrollToBottom();
    }
  },

  _extractRouteContext(segments) {
    for (const seg of segments) {
      if (seg.type === 'route' && seg.data) {
        this.setData({
          lastRouteContext: {
            startCity: seg.data.startCity,
            endCity: seg.data.endCity,
            date: seg.data.date,
          },
        });
        break;
      }
    }
  },

  // ── 地图选站 ──────────────────────────────────────

  onOpenMap() {
    const ctx = this.data.lastRouteContext;
    if (!ctx || !ctx.startCity) {
      wx.showToast({ title: '请先查询班次', icon: 'none' });
      return;
    }
    if (!this._location) {
      wx.showToast({ title: '请先开启定位', icon: 'none' });
      return;
    }
    wx.navigateTo({
      url: `/pages/nearby-map/nearby-map?lat=${this._location.latitude}&lng=${this._location.longitude}&startCity=${ctx.startCity}&endCity=${ctx.endCity}&date=${ctx.date}`,
    });
  },

  onSelectStation(e) {
    const name = e.detail.name;
    if (!name) return;
    const text = `我选择从${name}上车`;
    this._addMessage('user', text);
    this._scrollToBottom();
    this._callChat(text);
  },

  // ── 消息解析 ──────────────────────────────────────

  _sanitize(text) {
    return text
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/(?<!\[)\[([^\]]+)\]\(https?:\/\/[^)]*\)/g, '$1')
      .replace(/(^|[\s，。！？、])https?:\/\/\S+/g, '$1')
      .replace(/ {2,}/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  },

  _parseReply(reply) {
    const segments = [];
    const tags = [
      { prefix: '[ROUTE_RESULTS:', type: 'route' },
      { prefix: '[BOOKING_CARD:', type: 'booking' },
    ];
    let pos = 0;

    while (pos < reply.length) {
      let best = null;
      for (const tag of tags) {
        const idx = reply.indexOf(tag.prefix, pos);
        if (idx !== -1 && (!best || idx < best.idx)) {
          best = { type: tag.type, idx, prefixLen: tag.prefix.length };
        }
      }
      if (!best) {
        const text = this._sanitize(reply.slice(pos));
        if (text) segments.push({ type: 'text', content: text });
        break;
      }
      if (best.idx > pos) {
        const text = this._sanitize(reply.slice(pos, best.idx));
        if (text) segments.push({ type: 'text', content: text });
      }
      const jsonStart = best.idx + best.prefixLen;
      let depth = 0, jsonEnd = -1;
      for (let j = jsonStart; j < reply.length; j++) {
        if (reply[j] === '{') depth++;
        else if (reply[j] === '}') { depth--; if (depth === 0) { jsonEnd = j + 1; break; } }
      }
      if (jsonEnd > 0) {
        try {
          const data = JSON.parse(reply.slice(jsonStart, jsonEnd));
          segments.push({ type: best.type, data });
        } catch (e) {
          console.warn('[parse] JSON failed:', e.message);
          segments.push({ type: 'text', content: reply.slice(best.idx, jsonEnd) });
        }
        pos = jsonEnd;
        if (pos < reply.length && reply[pos] === ']') pos++;
      } else {
        const text = this._sanitize(reply.slice(best.idx));
        if (text) segments.push({ type: 'text', content: text });
        break;
      }
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
