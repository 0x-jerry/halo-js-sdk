import { assert } from 'console'
import { initConfig, postsGet, postsPostIdGet } from '../src/contentApi'

require('dotenv').config()

initConfig({
  target: process.env.TEST_TARGET,
  accessKey: process.env.TEST_ACCESS_KEY
})

async function test() {
  const res = await postsGet({
    page: 0,
    size: 0,
    sort: []
  })

  assert(Array.isArray(res.content), 'posts content')

  const postId = res.content[0].id

  const postRes = await postsPostIdGet({
    postId: postId
  })

  assert(Array.isArray(postRes.categories), 'post categories')

  assert(Array.isArray(postRes.tags), 'post tags')
}

test()
