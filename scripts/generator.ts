import { IObjectType, IArrayType, Type, API, Interface } from './parser'

const isObjType = (obj): obj is IObjectType => obj.props
const isArrayType = (obj): obj is IArrayType => obj.type

function typeToSting(type: Type): string {
  if (Array.isArray(type)) {
    return type.map((t) => JSON.stringify(t)).join('|')
  } else if (isArrayType(type)) {
    return `Array<${typeToSting(type.type)}>`
  } else if (isObjType(type)) {
    return `{
        ${type.props
          .map((p) => `${p.name}: ${p.type ? typeToSting(p.type) : 'any'}`)
          .join('\n')}
      }`
  } else {
    return type
  }
}

export function generateDefinesCode(interfaces: Interface[]) {
  const str = interfaces
    .map((type) => {
      const iType = typeToSting(type.type)

      return `
      export interface ${type.name} ${iType === 'any' ? '{}' : iType}
      `
    })
    .join('\n')

  return str
}

export function generateAPICode(apis: API[]) {
  const str = apis.map((api) => {
    const type = api.params
      .map((p) => {
        return `${p.name}: ${p.type ? typeToSting(p.type) : 'any'}`
      })
      .join('\n')

    const resDataType = api.data
    const resType = resDataType ? typeToSting(resDataType) : 'void'

    const methodKey = api.method === 'delete' ? 'remove' : api.method

    const functionName =
      api.path
        .replace('/api/content/', '')
        .split('/')
        .map((n, i) => {
          const name = n.startsWith('{') ? n.slice(1, n.length - 1) : n
          if (i > 0) {
            return name[0].toUpperCase() + name.slice(1)
          } else {
            return name
          }
        })
        .join('') +
      methodKey[0].toUpperCase() +
      methodKey.slice(1)

    const optStr = type ? `opt: {${type}}` : ''

    return `
      "${functionName}"(${optStr}): Promise<${resType}> {
        return R.${methodKey}('${api.path}', ${optStr ? 'opt' : ''})
      }
      `
  })

  const total = `
    import * as R from '../request'

    export const api = {
      ${str}
    }
    `

  return total
}
