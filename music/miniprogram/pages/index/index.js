"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpUtils_1 = require("../../utils/httpUtils");
var app = getApp();
Page({
    data: {
        bannerList: [],
        recommendList: [],
    },
    onLoad: function () {
        var _this = this;
        httpUtils_1.default
            .get('/banner', { type: 2 })
            .then(function (res) {
            return _this.setData({
                bannerList: res.data.banners,
            });
        });
        httpUtils_1.default
            .get('/personalized', { limit: 10 })
            .then(function (res) {
            _this.setData({
                recommendList: res.data.result,
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG1EQUE4QztBQUc5QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQztBQUVqQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsRUFBYztRQUMxQixhQUFhLEVBQUUsRUFBaUI7S0FDakM7SUFFRCxNQUFNLEVBQU47UUFBQSxpQkFnQkM7UUFmQyxtQkFBUzthQUNOLEdBQUcsQ0FBd0IsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2xELElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDUixPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBbUI7YUFDekMsQ0FBQztRQUZGLENBRUUsQ0FDSCxDQUFDO1FBRUosbUJBQVM7YUFDTixHQUFHLENBQTBCLGVBQWUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQzthQUM1RCxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ1IsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO2FBQy9CLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG5cbmltcG9ydCBodHRwVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvaHR0cFV0aWxzJztcblxuLy8g6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBiYW5uZXJMaXN0OiBbXSBhcyBCYW5uZXJbXSxcbiAgICByZWNvbW1lbmRMaXN0OiBbXSBhcyBSZWNvbW1lbmRbXSxcbiAgfSxcblxuICBvbkxvYWQoKSB7XG4gICAgaHR0cFV0aWxzXG4gICAgICAuZ2V0PHsgYmFubmVyczogQmFubmVyW10gfT4oJy9iYW5uZXInLCB7IHR5cGU6IDIgfSlcbiAgICAgIC50aGVuKChyZXMpID0+XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgYmFubmVyTGlzdDogcmVzLmRhdGEuYmFubmVycyBhcyBCYW5uZXJbXSxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBodHRwVXRpbHNcbiAgICAgIC5nZXQ8eyByZXN1bHQ6IFJlY29tbWVuZFtdIH0+KCcvcGVyc29uYWxpemVkJywgeyBsaW1pdDogMTAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICByZWNvbW1lbmRMaXN0OiByZXMuZGF0YS5yZXN1bHQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH0sXG59KTtcbiJdfQ==