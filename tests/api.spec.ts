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

  assert(Array.isArray(res.content), 'posts content')

  const postId = res.content[0].id

  const postRes = await api.content.postsPostIdGet({
    postId: postId
  })

  assert(Array.isArray(postRes.categories), 'post categories')

  assert(Array.isArray(postRes.tags), 'post tags')
}

test()
