Component({
  properties: {
    data: {
      type: Object,
      value: {},
    },
  },

  methods: {
    onBook(e) {
      const index = e.currentTarget.dataset.index;
      this.triggerEvent('book', { index, text: `订第${index}班` });
    },
  },
});
