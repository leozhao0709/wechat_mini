// index.ts

import httpUtils from '../../utils/httpUtils';

// 获取应用实例
const app = getApp<IAppOption>();

Page({
  data: {
    bannerList: [] as Banner[],
    recommendList: [] as Recommend[],
  },

  onLoad() {
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
  },
});
