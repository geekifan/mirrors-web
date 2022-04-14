import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, 
  timeout: 5000 // request timeout
})

service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  response => {
      return response.data
  },

  error => {
    if (error.response !== undefined && error.response.status === 404) {
      Message({
        message: '请求的资源不存在',
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      Message({
        message: '请求出错啦！请检查网络连接或刷新后重试。',
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service
