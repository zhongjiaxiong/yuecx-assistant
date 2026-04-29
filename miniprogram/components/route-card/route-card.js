Component({
  properties: {
    data: {
      type: Object,
      value: {},
    },
  },

  observers: {
    'data.items': function (items) {
      if (!items || !items.length) return;
      const srcCounts = {};
      items.forEach((it) => {
        const sn = it.sourceName || '城际巴士';
        srcCounts[sn] = (srcCounts[sn] || 0) + 1;
      });
      const keys = Object.keys(srcCounts);
      if (keys.length > 0) {
        const parts = keys.map((k) => `${k} ${srcCounts[k]}班`);
        this.setData({ summary: `综合 ${keys.length} 个平台 · ${parts.join(' + ')} · 共 ${items.length} 条班次` });
      }
    },
  },

  data: {
    summary: '',
  },

  methods: {
    onBook(e) {
      const index = e.currentTarget.dataset.index;
      this.triggerEvent('book', { index, text: `订第${index}班` });
    },
  },
});
