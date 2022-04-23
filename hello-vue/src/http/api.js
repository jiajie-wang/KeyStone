// 创建http文件夹，在该文件夹下创建api.js用来对axios做了拦截设置处理。

import axios from 'axios'

axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('userToken');
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.accessToken = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  })

// 响应拦截器
axios.interceptors.response.use(response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  })

export default axios
