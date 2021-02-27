// @ts-nocheck
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

interface IConfig {
  target: string
  accessKey: string
  axios: AxiosInstance
}

export const configs: IConfig = {
  target: '',
  accessKey: '',
  axios: null
}

export function axiosRequestInterceptor(conf: AxiosRequestConfig) {
  if (configs.accessKey) {
    // apiInfo generate by core.ts
    conf.headers[apiInfo.authKey] = configs.accessKey
  }

  conf.url = conf.url.replace(/\{\w+\}/g, (name) => {
    return conf.params[name.slice(1, name.length - 1)]
  })

  return conf
}

export function initConfig(opt: Partial<IConfig>) {
  Object.assign(configs, opt)

  configs.axios = axios.create({
    baseURL: configs.target
  })

  configs.axios.interceptors.request.use(axiosRequestInterceptor)
}

function decodeResponseData(data: any) {
  return data.data ? data.data : data
}

async function get(path: string, data?: any = {}) {
  const { __body, ...other } = data

  const res = await configs.axios.get(path, { params: other, data: __body })

  return decodeResponseData(res.data)
}

async function post(path: string, data?: any = {}) {
  const { __body, ...other } = data

  const res = await configs.axios.post(path, { params: other, data: __body })

  return decodeResponseData(res.data)
}

async function put(path: string, data?: any = {}) {
  const { __body, ...other } = data

  const res = await configs.axios.put(path, { params: other, data: __body })

  return decodeResponseData(res.data)
}

async function remove(path: string, data?: any = {}) {
  const { __body, ...other } = data

  const res = await configs.axios.delete(path, { params: other, data: __body })

  return decodeResponseData(res.data)
}
