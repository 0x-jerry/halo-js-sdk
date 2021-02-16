import { api as contentApi } from './api/contentApi'
import { api as adminApi } from './api/adminApi'
import { initConfig } from './config'

export default {
  content: contentApi,
  admin: adminApi,
  initConfig
}
