// index.ts

import httpUtils from '../../utils/httpUtils';

// 获取应用实例
const app = getApp<IAppOption>();

Page({
  data: {
    bannerList: [] as Banner[],
    recommendList: [] as Recommend[],
    topList: [] as Playlist[],
  },

  async onLoad() {
    httpUtils
      .get<{ banners: Banner[] }>('/banner', { type: 2 })
      .then((res) =>
        this.setData({
          bannerList: res.data.banners as Banner[],
        })
      );

    httpUtils
      .get<{ result: Recommend[] }>('/personalized', { limit: 10 })
      .then((res) => {
        this.setData({
          recommendList: res.data.result,
        });
      });

    const topListCount = 5;
    for (let i = 0; i < topListCount; i++) {
      const res = await httpUtils.get<TopListData>('/top/list', { idx: i });
      const topListData = res.data;
      const playlist: Playlist = { name: topListData.playlist.name, tracks: topListData.playlist.tracks.slice(0, 3) };
      this.setData({
        topList: [...this.data.topList, playlist],
      });
    }
  },
});
