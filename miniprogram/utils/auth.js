const app = getApp();

function silentLogin() {
  return new Promise((resolve, reject) => {
    const token = wx.getStorageSync('token');
    if (token) {
      app.globalData.token = token;
      app.globalData.openid = wx.getStorageSync('openid') || '';
      app.globalData.phone = wx.getStorageSync('phone') || '';
      resolve({ token });
      return;
    }

    wx.login({
      success(loginRes) {
        if (!loginRes.code) {
          reject(new Error('wx.login 失败'));
          return;
        }

        const baseUrl = app.globalData.baseUrl || 'http://localhost:3000';
        wx.request({
          url: `${baseUrl}/api/wx-login`,
          method: 'POST',
          data: { code: loginRes.code },
          header: { 'Content-Type': 'application/json' },
          success(res) {
            if (res.statusCode === 200 && res.data.token) {
              app.globalData.token = res.data.token;
              app.globalData.openid = res.data.openid || '';
              wx.setStorageSync('token', res.data.token);
              wx.setStorageSync('openid', res.data.openid || '');
              resolve(res.data);
            } else {
              reject(new Error(res.data.error || '登录失败'));
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
    if (data.phone) {
      app.globalData.phone = data.phone;
      wx.setStorageSync('phone', data.phone);
    }
    return data;
  });
}

function logout() {
  app.globalData.token = '';
  app.globalData.openid = '';
  app.globalData.phone = '';
  wx.removeStorageSync('token');
  wx.removeStorageSync('openid');
  wx.removeStorageSync('phone');
}

function isLoggedIn() {
  return !!app.globalData.token;
}

function hasPhone() {
  return !!app.globalData.phone;
}

module.exports = { silentLogin, bindPhone, logout, isLoggedIn, hasPhone };
