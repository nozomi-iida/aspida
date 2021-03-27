/* $api.ts was generated by aspida@1.6.3 */
/* eslint-disable */
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './[sampleId@number].json'
import type { Methods as Methods2 } from './foo%3Abar'
import type { Methods as Methods3 } from './foo%3Abar/[bar_id@string].json'
import type { Methods as Methods4 } from './foo%3Abar/[fooId@number]%40create'
import type { Methods as Methods5 } from './v1.1'
import type { Methods as Methods6 } from './v1.1/2/[hogeId@number]'
import type { Methods as Methods7 } from './v1.1/2/[hogeId@string]/entries.json'
import type { Methods as Methods8 } from './v1.1/2/[hogeId@string]/test-4'
import type { Methods as Methods9 } from './v1.1/2/[hogeId@string]/test-4/[fugaId]'
import type { Methods as Methods10 } from './v1.1/2/[hogeId@string]/test-4/fuga aa'
import type { Methods as Methods11 } from './v1.1/2/[hogeId]'
import type { Methods as Methods12 } from './v1.1/3.1'
import type { Methods as Methods13 } from './v1.1/[articleId].json'
import type { Methods as Methods14 } from './v1.1/users/[userId@string]'
import type { Methods as Methods15 } from './v2.0'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH' | 'OPTIONS'
type RequestType = 'FormData' | 'URLSearchParams' | 'ArrayBuffer' | 'Blob' | 'string' | 'any'
type HttpStatusOk = 200 | 201 | 202 | 203 | 204 | 205 | 206
type BasicHeaders = Record<string, string>

type AspidaRequest = {
  query?: any
  headers?: any
  httpBody?: any
  body?: any
  config?: RequestInit
}

type AspidaParams = {
  query?: any
  headers?: any
  body?: any
  config?: RequestInit
}

const headersToObject = (headers: Headers): any =>
  [...headers.entries()].reduce((prev, [key, val]) => ({ ...prev, [key]: val }), {})

const appendDataToFormData = (data: Record<string, any>, formData: FormData) => {
  Object.entries(data).forEach(([key, val]) => {
    if (Array.isArray(val)) {
      val.forEach(v => formData.append(key, v))
    } else if (val != null) {
      formData.append(key, val)
    }
  })

  return formData
}

const dataToURLString = (data: Record<string, any>) => {
  const searchParams = new URLSearchParams()

  Object.entries(data).forEach(([key, val]) => {
    if (Array.isArray(val)) {
      val.forEach(v => searchParams.append(key, v))
    } else if (val != null) {
      searchParams.append(key, val)
    }
  })

  return searchParams.toString()
}

const optionToRequest = (
  option?: AspidaParams,
  type?: RequestType
): AspidaRequest | undefined => {
  if (option?.body === undefined) return option

  let httpBody
  let headers: BasicHeaders = {}

  switch (type) {
    case 'FormData':
      if (typeof FormData !== 'undefined') {
        httpBody = appendDataToFormData(option.body, new FormData())
      } else {
        const formData = new (require('form-data'))()
        httpBody = appendDataToFormData(option.body, formData)
        headers = formData.getHeaders()
      }
      break
    case 'URLSearchParams':
      httpBody = dataToURLString(option.body)
      headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
      break
    case 'ArrayBuffer':
    case 'string':
    case 'Blob':
    case 'any':
      httpBody = option.body
      break
    default:
      httpBody = JSON.stringify(option.body)
      headers['Content-Type'] = 'application/json;charset=utf-8'
      break
  }

  return { httpBody, ...option, headers: { ...headers, ...option.headers } }
}

