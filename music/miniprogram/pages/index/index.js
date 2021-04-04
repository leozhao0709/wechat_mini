"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var httpUtils_1 = require("../../utils/httpUtils");
var app = getApp();
Page({
    data: {
        bannerList: [],
        recommendList: [],
        topList: [],
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            var topListCount, i, res, topListData, playlist;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        topListCount = 5;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < topListCount)) return [3, 4];
                        return [4, httpUtils_1.default.get('/top/list', { idx: i })];
                    case 2:
                        res = _a.sent();
                        topListData = res.data;
                        playlist = { name: topListData.playlist.name, tracks: topListData.playlist.tracks.slice(0, 3) };
                        this.setData({
                            topList: __spreadArrays(this.data.topList, [playlist]),
                        });
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxtREFBOEM7QUFHOUMsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFakMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osVUFBVSxFQUFFLEVBQWM7UUFDMUIsYUFBYSxFQUFFLEVBQWlCO1FBQ2hDLE9BQU8sRUFBRSxFQUFnQjtLQUMxQjtJQUVLLE1BQU0sRUFBWjs7Ozs7Ozt3QkFDRSxtQkFBUzs2QkFDTixHQUFHLENBQXdCLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQzs2QkFDbEQsSUFBSSxDQUFDLFVBQUMsR0FBRzs0QkFDUixPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1gsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBbUI7NkJBQ3pDLENBQUM7d0JBRkYsQ0FFRSxDQUNILENBQUM7d0JBRUosbUJBQVM7NkJBQ04sR0FBRyxDQUEwQixlQUFlLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7NkJBQzVELElBQUksQ0FBQyxVQUFDLEdBQUc7NEJBQ1IsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQ0FDWCxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNOzZCQUMvQixDQUFDLENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7d0JBRUMsWUFBWSxHQUFHLENBQUMsQ0FBQzt3QkFDZCxDQUFDLEdBQUcsQ0FBQzs7OzZCQUFFLENBQUEsQ0FBQyxHQUFHLFlBQVksQ0FBQTt3QkFDbEIsV0FBTSxtQkFBUyxDQUFDLEdBQUcsQ0FBYyxXQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQTs7d0JBQS9ELEdBQUcsR0FBRyxTQUF5RDt3QkFDL0QsV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7d0JBQ3ZCLFFBQVEsR0FBYSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUNoSCxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLE9BQU8saUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUUsUUFBUSxFQUFDO3lCQUMxQyxDQUFDLENBQUM7Ozt3QkFONkIsQ0FBQyxFQUFFLENBQUE7Ozs7OztLQVF0QztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG5cbmltcG9ydCBodHRwVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvaHR0cFV0aWxzJztcblxuLy8g6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBiYW5uZXJMaXN0OiBbXSBhcyBCYW5uZXJbXSxcbiAgICByZWNvbW1lbmRMaXN0OiBbXSBhcyBSZWNvbW1lbmRbXSxcbiAgICB0b3BMaXN0OiBbXSBhcyBQbGF5bGlzdFtdLFxuICB9LFxuXG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBodHRwVXRpbHNcbiAgICAgIC5nZXQ8eyBiYW5uZXJzOiBCYW5uZXJbXSB9PignL2Jhbm5lcicsIHsgdHlwZTogMiB9KVxuICAgICAgLnRoZW4oKHJlcykgPT5cbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBiYW5uZXJMaXN0OiByZXMuZGF0YS5iYW5uZXJzIGFzIEJhbm5lcltdLFxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIGh0dHBVdGlsc1xuICAgICAgLmdldDx7IHJlc3VsdDogUmVjb21tZW5kW10gfT4oJy9wZXJzb25hbGl6ZWQnLCB7IGxpbWl0OiAxMCB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHJlY29tbWVuZExpc3Q6IHJlcy5kYXRhLnJlc3VsdCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIGNvbnN0IHRvcExpc3RDb3VudCA9IDU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3BMaXN0Q291bnQ7IGkrKykge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgaHR0cFV0aWxzLmdldDxUb3BMaXN0RGF0YT4oJy90b3AvbGlzdCcsIHsgaWR4OiBpIH0pO1xuICAgICAgY29uc3QgdG9wTGlzdERhdGEgPSByZXMuZGF0YTtcbiAgICAgIGNvbnN0IHBsYXlsaXN0OiBQbGF5bGlzdCA9IHsgbmFtZTogdG9wTGlzdERhdGEucGxheWxpc3QubmFtZSwgdHJhY2tzOiB0b3BMaXN0RGF0YS5wbGF5bGlzdC50cmFja3Muc2xpY2UoMCwgMykgfTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHRvcExpc3Q6IFsuLi50aGlzLmRhdGEudG9wTGlzdCwgcGxheWxpc3RdLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxufSk7XG4iXX0=