import axios from "axios";
import NProgress from "nprogress"; // 引入nprogress插件
import "nprogress/nprogress.css"; // 这个nprogress样式必须引入

// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    NProgress.start(); // 设置加载进度条(开始..)
    config.headers.Authorization = "cosyer"; // 设置全局headers
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    NProgress.done(); // 设置加载进度条(结束..)
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios.create({
  baseURL: `http://localhost:3000`,
});
