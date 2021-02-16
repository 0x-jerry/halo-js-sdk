import { assert } from 'console'
import api from '../src'

require('dotenv').config()

api.initConfig({
  target: process.env.TEST_TARGET,
  accessKey: process.env.TEST_ACCESS_KEY
})

async function test() {
  const res = await api.content.postsGet({
    page: 0,
    size: 0,
    sort: []
  })

  assert(Array.isArray(res.content))

  assert(typeof res.empty === 'boolean')
}

test()
