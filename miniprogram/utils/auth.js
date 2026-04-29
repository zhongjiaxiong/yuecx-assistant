function _app() { return getApp(); }

function silentLogin() {
  return new Promise((resolve, reject) => {
    const app = _app();
    const token = wx.getStorageSync('token');
    if (token) {
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

        const baseUrl = (app && app.globalData.baseUrl) || 'http://localhost:3000';
        wx.request({
          url: `${baseUrl}/api/wx-login`,
          method: 'POST',
          data: { code: loginRes.code },
          header: { 'Content-Type': 'application/json' },
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
              reject(new Error((res.data && res.data.error) || '登录失败'));
            }
          },
          fail: reject,
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
