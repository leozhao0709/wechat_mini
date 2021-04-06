"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../config/config");
var httpUtils_1 = require("../../utils/httpUtils");
var startY = 0;
var moveY = 0;
var moveDistance = 0;
Page({
    data: {
        coverTransform: 'translateY(0)',
        coverTransition: '',
        userProfile: undefined,
        recentPlayList: [],
    },
    onLoad: function (options) { },
    handleTouchStart: function (event) {
        this.setData({
            coverTransition: '',
        });
        startY = event.touches[0].clientY;
    },
    handleTouchMove: function (event) {
        moveY = event.touches[0].clientY;
        moveDistance = moveY - startY;
        if (moveDistance < 0)
            return;
        if (moveDistance > 80)
            moveDistance = 80;
        this.setData({
            coverTransform: "translateY(" + moveDistance + "rpx)",
        });
    },
    handleTouchEnd: function () {
        this.setData({
            coverTransform: 'translateY(0)',
            coverTransition: 'transform 1s ease-in-out',
        });
    },
    toLogin: function () {
        wx.navigateTo({
            url: '/pages/login/login',
        });
    },
    onReady: function () { },
    onShow: function () {
        var userProfileLocal = wx.getStorageSync(config_1.default.storageKey.userProfile);
        if (userProfileLocal) {
            this.setData({ userProfile: userProfileLocal });
            this.getRecentPlayList();
        }
    },
    getRecentPlayList: function () {
        var _this = this;
        var _a;
        httpUtils_1.default
            .get('/user/record', { uid: (_a = this.data.userProfile) === null || _a === void 0 ? void 0 : _a.userId, type: 0 })
            .then(function (res) { return res.data; })
            .then(function (res) {
            var recentPlayList = res.allData.slice(0, 10).map(function (data) { return data.song; });
            console.log(recentPlayList[0].al.picUrl);
            _this.setData({ recentPlayList: recentPlayList });
        });
    },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    onShareAppMessage: function () { },
    onPageScroll: function () { },
    onTabItemTap: function (item) { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUF5QztBQUN6QyxtREFBOEM7QUFFOUMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBRXJCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLGNBQWMsRUFBRSxlQUFlO1FBQy9CLGVBQWUsRUFBRSxFQUFFO1FBQ25CLFdBQVcsRUFBRSxTQUFvQztRQUNqRCxjQUFjLEVBQUUsRUFBa0I7S0FDbkM7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFPLElBQUcsQ0FBQztJQUM3QixnQkFBZ0IsRUFBRSxVQUFVLEtBQW1DO1FBQzdELElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxlQUFlLEVBQUUsRUFBRTtTQUNwQixDQUFDLENBQUM7UUFDSCxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDcEMsQ0FBQztJQUVELGVBQWUsRUFBRSxVQUFVLEtBQW1DO1FBQzVELEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNqQyxZQUFZLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUU5QixJQUFJLFlBQVksR0FBRyxDQUFDO1lBQUUsT0FBTztRQUM3QixJQUFJLFlBQVksR0FBRyxFQUFFO1lBQUUsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsY0FBYyxFQUFFLGdCQUFjLFlBQVksU0FBTTtTQUNqRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxFQUFFO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGNBQWMsRUFBRSxlQUFlO1lBQy9CLGVBQWUsRUFBRSwwQkFBMEI7U0FDNUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU87UUFDTCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG9CQUFvQjtTQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxFQUFFLGNBQWEsQ0FBQztJQUN2QixNQUFNLEVBQUU7UUFDTixJQUFNLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUUsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFDRCxpQkFBaUIsRUFBakI7UUFBQSxpQkFTQzs7UUFSQyxtQkFBUzthQUNOLEdBQUcsQ0FBc0MsY0FBYyxFQUFFLEVBQUUsR0FBRyxRQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVywwQ0FBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ3pHLElBQUksQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQVIsQ0FBUSxDQUFDO2FBQ3ZCLElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDUixJQUFNLGNBQWMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBVCxDQUFTLENBQUMsQ0FBQztZQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLGNBQWMsZ0JBQUEsRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsTUFBTSxFQUFFLGNBQWEsQ0FBQztJQUN0QixRQUFRLEVBQUUsY0FBYSxDQUFDO0lBQ3hCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztJQUNqQyxhQUFhLEVBQUUsY0FBYSxDQUFDO0lBQzdCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztJQUNqQyxZQUFZLEVBQUUsY0FBYSxDQUFDO0lBRTVCLFlBQVksRUFBRSxVQUFVLElBQUksSUFBRyxDQUFDO0NBQ2pDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQgaHR0cFV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL2h0dHBVdGlscyc7XG5cbmxldCBzdGFydFkgPSAwO1xubGV0IG1vdmVZID0gMDtcbmxldCBtb3ZlRGlzdGFuY2UgPSAwO1xuLy9QYWdlIE9iamVjdFxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBjb3ZlclRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLFxuICAgIGNvdmVyVHJhbnNpdGlvbjogJycsXG4gICAgdXNlclByb2ZpbGU6IHVuZGVmaW5lZCBhcyBVc2VyUHJvZmlsZSB8IHVuZGVmaW5lZCxcbiAgICByZWNlbnRQbGF5TGlzdDogW10gYXMgUmVjZW50UGxheVtdLFxuICB9LFxuICAvL29wdGlvbnMoT2JqZWN0KVxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7fSxcbiAgaGFuZGxlVG91Y2hTdGFydDogZnVuY3Rpb24gKGV2ZW50OiBXZWNoYXRNaW5pcHJvZ3JhbS5Ub3VjaEV2ZW50KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGNvdmVyVHJhbnNpdGlvbjogJycsXG4gICAgfSk7XG4gICAgc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICB9LFxuXG4gIGhhbmRsZVRvdWNoTW92ZTogZnVuY3Rpb24gKGV2ZW50OiBXZWNoYXRNaW5pcHJvZ3JhbS5Ub3VjaEV2ZW50KSB7XG4gICAgbW92ZVkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgbW92ZURpc3RhbmNlID0gbW92ZVkgLSBzdGFydFk7XG5cbiAgICBpZiAobW92ZURpc3RhbmNlIDwgMCkgcmV0dXJuO1xuICAgIGlmIChtb3ZlRGlzdGFuY2UgPiA4MCkgbW92ZURpc3RhbmNlID0gODA7XG5cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY292ZXJUcmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7bW92ZURpc3RhbmNlfXJweClgLFxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZVRvdWNoRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGNvdmVyVHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsXG4gICAgICBjb3ZlclRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQnLFxuICAgIH0pO1xuICB9LFxuXG4gIHRvTG9naW4oKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nLFxuICAgIH0pO1xuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHt9LFxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB1c2VyUHJvZmlsZUxvY2FsID0gd3guZ2V0U3RvcmFnZVN5bmMoY29uZmlnLnN0b3JhZ2VLZXkudXNlclByb2ZpbGUpO1xuICAgIGlmICh1c2VyUHJvZmlsZUxvY2FsKSB7XG4gICAgICB0aGlzLnNldERhdGEoeyB1c2VyUHJvZmlsZTogdXNlclByb2ZpbGVMb2NhbCB9KTtcbiAgICAgIHRoaXMuZ2V0UmVjZW50UGxheUxpc3QoKTtcbiAgICB9XG4gIH0sXG4gIGdldFJlY2VudFBsYXlMaXN0KCkge1xuICAgIGh0dHBVdGlsc1xuICAgICAgLmdldDx7IGFsbERhdGE6IHsgc29uZzogUmVjZW50UGxheSB9W10gfT4oJy91c2VyL3JlY29yZCcsIHsgdWlkOiB0aGlzLmRhdGEudXNlclByb2ZpbGU/LnVzZXJJZCwgdHlwZTogMCB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY2VudFBsYXlMaXN0ID0gcmVzLmFsbERhdGEuc2xpY2UoMCwgMTApLm1hcCgoZGF0YSkgPT4gZGF0YS5zb25nKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVjZW50UGxheUxpc3RbMF0uYWwucGljVXJsKTtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgcmVjZW50UGxheUxpc3QgfSk7XG4gICAgICB9KTtcbiAgfSxcbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7fSxcbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHt9LFxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge30sXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHt9LFxuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge30sXG4gIG9uUGFnZVNjcm9sbDogZnVuY3Rpb24gKCkge30sXG4gIC8vaXRlbShpbmRleCxwYWdlUGF0aCx0ZXh0KVxuICBvblRhYkl0ZW1UYXA6IGZ1bmN0aW9uIChpdGVtKSB7fSxcbn0pO1xuIl19