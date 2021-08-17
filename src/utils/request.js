import { request } from '@tarojs/taro';
// 使用前，先看options的配置：
// 都是通用设置，另外H5有一些特殊配置，请移步：https://docs.taro.zone/docs/apis/network/request/request
// options: {
//   data?: 请求参数，
//   dataType?: 返回参数的格式，默认 json
//   header?: 请求头设置
//   timeout?: 请求超时时间，默认10秒
// }
const baseRequest = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    request({
      method: 'GET',
      timeout: 10000,
      ...options,
      header: {
        'Content-Type': 'application/json',
        ...options.header,
      },
      url,
    }).then(
      response => {
        // 这里根据后端具体情况做修改
        const responseData = response || response.data
        // return responseData
        resolve(responseData);
      },
      err => {
        reject(err);
      },
    );
  });
};

/**
 * get
 * @param url
 * @param opts
 * @returns {Promise}
 */
const get = async (url, opts) => {
  return baseRequest(url, opts);
};

/**
 * post
 * @param url
 * @param opts
 * @returns {Promise}
 */
const post = async (url, opts) => {
  return baseRequest(url, {
    ...opts,
    method: 'POST',
  });
};

/**
 * put
 * @param url
 * @param opts
 * @returns {Promise}
 */
const put = async (url, opts) => {
  return baseRequest(url, {
    ...opts,
    method: 'PUT',
  });
};

export default {
  get,
  post,
  put,
};