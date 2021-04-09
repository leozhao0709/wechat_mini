// index.ts

import httpUtils from '../../utils/httpUtils';

Page({
  data: {
    bannerList: [] as IndexPage.Banner[],
    recommendList: [] as IndexPage.Recommend[],
    topList: [] as IndexPage.Playlist[],
  },

  async onLoad() {
    httpUtils
      .get<{ banners: IndexPage.Banner[] }>('/banner', { type: 2 })
      .then((res) =>
        this.setData({
          bannerList: res.data.banners as IndexPage.Banner[],
        })
      );

    httpUtils
      .get<{ result: IndexPage.Recommend[] }>('/personalized', { limit: 10 })
      .then((res) => {
        this.setData({
          recommendList: res.data.result,
        });
      });

    const topListCount = 5;
    for (let i = 0; i < topListCount; i++) {
      const res = await httpUtils.get<IndexPage.TopListData>('/top/list', { idx: i });
      const topListData = res.data;
      const playlist: IndexPage.Playlist = {
        name: topListData.playlist.name,
        tracks: topListData.playlist.tracks.slice(0, 3),
      };
      this.setData({
        topList: [...this.data.topList, playlist],
      });
    }
  },
});
