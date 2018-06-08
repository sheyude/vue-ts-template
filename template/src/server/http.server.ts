/**
 * author 文全
 */

import axios from 'axios';
import storage from './storage.server'
import {urlBase} from '../config/index'
/**
 * 封装的全局ajax请求
 */


// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    const token = storage.get('token') || ""
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `${token}`;
    }
    config.headers['mw-token'] = token;
    return config;
  },
  err => {
    return Promise.reject(err);
  });

axios.interceptors.response.use(
  (res) => {
    try {
      if(res.data.code==401){

      }
    }catch (err){

    }
    return res;
  },
  err => {
    return Promise.reject(err);
  });
class Http {
  constructor() {
    console.log(urlBase)
    axios.defaults.baseURL = urlBase
    axios.defaults.timeout = 100000

  }


  /**
   * GET 请求 {es6解构赋值}
   * @param type 包含url信息
   * @param data 需要发送的参数
   * @returns {Promise}
   * @constructor
   */
  async httpGet(url:string, resData = {}) {
    // 创建一个promise对象
    // resData = Object.assign(resData, this.locale)
    try {
      let { data } = await axios.get(url, { params: resData });
      return data;
    } catch (error) {

    }

  }

  /**
   * POST 请求
   * @param type Object 包含url信息
   * @param data Object 需要发送的参数
   * @returns {Promise}
   * @constructor
   */
  async httpPost(url:string, resData = {}) {
    // 创建一个promise对象

    try {
      // resData = Object.assign(resData, this.locale)
      let { data } = await axios.post(url, resData);
      if (data.code == 500) {
        console.error(500);
        //router.push('/')
      }
      return data;
    } catch (error) {
      console.log(error)
    }

  }

  



  get locale() {
    return {
      locale: "zh"
    }
  }

}
export default  new Http();