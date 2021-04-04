"use strict";
var startY = 0;
var moveY = 0;
var moveDistance = 0;
Page({
    data: {
        coverTransform: 'translateY(0)',
        coverTransition: '',
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
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    onShareAppMessage: function () { },
    onPageScroll: function () { },
    onTabItemTap: function (item) { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBRXJCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLGNBQWMsRUFBRSxlQUFlO1FBQy9CLGVBQWUsRUFBRSxFQUFFO0tBQ3BCO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBTyxJQUFHLENBQUM7SUFDN0IsZ0JBQWdCLEVBQUUsVUFBVSxLQUFtQztRQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsZUFBZSxFQUFFLEVBQUU7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxlQUFlLEVBQUUsVUFBVSxLQUFtQztRQUM1RCxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDakMsWUFBWSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7UUFFOUIsSUFBSSxZQUFZLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFDN0IsSUFBSSxZQUFZLEdBQUcsRUFBRTtZQUFFLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFekMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGNBQWMsRUFBRSxnQkFBYyxZQUFZLFNBQU07U0FDakQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWMsRUFBRTtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxjQUFjLEVBQUUsZUFBZTtZQUMvQixlQUFlLEVBQUUsMEJBQTBCO1NBQzVDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxPQUFPLEVBQUUsY0FBYSxDQUFDO0lBQ3ZCLE1BQU0sRUFBRSxjQUFhLENBQUM7SUFDdEIsTUFBTSxFQUFFLGNBQWEsQ0FBQztJQUN0QixRQUFRLEVBQUUsY0FBYSxDQUFDO0lBQ3hCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztJQUNqQyxhQUFhLEVBQUUsY0FBYSxDQUFDO0lBQzdCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztJQUNqQyxZQUFZLEVBQUUsY0FBYSxDQUFDO0lBRTVCLFlBQVksRUFBRSxVQUFVLElBQUksSUFBRyxDQUFDO0NBQ2pDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImxldCBzdGFydFkgPSAwO1xubGV0IG1vdmVZID0gMDtcbmxldCBtb3ZlRGlzdGFuY2UgPSAwO1xuLy9QYWdlIE9iamVjdFxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBjb3ZlclRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLFxuICAgIGNvdmVyVHJhbnNpdGlvbjogJycsXG4gIH0sXG4gIC8vb3B0aW9ucyhPYmplY3QpXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHt9LFxuICBoYW5kbGVUb3VjaFN0YXJ0OiBmdW5jdGlvbiAoZXZlbnQ6IFdlY2hhdE1pbmlwcm9ncmFtLlRvdWNoRXZlbnQpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY292ZXJUcmFuc2l0aW9uOiAnJyxcbiAgICB9KTtcbiAgICBzdGFydFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gIH0sXG5cbiAgaGFuZGxlVG91Y2hNb3ZlOiBmdW5jdGlvbiAoZXZlbnQ6IFdlY2hhdE1pbmlwcm9ncmFtLlRvdWNoRXZlbnQpIHtcbiAgICBtb3ZlWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICBtb3ZlRGlzdGFuY2UgPSBtb3ZlWSAtIHN0YXJ0WTtcblxuICAgIGlmIChtb3ZlRGlzdGFuY2UgPCAwKSByZXR1cm47XG4gICAgaWYgKG1vdmVEaXN0YW5jZSA+IDgwKSBtb3ZlRGlzdGFuY2UgPSA4MDtcblxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBjb3ZlclRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHttb3ZlRGlzdGFuY2V9cnB4KWAsXG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlVG91Y2hFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY292ZXJUcmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcbiAgICAgIGNvdmVyVHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAxcyBlYXNlLWluLW91dCcsXG4gICAgfSk7XG4gIH0sXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHt9LFxuICBvblNob3c6IGZ1bmN0aW9uICgpIHt9LFxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHt9LFxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge30sXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7fSxcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge30sXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7fSxcbiAgb25QYWdlU2Nyb2xsOiBmdW5jdGlvbiAoKSB7fSxcbiAgLy9pdGVtKGluZGV4LHBhZ2VQYXRoLHRleHQpXG4gIG9uVGFiSXRlbVRhcDogZnVuY3Rpb24gKGl0ZW0pIHt9LFxufSk7XG4iXX0=