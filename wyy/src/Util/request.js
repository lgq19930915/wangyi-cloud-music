import axios from "axios"
// 请求拦截
//1.请求拦截 每次发起请求的时候，可以通过请求拦截，多传递参数
/*axios.interceptors.request.use(config => {
    console.log("=====发起了请求==========")
    console.log(config)
    if (config.method.toUpperCase() === "POST") {
        config.data.token = "348343hiejee"
    } else {   
         if(!config.params){
            config.params={}
         }
        config.params.token = "828934ushhetu3";
    }

    return config
})*/

//2.响应拦截  在每次服务端返回数据的时候，想要统一操作返回的数据，在响应拦截处理
axios.interceptors.response.use(response => {
  console.log("====这次请求的路径是：" + response.config.url + "======")
  console.log(response)

  //在IE里面，通过axios请求得到的数据类型是json字符串。
  if (typeof response === "string") {
    response = JSON.parse(response);
  }

  return response;
})


const baseUrl = "/api";
// 登录接口
export const requestLogin = (data) => {
  return axios({
    url: baseUrl + "/login/cellphone",
    method: "get",
    params: data
  })
}
// 验证码
export const sendCode = (data) => {
  return axios({
    url: baseUrl + "/captcha/sent",
    method: "get",
    params: data
  })
}
// 验证验证码
export const verify = (data) => {
  return axios({
    url: baseUrl + "/captcha/verify",
    method: "get",
    params: data
  })
}
// 获取推荐歌单
export const requestTuijian = () => {
  return axios({
    url: baseUrl + "/personalized",
    method: "get"
  })
}
// 获取歌单详情
export const requestList = (data) => {
  return axios({
    url: baseUrl + "/playlist/detail",
    method: "get",
    params: data
  })
}
// 获取歌曲评论
export const requestComment = (data) => {
  return axios({
    url: baseUrl + "/comment/music",
    method: "get",
    params: data
  })
}
// 点赞
export const dianzan = (data) => {
  return axios({
    url: baseUrl + "/comment/like",
    method: "get",
    params: data
  })
}
// 排行榜摘要
export const requestTop = () => {
  return axios({
    url: baseUrl + "/toplist/detail",
    method: "get"
  })
}
// 热搜
export const requestHots = () => {
  return axios({
    url: baseUrl + "/search/hot",
    method: "get"
  })
}
//搜索
export const requestSearch = (data) => {
  return axios({
    url: baseUrl + "/search",
    params: data
  })
}
// 歌词
export const requestGetLrc = (id) => {
  return axios({
    url: baseUrl + "/lyric",
    params: {
      id: id
    }
  })
}