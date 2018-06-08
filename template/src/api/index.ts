import http from '../server/http.server'

export default {
    sign: (param?) => http.httpGet(`http://www.baidu.com`, param)
}