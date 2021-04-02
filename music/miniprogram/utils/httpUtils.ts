import config from '../config/config';

const httpUtils = {
  request: <T>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'TRACE' | 'CONNECT' = 'GET',
    data = {}
  ) => {
    return new Promise<WechatMiniprogram.RequestSuccessCallbackResult<T>>((resolve, reject) => {
      wx.request({
        url: config.host + url,
        data,
        method,
        success: (res: WechatMiniprogram.RequestSuccessCallbackResult<T>) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  },

  get: <T>(url: string, data = {}) => {
    return httpUtils.request<T>(url, 'GET', data);
  },

  post: <T>(url: string, data = {}) => {
    return httpUtils.request<T>(url, 'POST', data);
  },

  put: <T>(url: string, data = {}) => {
    return httpUtils.request<T>(url, 'PUT', data);
  },

  delete: <T>(url: string, data = {}) => {
    return httpUtils.request<T>(url, 'DELETE', data);
  },
};

export default httpUtils;
