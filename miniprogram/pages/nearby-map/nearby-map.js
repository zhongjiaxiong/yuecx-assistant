const api = require('../../utils/api');

function formatDist(m) {
  if (m == null) return '';
  return m < 1000 ? m + 'm' : (m / 1000).toFixed(1) + 'km';
}

Page({
  data: {
    latitude: 23.13,
    longitude: 113.26,
    scale: 13,
    markers: [],
    stations: [],
    userAddress: '',
    loadingStations: true,
  },

  _params: null,

  onLoad(opts) {
    const lat = parseFloat(opts.lat);
    const lng = parseFloat(opts.lng);
    this._params = {
      latitude: lat,
      longitude: lng,
      startCity: opts.startCity || '',
      endCity: opts.endCity || '',
      date: opts.date || '',
    };
    this.setData({ latitude: lat, longitude: lng });
    this._loadStations();
  },

  async _loadStations() {
    try {
      const p = this._params;
      const result = await api.post('/api/nearby-stations', {
        latitude: p.latitude,
        longitude: p.longitude,
        startCity: p.startCity,
        endCity: p.endCity,
        date: p.date,
      });

      if (!result.success || !result.data || !result.data.stations.length) {
        this.setData({ loadingStations: false, stations: [] });
        return;
      }

      const stations = result.data.stations.map((st) => ({
        ...st,
        distText: formatDist(st.distanceMeters),
      }));
      const userAddress = (result.data.userAddress && result.data.userAddress.formatted) || '';

      const markers = [
        {
          id: 0,
          latitude: this._params.latitude,
          longitude: this._params.longitude,
          width: 20,
          height: 20,
          callout: { content: '我的位置', display: 'ALWAYS', padding: 6, borderRadius: 4, fontSize: 12, color: '#1677ff', bgColor: '#fff', borderColor: '#1677ff', borderWidth: 1 },
        },
      ];

      stations.forEach((st, i) => {
        if (st.lat && st.lng) {
          markers.push({
            id: i + 1,
            latitude: st.lat,
            longitude: st.lng,
            width: 20,
            height: 20,
            label: { content: String(i + 1), color: '#fff', bgColor: '#ff4d4f', borderRadius: 12, padding: 4, fontSize: 10, anchorX: 0, anchorY: -20 },
            callout: { content: st.name, display: 'BYCLICK', padding: 6, borderRadius: 4, fontSize: 12 },
          });
        }
      });

      this.setData({ loadingStations: false, stations, markers, userAddress });

      if (stations.length > 0 && stations[0].lat) {
        const points = [{ latitude: this._params.latitude, longitude: this._params.longitude }];
        stations.forEach((st) => { if (st.lat && st.lng) points.push({ latitude: st.lat, longitude: st.lng }); });
        const mapCtx = wx.createMapContext('map-view', this);
        if (mapCtx && mapCtx.includePoints) {
          mapCtx.includePoints({ padding: [40, 40, 40, 40], points });
        }
      }
    } catch (err) {
      console.error('[nearby-map] error:', err);
      this.setData({ loadingStations: false, stations: [] });
    }
  },

  onSelectStation(e) {
    const name = e.currentTarget.dataset.name;
    const pages = getCurrentPages();
    if (pages.length >= 2) {
      const chatPage = pages[pages.length - 2];
      if (chatPage && chatPage.onSelectStation) {
        chatPage.onSelectStation({ detail: { name } });
      }
    }
    wx.navigateBack();
  },
});
