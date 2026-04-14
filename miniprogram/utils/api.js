const app = getApp();

function getBaseUrl() {
  return app.globalData.baseUrl || 'http://localhost:3000';
}

function request(options) {
  return new Promise((resolve, reject) => {
    const token = app.globalData.token || wx.getStorageSync('token');
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
        if (res.statusCode === 401) {
          wx.removeStorageSync('token');
          app.globalData.token = '';
          const auth = require('./auth');
          auth.silentLogin().then(() => {
            request(options).then(resolve).catch(reject);
          }).catch(reject);
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

module.exports = { request, post, get };
