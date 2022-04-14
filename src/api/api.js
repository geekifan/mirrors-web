import request from '@/utils/request.js'
import global from '@/global/global.js'

export function jobs() {
  return request({
    url: '/jobs',
    method: 'get',
  })
}

export function news(url) {
  return request({
    url: url,
    method: 'get'
  })
}

export function requestUrl(url) {
  return request({
    url: url,
    method: 'get'
  })
}

export function newsList() {
  return request({
    url: global.newsListRequestPath,
    method: 'get'
  })
}

export function distros() {
  return request({
    url: global.distrosRequestPath,
    method: 'get'
  })
}

export function info() {
  return request({
    url: global.infoRequestPath,
    method: 'get'
  })
}
