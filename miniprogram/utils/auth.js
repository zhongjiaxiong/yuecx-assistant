const FALLBACK_BASE_URL = 'https://yuecx-assistant.onrender.com';

function _app() { return getApp(); }

function _resolveBaseUrl() {
  const app = _app();
  if (app && app.globalData && app.globalData.baseUrl) return app.globalData.baseUrl;
  const stored = wx.getStorageSync('baseUrl');
  if (stored && stored.indexOf('localhost') === -1 && stored.indexOf('127.0.0.1') === -1) {
    return stored;
  }
  return FALLBACK_BASE_URL;
}

function silentLogin() {
  return new Promise((resolve, reject) => {
    const token = wx.getStorageSync('token');
    if (token) {
      const app = _app();
      if (app) {
        app.globalData.token = token;
        app.globalData.openid = wx.getStorageSync('openid') || '';
        app.globalData.phone = wx.getStorageSync('phone') || '';
      }
      resolve({ token });
      return;
    }

    wx.login({
      success(loginRes) {
        if (!loginRes.code) {
          reject(new Error('wx.login 失败'));
          return;
        }

        const baseUrl = _resolveBaseUrl();
        console.log('[auth] silentLogin → POST', `${baseUrl}/api/wx-login`);
        wx.request({
          url: `${baseUrl}/api/wx-login`,
          method: 'POST',
          data: { code: loginRes.code },
          header: { 'Content-Type': 'application/json' },
          timeout: 90000,
          success(res) {
            if (res.statusCode === 200 && res.data.token) {
              const a = _app();
              if (a) {
                a.globalData.token = res.data.token;
                a.globalData.openid = res.data.openid || '';
              }
              wx.setStorageSync('token', res.data.token);
              wx.setStorageSync('openid', res.data.openid || '');
              resolve(res.data);
            } else {
              console.warn('[auth] login non-200 or no token:', res.statusCode, res.data);
              reject(new Error((res.data && res.data.error) || '登录失败'));
            }
          },
          fail(err) {
            console.error('[auth] login request failed:', err && err.errMsg);
            reject(err);
          },
        });
      },
      fail: reject,
    });
  });
}

function bindPhone(phoneCode) {
  const api = require('./api');
  return api.post('/api/wx-bindphone', { code: phoneCode }).then((data) => {
    if (data && data.phone) {
      const app = _app();
      if (app) app.globalData.phone = data.phone;
      wx.setStorageSync('phone', data.phone);
    }
    if (data && data.token) {
      const app = _app();
      if (app) app.globalData.token = data.token;
      wx.setStorageSync('token', data.token);
    }
    return data;
  });
}

function logout() {
  const app = _app();
  if (app) {
    app.globalData.token = '';
    app.globalData.openid = '';
    app.globalData.phone = '';
  }
  wx.removeStorageSync('token');
  wx.removeStorageSync('openid');
  wx.removeStorageSync('phone');
}

function isLoggedIn() {
  const app = _app();
  return !!(app && app.globalData.token) || !!wx.getStorageSync('token');
}

function hasPhone() {
  const app = _app();
  return !!(app && app.globalData.phone) || !!wx.getStorageSync('phone');
}

module.exports = { silentLogin, bindPhone, logout, isLoggedIn, hasPhone };
