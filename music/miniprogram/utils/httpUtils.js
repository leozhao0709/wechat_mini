"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config/config");
var httpUtils = {
    request: function (url, method, data) {
        if (method === void 0) { method = 'GET'; }
        if (data === void 0) { data = {}; }
        return new Promise(function (resolve, reject) {
            wx.request({
                url: config_1.default.host + url,
                data: data,
                method: method,
                header: {
                    cookie: wx.getStorageSync(config_1.default.storageKey.user_cookie),
                },
                success: function (res) {
                    resolve(res);
                },
                fail: function (err) {
                    reject(err);
                },
            });
        });
    },
    get: function (url, data) {
        if (data === void 0) { data = {}; }
        return httpUtils.request(url, 'GET', data);
    },
    post: function (url, data) {
        if (data === void 0) { data = {}; }
        return httpUtils.request(url, 'POST', data);
    },
    put: function (url, data) {
        if (data === void 0) { data = {}; }
        return httpUtils.request(url, 'PUT', data);
    },
    delete: function (url, data) {
        if (data === void 0) { data = {}; }
        return httpUtils.request(url, 'DELETE', data);
    },
};
exports.default = httpUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNDO0FBRXRDLElBQU0sU0FBUyxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxVQUNQLEdBQVcsRUFDWCxNQUE0RixFQUM1RixJQUFnQjtRQURoQix1QkFBQSxFQUFBLGNBQTRGO1FBQzVGLHFCQUFBLEVBQUEsT0FBTyxFQUFTO1FBRWhCLE9BQU8sSUFBSSxPQUFPLENBQW9ELFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDcEYsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxHQUFHLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRztnQkFDdEIsSUFBSSxNQUFBO2dCQUNKLE1BQU0sUUFBQTtnQkFDTixNQUFNLEVBQUU7b0JBQ04sTUFBTSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO2lCQUN6RDtnQkFDRCxPQUFPLEVBQUUsVUFBQyxHQUFzRDtvQkFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUM7Z0JBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztvQkFDUixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEdBQUcsRUFBRSxVQUFJLEdBQVcsRUFBRSxJQUFTO1FBQVQscUJBQUEsRUFBQSxTQUFTO1FBQzdCLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFJLEVBQUUsVUFBSSxHQUFXLEVBQUUsSUFBUztRQUFULHFCQUFBLEVBQUEsU0FBUztRQUM5QixPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUksR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsR0FBRyxFQUFFLFVBQUksR0FBVyxFQUFFLElBQVM7UUFBVCxxQkFBQSxFQUFBLFNBQVM7UUFDN0IsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELE1BQU0sRUFBRSxVQUFJLEdBQVcsRUFBRSxJQUFTO1FBQVQscUJBQUEsRUFBQSxTQUFTO1FBQ2hDLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBSSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRixDQUFDO0FBRUYsa0JBQWUsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnJztcblxuY29uc3QgaHR0cFV0aWxzID0ge1xuICByZXF1ZXN0OiA8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgbWV0aG9kOiAnR0VUJyB8ICdQT1NUJyB8ICdQVVQnIHwgJ0RFTEVURScgfCAnT1BUSU9OUycgfCAnSEVBRCcgfCAnVFJBQ0UnIHwgJ0NPTk5FQ1QnID0gJ0dFVCcsXG4gICAgZGF0YSA9IHt9IGFzIGFueVxuICApID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8V2VjaGF0TWluaXByb2dyYW0uUmVxdWVzdFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdDxUPj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogY29uZmlnLmhvc3QgKyB1cmwsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgY29va2llOiB3eC5nZXRTdG9yYWdlU3luYyhjb25maWcuc3RvcmFnZUtleS51c2VyX2Nvb2tpZSksXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLlJlcXVlc3RTdWNjZXNzQ2FsbGJhY2tSZXN1bHQ8VD4pID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGdldDogPFQ+KHVybDogc3RyaW5nLCBkYXRhID0ge30pID0+IHtcbiAgICByZXR1cm4gaHR0cFV0aWxzLnJlcXVlc3Q8VD4odXJsLCAnR0VUJywgZGF0YSk7XG4gIH0sXG5cbiAgcG9zdDogPFQ+KHVybDogc3RyaW5nLCBkYXRhID0ge30pID0+IHtcbiAgICByZXR1cm4gaHR0cFV0aWxzLnJlcXVlc3Q8VD4odXJsLCAnUE9TVCcsIGRhdGEpO1xuICB9LFxuXG4gIHB1dDogPFQ+KHVybDogc3RyaW5nLCBkYXRhID0ge30pID0+IHtcbiAgICByZXR1cm4gaHR0cFV0aWxzLnJlcXVlc3Q8VD4odXJsLCAnUFVUJywgZGF0YSk7XG4gIH0sXG5cbiAgZGVsZXRlOiA8VD4odXJsOiBzdHJpbmcsIGRhdGEgPSB7fSkgPT4ge1xuICAgIHJldHVybiBodHRwVXRpbHMucmVxdWVzdDxUPih1cmwsICdERUxFVEUnLCBkYXRhKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBVdGlscztcbiJdfQ==