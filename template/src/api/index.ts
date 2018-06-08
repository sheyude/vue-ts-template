import http from '../server/http.server'

export default {
    sign: (param?:any) => http.httpGet(`http://www.baidu.com`, param)
}