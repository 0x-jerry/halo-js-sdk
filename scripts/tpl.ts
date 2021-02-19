import fs from 'fs-extra'
import path from 'path'

export type TplType = 'comment' | 'config'

const cache = {}

export function getTpl(tpl: TplType) {
  return (
    cache[tpl] ||
    (cache[tpl] = fs.readFileSync(path.join(__dirname, 'tpl', tpl + '.ts'), {
      encoding: 'utf-8'
    }))
  )
}
