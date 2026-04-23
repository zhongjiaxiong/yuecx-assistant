const YUECX_APPID = 'wx44d254291f27af7c';

Component({
  properties: {
    data: {
      type: Object,
      value: {},
    },
  },

  methods: {
    onBuy() {
      const { miniappAppId, miniappPath, source } = this.data.data || {};
      const appId = miniappAppId || YUECX_APPID;
      const opts = {
        appId,
        extraData: { from: 'yuecheng-assistant' },
        success() {
          console.log('[booking-card] 跳转成功, appId:', appId, 'path:', miniappPath);
        },
        fail(err) {
          console.error('[booking-card] 跳转失败:', err, 'errMsg:', err && err.errMsg);
          wx.showToast({ title: (err && err.errMsg) || '跳转失败', icon: 'none', duration: 4000 });
        },
      };
      if (miniappPath) {
        opts.path = miniappPath;
      }
      console.log('[booking-card] 即将跳转:', { appId, path: miniappPath, source });
      wx.navigateToMiniProgram(opts);
    },
  },
});
