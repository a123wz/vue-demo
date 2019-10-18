import axios from 'axios'
import router from '@/router/index'

// 接口白名单
const whiteList = ['/userLogin']
const isInWhiteList = function (url) {
  var flag = false
  whiteList.forEach(function (e, i) {
    if (url.indexOf(e) >= 0) {
      flag = true
    }
  })
  return flag
}

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }

  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        // 添加全局的loading...
        if (!Object.keys(this.queue).length) {
          // Spin.show() // 不建议开启，因为界面不友好
        }
        this.queue[url] = true
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    // 响应拦截
    instance.interceptors.response.use(
      res => {
        this.destroy(url)
        const { data } = res
        if (data.code == '200') {
          return data
        } else if (data.code == '1001006001') {
        } else {
          Notice.error({
            title: '未知错误',
            desc: data.msg
          })
          return data
        }
      },
      error => {
        this.destroy(url)
        switch (error.response.status) {
          case 401:
            Notice.error({
              title: error.response.status,
              desc: error.response.data.message
            })
            router.replace('/login')
            break
          case 400:
          case 403:
          case 500:
          case 502:
            console.log('1')
            break
          default:
            console.log('1')
            break
        }

        return Promise.reject(error)
      }
    )
  }

  request (options) {
    const instance = axios.create({
      headers: {'Content-Type': 'application/json;charset=utf-8'},// 设置传输内容的类型和编码
      withCredentials: true// 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
    })
    options = Object.assign({ baseURL: this.baseUrl }, options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
