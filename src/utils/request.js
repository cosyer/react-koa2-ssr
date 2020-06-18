import axios from "axios";
import NProgress from "nprogress"; // 引入nprogress插件
import "nprogress/nprogress.css"; // 这个nprogress样式必须引入

axios.defaults.baseURL = "http://localhost:3000"; // 本机3000端口

// 请求超时时长
axios.defaults.timeout = 10000;

export default async (method, url, data, config) => {
  method = method.toLowerCase();
  // 根据method实现对应请求方式
  switch (method) {
    case "get":
      return axios({ method: "get", url, params: data });
    case "post":
      return axios({ method: "post", url, params: data });
    default:
      console.error("请检查请求方式!");
      return false;
  }
};

// 请求拦截器 需要设置proxy
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
