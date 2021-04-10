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
        var _a;
        var userProfileLocal = (_a = wx.getStorageSync(config_1.default.storageKey.user)) === null || _a === void 0 ? void 0 : _a.profile;
        if (userProfileLocal) {
            this.setData({ userProfile: userProfileLocal });
            this.getRecentPlayList();
        }
    },
    getRecentPlayList: function () {
        var _this = this;
        var _a;
        httpUtils_1.default
            .get('/user/record', {
            uid: (_a = this.data.userProfile) === null || _a === void 0 ? void 0 : _a.userId,
            type: 0,
        })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUF5QztBQUN6QyxtREFBOEM7QUFFOUMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBRXJCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLGNBQWMsRUFBRSxlQUFlO1FBQy9CLGVBQWUsRUFBRSxFQUFFO1FBQ25CLFdBQVcsRUFBRSxTQUFvQztRQUNqRCxjQUFjLEVBQUUsRUFBK0I7S0FDaEQ7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFPLElBQUcsQ0FBQztJQUM3QixnQkFBZ0IsRUFBRSxVQUFVLEtBQW1DO1FBQzdELElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxlQUFlLEVBQUUsRUFBRTtTQUNwQixDQUFDLENBQUM7UUFDSCxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDcEMsQ0FBQztJQUVELGVBQWUsRUFBRSxVQUFVLEtBQW1DO1FBQzVELEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNqQyxZQUFZLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUU5QixJQUFJLFlBQVksR0FBRyxDQUFDO1lBQUUsT0FBTztRQUM3QixJQUFJLFlBQVksR0FBRyxFQUFFO1lBQUUsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsY0FBYyxFQUFFLGdCQUFjLFlBQVksU0FBTTtTQUNqRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxFQUFFO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGNBQWMsRUFBRSxlQUFlO1lBQy9CLGVBQWUsRUFBRSwwQkFBMEI7U0FDNUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU87UUFDTCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG9CQUFvQjtTQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxFQUFFLGNBQWEsQ0FBQztJQUN2QixNQUFNLEVBQUU7O1FBQ04sSUFBTSxnQkFBZ0IsR0FBRyxNQUFBLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLDBDQUFFLE9BQWtDLENBQUM7UUFDdkcsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFDRCxpQkFBaUIsRUFBakI7UUFBQSxpQkFZQzs7UUFYQyxtQkFBUzthQUNOLEdBQUcsQ0FBbUQsY0FBYyxFQUFFO1lBQ3JFLEdBQUcsUUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsMENBQUUsTUFBTTtZQUNsQyxJQUFJLEVBQUUsQ0FBQztTQUNSLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFSLENBQVEsQ0FBQzthQUN2QixJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ1IsSUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQVQsQ0FBUyxDQUFDLENBQUM7WUFDekUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxjQUFjLGdCQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELE1BQU0sRUFBRSxjQUFhLENBQUM7SUFDdEIsUUFBUSxFQUFFLGNBQWEsQ0FBQztJQUN4QixpQkFBaUIsRUFBRSxjQUFhLENBQUM7SUFDakMsYUFBYSxFQUFFLGNBQWEsQ0FBQztJQUM3QixpQkFBaUIsRUFBRSxjQUFhLENBQUM7SUFDakMsWUFBWSxFQUFFLGNBQWEsQ0FBQztJQUU1QixZQUFZLEVBQUUsVUFBVSxJQUFJLElBQUcsQ0FBQztDQUNqQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IGh0dHBVdGlscyBmcm9tICcuLi8uLi91dGlscy9odHRwVXRpbHMnO1xuXG5sZXQgc3RhcnRZID0gMDtcbmxldCBtb3ZlWSA9IDA7XG5sZXQgbW92ZURpc3RhbmNlID0gMDtcbi8vUGFnZSBPYmplY3RcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgY292ZXJUcmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcbiAgICBjb3ZlclRyYW5zaXRpb246ICcnLFxuICAgIHVzZXJQcm9maWxlOiB1bmRlZmluZWQgYXMgVXNlclByb2ZpbGUgfCB1bmRlZmluZWQsXG4gICAgcmVjZW50UGxheUxpc3Q6IFtdIGFzIFBlcnNvbmFsUGFnZS5SZWNlbnRQbGF5W10sXG4gIH0sXG4gIC8vb3B0aW9ucyhPYmplY3QpXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHt9LFxuICBoYW5kbGVUb3VjaFN0YXJ0OiBmdW5jdGlvbiAoZXZlbnQ6IFdlY2hhdE1pbmlwcm9ncmFtLlRvdWNoRXZlbnQpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY292ZXJUcmFuc2l0aW9uOiAnJyxcbiAgICB9KTtcbiAgICBzdGFydFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gIH0sXG5cbiAgaGFuZGxlVG91Y2hNb3ZlOiBmdW5jdGlvbiAoZXZlbnQ6IFdlY2hhdE1pbmlwcm9ncmFtLlRvdWNoRXZlbnQpIHtcbiAgICBtb3ZlWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICBtb3ZlRGlzdGFuY2UgPSBtb3ZlWSAtIHN0YXJ0WTtcblxuICAgIGlmIChtb3ZlRGlzdGFuY2UgPCAwKSByZXR1cm47XG4gICAgaWYgKG1vdmVEaXN0YW5jZSA+IDgwKSBtb3ZlRGlzdGFuY2UgPSA4MDtcblxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBjb3ZlclRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHttb3ZlRGlzdGFuY2V9cnB4KWAsXG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlVG91Y2hFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY292ZXJUcmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcbiAgICAgIGNvdmVyVHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAxcyBlYXNlLWluLW91dCcsXG4gICAgfSk7XG4gIH0sXG5cbiAgdG9Mb2dpbigpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy9wYWdlcy9sb2dpbi9sb2dpbicsXG4gICAgfSk7XG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge30sXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVzZXJQcm9maWxlTG9jYWwgPSB3eC5nZXRTdG9yYWdlU3luYyhjb25maWcuc3RvcmFnZUtleS51c2VyKT8ucHJvZmlsZSBhcyBVc2VyUHJvZmlsZSB8IHVuZGVmaW5lZDtcbiAgICBpZiAodXNlclByb2ZpbGVMb2NhbCkge1xuICAgICAgdGhpcy5zZXREYXRhKHsgdXNlclByb2ZpbGU6IHVzZXJQcm9maWxlTG9jYWwgfSk7XG4gICAgICB0aGlzLmdldFJlY2VudFBsYXlMaXN0KCk7XG4gICAgfVxuICB9LFxuICBnZXRSZWNlbnRQbGF5TGlzdCgpIHtcbiAgICBodHRwVXRpbHNcbiAgICAgIC5nZXQ8eyBhbGxEYXRhOiB7IHNvbmc6IFBlcnNvbmFsUGFnZS5SZWNlbnRQbGF5IH1bXSB9PignL3VzZXIvcmVjb3JkJywge1xuICAgICAgICB1aWQ6IHRoaXMuZGF0YS51c2VyUHJvZmlsZT8udXNlcklkLFxuICAgICAgICB0eXBlOiAwLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zdCByZWNlbnRQbGF5TGlzdCA9IHJlcy5hbGxEYXRhLnNsaWNlKDAsIDEwKS5tYXAoKGRhdGEpID0+IGRhdGEuc29uZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlY2VudFBsYXlMaXN0WzBdLmFsLnBpY1VybCk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IHJlY2VudFBsYXlMaXN0IH0pO1xuICAgICAgfSk7XG4gIH0sXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge30sXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7fSxcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHt9LFxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7fSxcbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHt9LFxuICBvblBhZ2VTY3JvbGw6IGZ1bmN0aW9uICgpIHt9LFxuICAvL2l0ZW0oaW5kZXgscGFnZVBhdGgsdGV4dClcbiAgb25UYWJJdGVtVGFwOiBmdW5jdGlvbiAoaXRlbSkge30sXG59KTtcbiJdfQ==