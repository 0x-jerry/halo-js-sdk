import fs from 'fs-extra'
import path from 'path'
import prettier from 'prettier'
import { parseAPIJson } from './parser'
import { generateAPICode, generateDefinesCode } from './generator'
import axios from 'axios'

const urls = [
  'https://api.halo.run/data/admin-api.json',
  'https://api.halo.run/data/content-api.json'
]

const isDev = process.env.NODE_ENV !== 'production'

console.log('env:', process.env.NODE_ENV)

export function main(force = false) {
  urls.map(async (url) => {
    const name = url.split('/').pop().split('.')[0].replace(/-a/, 'A')
    const data = await getSource(url, force)

    generateCodeFromJson(data, name)
    console.log('Generate code for', url)
  })
}

function getAuthKey(data: any) {
  const defines = data.securityDefinitions
  const o: any = Object.keys(defines).find((k) => defines[k].in === 'header')

  return defines[o].name || 'Authorization'
}

async function getSource(url: string, update = false) {
  const name = url.split('/').pop()
  try {
    if (update) {
      throw 'Should update'
    }

    const data = await import('../api-json/' + name)
    return data
  } catch (error) {
    const { data } = await axios.get(url)

    fs.writeFileSync(
      path.join(__dirname, '../api-json', name),
      JSON.stringify(data, null, 2)
    )
    console.log('update json:', url)

    return data
  }
}

function generateCodeFromJson(json, apiFileName) {
  const { apis, interfaces } = parseAPIJson(json)

  toFile(`${apiFileName}Define.d.ts`, generateDefinesCode(interfaces))

  const define = `import {${interfaces
    .map((i) => i.name)
    .join(',')}} from './${apiFileName}Define'

    export const apiInfo = {
      version: "${json.info.version}",
      authKey: "${getAuthKey(json)}"
    }

    `
  const apiCode = generateAPICode(apis, { header: define })

  toFile(`${apiFileName}.ts`, apiCode)
}

function toFile(fileName: string, source: string) {
  const filePath = path.join(__dirname, '../src', fileName)

  const format = (source: string) => {
    if (isDev) {
      try {
        return prettier.format(source, { parser: 'typescript' })
      } catch (error) {
        console.log('format error:', fileName, error)
        return source
      }
    } else {
      return prettier.format(source, { parser: 'typescript' })
    }
  }

  fs.ensureDirSync(path.dirname(filePath))
  fs.writeFileSync(filePath, format(source))
}
