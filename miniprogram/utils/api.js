function _app() { return getApp(); }

function getBaseUrl() {
  const app = _app();
  return (app && app.globalData.baseUrl) || 'http://localhost:3000';
}

function request(options) {
  return new Promise((resolve, reject) => {
    const app = _app();
    const token = (app && app.globalData.token) || wx.getStorageSync('token');
    const header = { 'Content-Type': 'application/json' };
    if (token) {
      header['Authorization'] = `Bearer ${token}`;
    }

    wx.request({
      url: `${getBaseUrl()}${options.url}`,
      method: options.method || 'GET',
      data: options.data || {},
      header: { ...header, ...options.header },
      timeout: options.timeout || 60000,
      success(res) {
        if (res.statusCode === 401 && !options._retried) {
          wx.removeStorageSync('token');
          if (app) app.globalData.token = '';
          const auth = require('./auth');
          auth.silentLogin().then(() => {
            request({ ...options, _retried: true }).then(resolve).catch(reject);
          }).catch(() => {
            resolve(res.data);
          });
          return;
        }
        resolve(res.data);
      },
      fail(err) {
        reject(err);
      },
    });
  });
}

function post(url, data, options = {}) {
  return request({ url, method: 'POST', data, ...options });
}

function get(url, data, options = {}) {
  return request({ url, method: 'GET', data, ...options });
}

function streamPost(url, data, onEvent, options = {}) {
  return new Promise((resolve, reject) => {
    const app = _app();
    const token = (app && app.globalData.token) || wx.getStorageSync('token');
    const header = {
      'Content-Type': 'application/json',
      'Accept': 'text/event-stream',
    };
    if (token) header['Authorization'] = `Bearer ${token}`;

    let sseBuffer = '';
    let gotChunks = false;

    function flush(extra) {
      if (extra) sseBuffer += extra;
      const parts = sseBuffer.split('\n\n');
      sseBuffer = parts.pop() || '';
      for (const part of parts) {
        for (const line of part.split('\n')) {
          const trimmed = line.trim();
          if (trimmed.startsWith('data: ')) {
            try { onEvent(JSON.parse(trimmed.slice(6))); } catch (e) {}
          }
        }
      }
    }

    const task = wx.request({
      url: `${getBaseUrl()}${url}`,
      method: 'POST',
      data,
      header,
      enableChunkedTransfer: true,
      timeout: options.timeout || 95000,
      success(res) {
        flush('\n\n');
        if (!gotChunks) {
          const raw = res.data;
          if (typeof raw === 'string' && raw.includes('data: ')) {
            flush(raw + '\n\n');
          } else if (typeof raw === 'object' && raw) {
            if (raw.reply) onEvent({ type: 'done', reply: raw.reply });
            else if (raw.error) onEvent({ type: 'error', error: raw.error });
          }
        }
        resolve();
      },
      fail(err) { reject(err); },
    });

    if (task && typeof task.onChunkReceived === 'function') {
      const decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8') : null;
      task.onChunkReceived(function (resp) {
        gotChunks = true;
        let text;
        if (decoder) {
          text = decoder.decode(new Uint8Array(resp.data), { stream: true });
        } else {
          const bytes = new Uint8Array(resp.data);
          text = '';
          for (let i = 0; i < bytes.length; i++) text += String.fromCharCode(bytes[i]);
        }
        flush(text);
      });
    }
  });
}

module.exports = { request, post, get, streamPost };