const send = async <T = void, U = BasicHeaders, V = HttpStatusOk>(
  client: typeof fetch,
  method: HttpMethod,
  baseURL: string,
  url: string,
  resType: 'json' | 'text' | 'arrayBuffer' | 'blob' | 'formData' | 'void',
  params?: AspidaParams,
  type?: RequestType
) => {
  const request = optionToRequest(params, type)
  const res = await client(
    `${baseURL}${url}${
      request?.query ? `?${dataToURLString(request.query)}` : ''
    }`,
    {
      method,
      ...request?.config,
      body: request?.httpBody,
      headers: { ...request?.config?.headers, ...request?.headers }
    }
  )

  return {
    status: res.status as any,
    headers: headersToObject(res.headers),
    body: resType === 'void' ? undefined : await res[resType]()
  } as { status: V, headers: U, body: T }
}

/**
 * root comment
 * 
 * @remarks
 * root remarks comment
 */
export const createApi = (init?: { baseURL?: string; fetch?: typeof fetch; config?: RequestInit}) => {
  const f = init?.fetch ?? (typeof fetch !== 'undefined' ? fetch : require('node-fetch'))
  const prefix = (init?.baseURL ?? '').replace(/\/$/, '')
  const PATH0 = '/'
  const PATH1 = '/foo:bar/'
  const PATH2 = '/v1.1/'
  const PATH3 = '/v1.1/2/'
  const PATH4 = '/entries.json/'
  const PATH5 = '/test-4/'
  const PATH6 = '/test-4/fuga aa/'
  const PATH7 = '/v1.1/3.1/'
  const PATH8 = '/v1.1/users/'
  const PATH9 = '/v2.0/'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    sampleId_json: (val0: number) => {
      const prefix0 = `/${val0}.json`

      return {
        $get: (option?: { config?: RequestInit }) =>
          send<Methods1['get']['resBody']>(f, GET, prefix, `${prefix0}${PATH0}`, 'json', option),
        $path: () => `${prefix}${prefix0}${PATH0}`
      }
    },
    foo_bar: {
      bar_id_json: (val1: string) => {
        const prefix1 = `${PATH1}${val1}.json`

        return {
          $get: (option?: { config?: RequestInit }) =>
            send<Methods3['get']['resBody']>(f, GET, prefix, `${prefix1}${PATH0}`, 'text', option),
          $path: () => `${prefix}${prefix1}${PATH0}`
        }
      },
      fooId_create: (val1: number) => {
        const prefix1 = `${PATH1}${val1}@create`

        return {
          $get: (option?: { config?: RequestInit }) =>
            send<Methods4['get']['resBody']>(f, GET, prefix, `${prefix1}${PATH0}`, 'text', option),
          $path: () => `${prefix}${prefix1}${PATH0}`
        }
      },
      $get: (option?: { config?: RequestInit }) =>
        send<Methods2['get']['resBody']>(f, GET, prefix, PATH1, 'text', option),
      $path: () => `${prefix}${PATH1}`
    },
    v1_1: {
      $2: {
        hogeId_number: (val2: number) => {
          const prefix2 = `${PATH3}${val2}`

          return {
            $get: (option: { query?: Methods6['get']['query'], headers: Methods6['get']['reqHeaders'], config?: RequestInit }) =>
              send<Methods6['get']['resBody']>(f, GET, prefix, `${prefix2}${PATH0}`, 'json', option),
            $path: (option?: { method?: 'get'; query: Methods6['get']['query'] }) =>
              `${prefix}${prefix2}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        hogeId_string: (val2: string) => {
          const prefix2 = `${PATH3}${val2}`

          return {
            entries_json: {
              $get: (option?: { config?: RequestInit }) =>
                send<Methods7['get']['resBody']>(f, GET, prefix, `${prefix2}${PATH4}`, 'json', option),
              $path: () => `${prefix}${prefix2}${PATH4}`
            },
            test_4: {
              /**
               * _fugaId comment
               */
              fugaId: (val4: number | string) => {
                const prefix4 = `${prefix2}${PATH5}${val4}`

                return {
                  $get: (option?: { query?: Methods9['get']['query'], config?: RequestInit }) =>
                    send<Methods9['get']['resBody']>(f, GET, prefix, `${prefix4}${PATH0}`, 'json', option),
                  $post: (option: { body?: Methods9['post']['reqBody'], query: Methods9['post']['query'], config?: RequestInit }) =>
                    send<Methods9['post']['resBody']>(f, POST, prefix, `${prefix4}${PATH0}`, 'json', option),
                  $put: (option: { query: Methods9['put']['query'], config?: RequestInit }) =>
                    send<Methods9['put']['resBody']>(f, PUT, prefix, `${prefix4}${PATH0}`, 'json', option),
                  /**
                   * _fugaId delete method
                   * @returns _fugaId resBody
                   */
                  $delete: (option: { query: Methods9['delete']['query'], config?: RequestInit }) =>
                    send<Methods9['delete']['resBody']>(f, DELETE, prefix, `${prefix4}${PATH0}`, 'json', option),
                  $path: (option?: { method?: 'get'; query: Methods9['get']['query'] } | { method: 'post'; query: Methods9['post']['query'] } | { method: 'put'; query: Methods9['put']['query'] } | { method: 'delete'; query: Methods9['delete']['query'] }) =>
                    `${prefix}${prefix4}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                }
              },
              fuga_aa: {
                $get: (option: { query: Methods10['get']['query'], config?: RequestInit }) =>
                  send<Methods10['get']['resBody']>(f, GET, prefix, `${prefix2}${PATH6}`, 'json', option),
                $post: (option: { body?: Methods10['post']['reqBody'], query: Methods10['post']['query'], config?: RequestInit }) =>
                  send<Methods10['post']['resBody']>(f, POST, prefix, `${prefix2}${PATH6}`, 'json', option),
                $put: (option: { query: Methods10['put']['query'], config?: RequestInit }) =>
                  send<Methods10['put']['resBody']>(f, PUT, prefix, `${prefix2}${PATH6}`, 'json', option),
                $delete: (option: { body: Methods10['delete']['reqBody'], query: Methods10['delete']['query'], config?: RequestInit }) =>
                  send<Methods10['delete']['resBody']>(f, DELETE, prefix, `${prefix2}${PATH6}`, 'json', option),
                $path: (option?: { method?: 'get'; query: Methods10['get']['query'] } | { method: 'post'; query: Methods10['post']['query'] } | { method: 'put'; query: Methods10['put']['query'] } | { method: 'delete'; query: Methods10['delete']['query'] }) =>
                  `${prefix}${prefix2}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              },
              $get: (option: { query: Methods8['get']['query'], config?: RequestInit }) =>
                send<void>(f, GET, prefix, `${prefix2}${PATH5}`, 'void', option),
              $post: (option?: { body?: Methods8['post']['reqBody'], query?: Methods8['post']['query'], config?: RequestInit }) =>
                send<void>(f, POST, prefix, `${prefix2}${PATH5}`, 'void', option),
              $put: (option?: { query?: Methods8['put']['query'], config?: RequestInit }) =>
                send<Methods8['put']['resBody']>(f, PUT, prefix, `${prefix2}${PATH5}`, 'json', option),
              $delete: (option: { query: Methods8['delete']['query'], config?: RequestInit }) =>
                send<Methods8['delete']['resBody']>(f, DELETE, prefix, `${prefix2}${PATH5}`, 'json', option),
              $path: (option?: { method?: 'get'; query: Methods8['get']['query'] } | { method: 'post'; query: Methods8['post']['query'] } | { method: 'put'; query: Methods8['put']['query'] } | { method: 'delete'; query: Methods8['delete']['query'] }) =>
                `${prefix}${prefix2}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          }
        },
        hogeId: (val2: number | string) => {
          const prefix2 = `${PATH3}${val2}`

          return {
            $get: (option?: { config?: RequestInit }) =>
              send<Methods11['get']['resBody']>(f, GET, prefix, `${prefix2}${PATH0}`, 'json', option),
            $path: () => `${prefix}${prefix2}${PATH0}`
          }
        }
      },
      /**
       * 3.1 comment
       */
      $3_1: {
        /**
         * 3.1 get method comment
         * @param option.headers - 3.1 reqHeaders
         */
        $get: (option?: { query?: Methods12['get']['query'], headers?: Methods12['get']['reqHeaders'], config?: RequestInit }) =>
          send<Methods12['get']['resBody']>(f, GET, prefix, PATH7, 'json', option),
        $post: (option: { body?: Methods12['post']['reqBody'], query: Methods12['post']['query'], config?: RequestInit }) =>
          send<Methods12['post']['resBody']>(f, POST, prefix, PATH7, 'json', option, 'URLSearchParams'),
        $path: (option?: { method?: 'get'; query: Methods12['get']['query'] } | { method: 'post'; query: Methods12['post']['query'] }) =>
          `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      articleId_json: (val1: number | string) => {
        const prefix1 = `${PATH2}${val1}.json`

        return {
          $get: (option?: { config?: RequestInit }) =>
            send<Methods13['get']['resBody']>(f, GET, prefix, `${prefix1}${PATH0}`, 'json', option),
          $path: () => `${prefix}${prefix1}${PATH0}`
        }
      },
      users: {
        userId: (val2: string) => {
          const prefix2 = `${PATH8}${val2}`

          return {
            $get: (option: { query: Methods14['get']['query'], headers: Methods14['get']['reqHeaders'], config?: RequestInit }) =>
              send<Methods14['get']['resBody']>(f, GET, prefix, `${prefix2}${PATH0}`, 'json', option),
            $post: (option: { query: Methods14['post']['query'], config?: RequestInit }) =>
              send<Methods14['post']['resBody']>(f, POST, prefix, `${prefix2}${PATH0}`, 'json', option),
            $path: (option?: { method?: 'get'; query: Methods14['get']['query'] } | { method: 'post'; query: Methods14['post']['query'] }) =>
              `${prefix}${prefix2}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      },
      $get: (option?: { query?: Methods5['get']['query'], config?: RequestInit }) =>
        send<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(f, GET, prefix, PATH2, 'json', option),
      $path: (option?: { method?: 'get'; query: Methods5['get']['query'] }) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    v2_0: {
      $get: (option: { query: Methods15['get']['query'], headers: Methods15['get']['reqHeaders'], config?: RequestInit }) =>
        send<Methods15['get']['resBody'], Methods15['get']['resHeaders'], Methods15['get']['status']>(f, GET, prefix, PATH9, 'text', option),
      $path: (option?: { method?: 'get'; query: Methods15['get']['query'] }) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    /**
     * get method comment
     * 
     * @remarks
     * get method remarks comment
     */
    $get: (option?: { query?: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: RequestInit }) =>
      send<Methods0['get']['resBody']>(f, GET, prefix, PATH0, 'formData', option),
    /**
     * @param option.body - body comment
     */
    $post: (option: { body: Methods0['post']['reqBody'], query: Methods0['post']['query'], headers?: Methods0['post']['reqHeaders'], config?: RequestInit }) =>
      send<Methods0['post']['resBody']>(f, POST, prefix, PATH0, 'arrayBuffer', option),
    /**
     * put method comment
     * @param option.query - query comment
     * @returns returns comment
     */
    $put: (option: { query: Methods0['put']['query'], config?: RequestInit }) =>
      send<Methods0['put']['resBody'], Methods0['put']['resHeaders'], Methods0['put']['status']>(f, PUT, prefix, PATH0, 'json', option),
    $delete: (option: { query: Methods0['delete']['query'], config?: RequestInit }) =>
      send<void, Methods0['delete']['resHeaders'], Methods0['delete']['status']>(f, DELETE, prefix, PATH0, 'void', option),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] } | { method: 'post'; query: Methods0['post']['query'] } | { method: 'put'; query: Methods0['put']['query'] } | { method: 'delete'; query: Methods0['delete']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export * from './@constants'
export * from './@types'
export const api = createApi()
