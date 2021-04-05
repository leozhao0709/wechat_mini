"use strict";
Page({
    data: {
        phone: '',
        password: '',
    },
    onLoad: function (options) { },
    onReady: function () { },
    handleInputChange: function (event) {
        var _a;
        var type = event.currentTarget.dataset.type;
        this.setData((_a = {},
            _a[type] = event.detail.value,
            _a));
    },
    handleLogin: function () {
        var _a = this.data, phone = _a.phone, password = _a.password;
        if (!phone || !password) {
            wx.showToast({
                title: 'phone or password cannot be blank',
                icon: 'none',
            });
            return;
        }
        if (!phone.match(/^1[3-9]\d{9}$/)) {
            wx.showToast({
                title: 'invalid',
                icon: 'error',
            });
            return;
        }
        wx.showToast({
            title: 'success!',
        });
    },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    onShareAppMessage: function () { },
    onPageScroll: function () { },
    onTabItemTap: function (item) { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEVBQUU7UUFDVCxRQUFRLEVBQUUsRUFBRTtLQUNiO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBTyxJQUFHLENBQUM7SUFDN0IsT0FBTyxFQUFFLGNBQWEsQ0FBQztJQUV2QixpQkFBaUIsRUFBRSxVQUFVLEtBQThCOztRQUNqRCxJQUFBLElBQUksR0FBSyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sS0FBaEMsQ0FBaUM7UUFDN0MsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLElBQUksSUFBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQzFCLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxFQUFFO1FBQ0wsSUFBQSxLQUFzQixJQUFJLENBQUMsSUFBSSxFQUE3QixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQWMsQ0FBQztRQUV0QyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLG1DQUFtQztnQkFDMUMsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNqQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsT0FBTzthQUNkLENBQUMsQ0FBQztZQUNILE9BQU87U0FDUjtRQUVELEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUUsVUFBVTtTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxFQUFFLGNBQWEsQ0FBQztJQUN0QixNQUFNLEVBQUUsY0FBYSxDQUFDO0lBQ3RCLFFBQVEsRUFBRSxjQUFhLENBQUM7SUFDeEIsaUJBQWlCLEVBQUUsY0FBYSxDQUFDO0lBQ2pDLGFBQWEsRUFBRSxjQUFhLENBQUM7SUFDN0IsaUJBQWlCLEVBQUUsY0FBYSxDQUFDO0lBQ2pDLFlBQVksRUFBRSxjQUFhLENBQUM7SUFFNUIsWUFBWSxFQUFFLFVBQVUsSUFBSSxJQUFHLENBQUM7Q0FDakMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbW9jayBhY2NvdW50IHBob25lPTE1NzExMTQwNTkzJnBhc3N3b3JkPTEyMzQ1Nnl6eVxuLy9QYWdlIE9iamVjdFxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBwaG9uZTogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICB9LFxuICAvL29wdGlvbnMoT2JqZWN0KVxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7fSxcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge30sXG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudDogV2VjaGF0TWluaXByb2dyYW0uSW5wdXQpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgW3R5cGVdOiBldmVudC5kZXRhaWwudmFsdWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlTG9naW46IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7IHBob25lLCBwYXNzd29yZCB9ID0gdGhpcy5kYXRhO1xuXG4gICAgaWYgKCFwaG9uZSB8fCAhcGFzc3dvcmQpIHtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAncGhvbmUgb3IgcGFzc3dvcmQgY2Fubm90IGJlIGJsYW5rJyxcbiAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFwaG9uZS5tYXRjaCgvXjFbMy05XVxcZHs5fSQvKSkge1xuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICdpbnZhbGlkJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ3N1Y2Nlc3MhJyxcbiAgICB9KTtcbiAgfSxcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7fSxcbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7fSxcbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHt9LFxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge30sXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHt9LFxuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge30sXG4gIG9uUGFnZVNjcm9sbDogZnVuY3Rpb24gKCkge30sXG4gIC8vaXRlbShpbmRleCxwYWdlUGF0aCx0ZXh0KVxuICBvblRhYkl0ZW1UYXA6IGZ1bmN0aW9uIChpdGVtKSB7fSxcbn0pO1xuIl19