import axios, { AxiosInstance } from 'axios'

export interface IConfig {
  target: string
  accessKey: string
  axios: AxiosInstance
}

export const configs: IConfig = {
  target: '',
  accessKey: '',
  axios: null
}

export function initConfig(opt: Partial<IConfig>) {
  Object.assign(configs, opt)

  configs.axios = axios.create({
    baseURL: configs.target,
    headers: {
      'API-Authorization': configs.accessKey
    }
  })
}
