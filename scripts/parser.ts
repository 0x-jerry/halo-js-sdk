import { normalizeKey } from './utils'

export interface IObjectType {
  props?: Prop[]
}

export interface IArrayType {
  type: Type
}

export type TypeName = 'boolean' | 'string' | 'number' | string
export type IEnumType = string[]

export type Type = TypeName | IEnumType | IObjectType | IArrayType

export interface Prop {
  name: string
  type: Type
}

export interface Interface {
  name: string
  type: IObjectType
}

export interface Param {
  name: string
  type: Type
}

export interface API {
  path: string
  method: 'get' | 'post' | 'put' | 'delete' | string
  params: Param[]
  data: Type
}

export function parseAPIJson(json) {
  const interfaces: Interface[] = []
  const apis: API[] = []

  Object.keys(json.definitions).forEach((key) => {
    const v = json.definitions[key]
    const i = parseDefinition(v)
    interfaces.push(i)
  })

  Object.keys(json.paths).forEach((urlPath) => {
    const pathData = json.paths[urlPath]

    Object.keys(pathData).forEach((method) => {
      const methodData = pathData[method]

      const api: API = {
        path: urlPath,
        method: method as any,
        params: (methodData.parameters || []).map(parseParameter),
        data: 'void'
      }

      const resType = methodData.responses[200].schema
      if (resType) {
        api.data = parseType(resType)
      }

      apis.push(api)
    })
  })

  return {
    apis,
    interfaces
  }
}

function parseDefinition(defineData) {
  const i: Interface = {
    name: normalizeKey(defineData.title),
    type: parseType(defineData) as any
  }

  return i
}

function parseParameter(paramData) {
  const param: Param = {
    name: paramData.name,
    type: parseType(paramData)
  }

  return param
}

function parseType(typeData): Type {
  let type: Type = 'any'

  if (typeData.$ref) {
    type = typeData.$ref.split('/').pop()
    return normalizeKey(type as string)
  }

  switch (typeData.type) {
    case 'array':
      type = {
        type: parseType(typeData.items)
      }
      break
    case 'integer':
      type = 'number'
      break
    case 'boolean':
    case 'string':
    case 'number':
      type = typeData.enum || typeData.type
      break
    case 'object':
      {
        const props: Prop[] = Object.keys(typeData.properties || {}).map(
          (key) => {
            const v = typeData.properties[key]

            const p: Prop = {
              name: key,
              type: parseType(v)
            }
            return p
          }
        )

        type = props.length
          ? {
              props
            }
          : 'any'
      }
      break

    default:
      break
  }

  return type
}
