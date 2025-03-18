import axios from "axios";

// 创建axios实例
const movieRequest = axios.create({
  baseURL: "https://apis.tianapi.com",
  timeout: 5000,
});

// 请求拦截器
movieRequest.interceptors.request.use(
  (config) => {
    // 添加天行API的key
    config.params = {
      ...config.params,
      key: "4f6b8dc98ea5f143d786ec78e6090273",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
movieRequest.interceptors.response.use(
  (response) => {
    // 统一处理天行API的响应数据格式
    const { code, msg, result } = response.data;
    if (code === 200) {
      return result;
    }
    return Promise.reject(new Error(msg || "请求失败"));
  },
  (error) => {
    console.error("请求错误:", error.message);
    return Promise.reject(error);
  }
);

// 电影相关接口封装
const MOVIE_API = {
  // 获取电影列表
  getMovieList: (params) => {
    return movieRequest({
      method: "get",
      url: "/film/index",
      params,
    });
  },

  // 获取电影详情
  getMovieDetail: (id) => {
    return movieRequest({
      method: "get",
      url: "/film/index",
      params: { id },
    });
  },

  // 获取正在热映的电影
  getNowPlaying: (params) => {
    return movieRequest({
      method: "get",
      url: "/film/index",
      params: { ...params, type: 1 },
    });
  },

  // 获取即将上映的电影
  getComingSoon: (params) => {
    return movieRequest({
      method: "get",
      url: "/film/index",
      params: { ...params, type: 2 },
    });
  },

  // 获取热门电影
  getPopular: (params) => {
    return movieRequest({
      method: "get",
      url: "/film/index",
      params: { ...params, type: 3 },
    });
  },

  // 搜索电影
  searchMovies: (keyword) => {
    return movieRequest({
      method: "get",
      url: "/film/index",
      params: { keyword },
    });
  },
};

export default MOVIE_API;
