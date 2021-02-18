import { api as contentApi } from './api/contentApi'
import { api as adminApi } from './api/adminApi'
import { initConfig } from './config'
import { apiInfo } from './api/info'

export default {
  version: apiInfo.version,
  content: contentApi,
  admin: adminApi,
  initConfig
}
