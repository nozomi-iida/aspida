/* $api.ts was generated by aspida@1.6.3 */
/* eslint-disable */
// prettier-ignore
import type { Methods as Methods0 } from '.'
// prettier-ignore
import type { Methods as Methods1 } from './[sampleId@number].json'
// prettier-ignore
import type { Methods as Methods2 } from './foo%3Abar'
// prettier-ignore
import type { Methods as Methods3 } from './foo%3Abar/[bar_id@string].json'
// prettier-ignore
import type { Methods as Methods4 } from './foo%3Abar/[fooId@number]%40create'
// prettier-ignore
import type { Methods as Methods5 } from './v1.1'
// prettier-ignore
import type { Methods as Methods6 } from './v1.1/2/[hogeId@number]'
// prettier-ignore
import type { Methods as Methods7 } from './v1.1/2/[hogeId@string]/entries.json'
// prettier-ignore
import type { Methods as Methods8 } from './v1.1/2/[hogeId@string]/test-4'
// prettier-ignore
import type { Methods as Methods9 } from './v1.1/2/[hogeId@string]/test-4/[fugaId]'
// prettier-ignore
import type { Methods as Methods10 } from './v1.1/2/[hogeId@string]/test-4/fuga aa'
// prettier-ignore
import type { Methods as Methods11 } from './v1.1/2/[hogeId]'
// prettier-ignore
import type { Methods as Methods12 } from './v1.1/3.1'
// prettier-ignore
import type { Methods as Methods13 } from './v1.1/[articleId].json'
// prettier-ignore
import type { Methods as Methods14 } from './v1.1/users/[userId@string]'
// prettier-ignore
import type { Methods as Methods15 } from './v2.0'

// prettier-ignore
type BasicHeaders = Record<string, string>

// prettier-ignore
type Params = {
  query?: any
  headers?: any
  body?: any
  init?: RequestInit
}

// prettier-ignore
const headersToObject = (headers: Headers): any =>
  [...headers.entries()].reduce((prev, [key, val]) => ({ ...prev, [key]: val }), {})

// prettier-ignore
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

// prettier-ignore
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

// prettier-ignore
const optionToRequest = (
  method: string,
  params?: Params,
  format?: BodyInit
): RequestInit => {
  if (!params) return { method }

  let body
  let headers: BasicHeaders = {}

  switch (format) {
    case undefined:
      break;
    case 'FormData':
      if (typeof FormData !== 'undefined') {
        body = appendDataToFormData(params.body, new FormData())
      } else {
        const formData = new (require('form-data'))()
        body = appendDataToFormData(params.body, formData)
        headers = formData.getHeaders()
      }
      break
    case 'URLSearchParams':
      body = dataToURLString(params.body)
      headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
      break
    case 'ArrayBuffer':
    case 'string':
    case 'Blob':
      body = params.body
      break
    default:
      body = JSON.stringify(params.body)
      headers['Content-Type'] = 'application/json;charset=utf-8'
      break
  }

  return { ...params.init, method, body, headers: { ...headers, ...params.init?.headers, ...params.headers } }
}

// prettier-ignore
type ServerData = { status?: number; headers?: BasicHeaders; body?: any }

// prettier-ignore
type NormalizedResponse<Success extends ServerData, Failure extends ServerData> =
  | { isSuccess: true; stream: Response['body']; data: Success }
  | { isSuccess: false; isFailure: true; stream: Response['body']; data: Failure }
  | { isSuccess: false; isFailure: false; err: Error };

// prettier-ignore
const send = async <Success extends ServerData = { status: number; headers: BasicHeaders }, Failure extends ServerData = { status: number; headers: BasicHeaders }>(
  client: typeof fetch,
  method: string,
  baseURL: string,
  url: string,
  resType: 'json' | 'text' | 'arrayBuffer' | 'blob' | 'formData' | 'void',
  params?: Params,
  format?: BodyInit
): Promise<NormalizedResponse<Success, Failure>> => {
  try {
    const res = await client(
      `${baseURL}${url}${
        params?.query ? `?${dataToURLString(params.query)}` : ''
      }`,
      optionToRequest(method, params, format)
    )

    if (res.ok) {
      return {
        isSuccess: true,
        stream: res.body,
        data: {
          status: res.status,
          headers: headersToObject(res.headers),
          body: resType === 'void' ? undefined : await res[resType](),
        } as Success
      };
    } else {
      return {
        isSuccess: false,
        isFailure: true,
        stream: res.body,
        data: {
          status: res.status,
          headers: headersToObject(res.headers),
        } as Failure
      };
    }
  } catch (err) {
    return {
      isSuccess: false,
      isFailure: false,
      err,
    };
  }
}

/**
 * root comment
 *
 * @remarks
 * root remarks comment
 */
// prettier-ignore
export const createApi = (config?: { baseURL?: string; trailingSlash?: boolean; init?: RequestInit}) => {
  const f = typeof fetch !== 'undefined' ? fetch : require('node-fetch')
  const prefix = (config?.baseURL ?? '').replace(/\/$/, '')
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
        $get: (option?: { init?: RequestInit }) =>
          send<Methods1['get']['res']>(f, GET, prefix, `${prefix0}${PATH0}`, 'json', option),
        $path: () => `${prefix}${prefix0}${PATH0}`
      }
    },
    foo_bar: {
      bar_id_json: (val1: string) => {
        const prefix1 = `${PATH1}${val1}.json`

        return {
          $get: (option?: { init?: RequestInit }) =>
            send<Methods3['get']['res']>(f, GET, prefix, `${prefix1}${PATH0}`, 'text', option),
          $path: () => `${prefix}${prefix1}${PATH0}`
        }
      },
      fooId_create: (val1: number) => {
        const prefix1 = `${PATH1}${val1}@create`

        return {
          $get: (option?: { init?: RequestInit }) =>
            send<Methods4['get']['res']>(f, GET, prefix, `${prefix1}${PATH0}`, 'text', option),
          $path: () => `${prefix}${prefix1}${PATH0}`
        }
      },
      $get: (option?: { init?: RequestInit }) =>
        send<Methods2['get']['res']>(f, GET, prefix, PATH1, 'text', option),
      $path: () => `${prefix}${PATH1}`
    },
    v1_1: {
      $2: {
        hogeId_number: (val2: number) => {
          const prefix2 = `${PATH3}${val2}`

          return {
            $get: (option: Methods6['get']['req'] & { init?: RequestInit }) =>
              send<Methods6['get']['res']>(f, GET, prefix, `${prefix2}${PATH0}`, 'json', option),
            $path: (option?: { method?: 'get'; query: Methods6['get']['req']['query'] }) =>
              `${prefix}${prefix2}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        hogeId_string: (val2: string) => {
          const prefix2 = `${PATH3}${val2}`

          return {
            entries_json: {
              $get: (option?: { init?: RequestInit }) =>
                send<Methods7['get']['res']>(f, GET, prefix, `${prefix2}${PATH4}`, 'json', option),
              $path: () => `${prefix}${prefix2}${PATH4}`
            },
            test_4: {
              /**
               * _fugaId comment
               */
              fugaId: (val4: number | string) => {
                const prefix4 = `${prefix2}${PATH5}${val4}`

                return {
                  $get: (option?: Methods9['get']['req'] & { init?: RequestInit }) =>
                    send<Methods9['get']['res']>(f, GET, prefix, `${prefix4}${PATH0}`, 'json', option),
                  $post: (option: Methods9['post']['req'] & { init?: RequestInit }) =>
                    send<Methods9['post']['res']>(f, POST, prefix, `${prefix4}${PATH0}`, 'json', option),
                  $put: (option: Methods9['put']['req'] & { init?: RequestInit }) =>
                    send<Methods9['put']['res']>(f, PUT, prefix, `${prefix4}${PATH0}`, 'json', option),
                  /**
                   * _fugaId delete method
                   * @returns _fugaId resBody
                   */
                  $delete: (option: Methods9['delete']['req'] & { init?: RequestInit }) =>
                    send<Methods9['delete']['res']>(f, DELETE, prefix, `${prefix4}${PATH0}`, 'json', option),
                  $path: (option?: { method?: 'get'; query: Methods9['get']['req']['query'] } | { method: 'post'; query: Methods9['post']['req']['query'] } | { method: 'put'; query: Methods9['put']['req']['query'] } | { method: 'delete'; query: Methods9['delete']['req']['query'] }) =>
                    `${prefix}${prefix4}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                }
              },
              fuga_aa: {
                $get: (option: Methods10['get']['req'] & { init?: RequestInit }) =>
                  send<Methods10['get']['res']>(f, GET, prefix, `${prefix2}${PATH6}`, 'json', option),
                $post: (option: Methods10['post']['req'] & { init?: RequestInit }) =>
                  send<Methods10['post']['res']>(f, POST, prefix, `${prefix2}${PATH6}`, 'json', option),
                $put: (option: Methods10['put']['req'] & { init?: RequestInit }) =>
                  send<Methods10['put']['res']>(f, PUT, prefix, `${prefix2}${PATH6}`, 'json', option),
                $delete: (option: Methods10['delete']['req'] & { init?: RequestInit }) =>
                  send<Methods10['delete']['res']>(f, DELETE, prefix, `${prefix2}${PATH6}`, 'json', option),
                $path: (option?: { method?: 'get'; query: Methods10['get']['req']['query'] } | { method: 'post'; query: Methods10['post']['req']['query'] } | { method: 'put'; query: Methods10['put']['req']['query'] } | { method: 'delete'; query: Methods10['delete']['req']['query'] }) =>
                  `${prefix}${prefix2}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              },
              $get: (option: Methods8['get']['req'] & { init?: RequestInit }) =>
                send<{}>(f, GET, prefix, `${prefix2}${PATH5}`, 'void', option),
              $post: (option?: Methods8['post']['req'] & { init?: RequestInit }) =>
                send<{}>(f, POST, prefix, `${prefix2}${PATH5}`, 'void', option),
              $put: (option?: Methods8['put']['req'] & { init?: RequestInit }) =>
                send<Methods8['put']['res']>(f, PUT, prefix, `${prefix2}${PATH5}`, 'json', option),
              $delete: (option: Methods8['delete']['req'] & { init?: RequestInit }) =>
                send<Methods8['delete']['res']>(f, DELETE, prefix, `${prefix2}${PATH5}`, 'json', option),
              $path: (option?: { method?: 'get'; query: Methods8['get']['req']['query'] } | { method: 'post'; query: Methods8['post']['req']['query'] } | { method: 'put'; query: Methods8['put']['req']['query'] } | { method: 'delete'; query: Methods8['delete']['req']['query'] }) =>
                `${prefix}${prefix2}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          }
        },
        hogeId: (val2: number | string) => {
          const prefix2 = `${PATH3}${val2}`

          return {
            $get: (option?: { init?: RequestInit }) =>
              send<Methods11['get']['res']>(f, GET, prefix, `${prefix2}${PATH0}`, 'json', option),
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
        $get: (option?: Methods12['get']['req'] & { init?: RequestInit }) =>
          send<Methods12['get']['res']>(f, GET, prefix, PATH7, 'json', option),
        $post: (option: Omit<Methods12['post']['req'], 'format'> & { init?: RequestInit }) =>
          send<Methods12['post']['res']>(f, POST, prefix, PATH7, 'json', option, 'URLSearchParams'),
        $path: (option?: { method?: 'get'; query: Methods12['get']['req']['query'] } | { method: 'post'; query: Methods12['post']['req']['query'] }) =>
          `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      articleId_json: (val1: number | string) => {
        const prefix1 = `${PATH2}${val1}.json`

        return {
          $get: (option?: { init?: RequestInit }) =>
            send<Methods13['get']['res']>(f, GET, prefix, `${prefix1}${PATH0}`, 'json', option),
          $path: () => `${prefix}${prefix1}${PATH0}`
        }
      },
      users: {
        userId: (val2: string) => {
          const prefix2 = `${PATH8}${val2}`

          return {
            $get: (option: Methods14['get']['req'] & { init?: RequestInit }) =>
              send<Methods14['get']['res']>(f, GET, prefix, `${prefix2}${PATH0}`, 'json', option),
            $post: (option: Methods14['post']['req'] & { init?: RequestInit }) =>
              send<Methods14['post']['res']>(f, POST, prefix, `${prefix2}${PATH0}`, 'json', option),
            $path: (option?: { method?: 'get'; query: Methods14['get']['req']['query'] } | { method: 'post'; query: Methods14['post']['req']['query'] }) =>
              `${prefix}${prefix2}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      },
      $get: (option?: Methods5['get']['req'] & { init?: RequestInit }) =>
        send<Methods5['get']['res']>(f, GET, prefix, PATH2, 'json', option),
      $path: (option?: { method?: 'get'; query: Methods5['get']['req']['query'] }) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    v2_0: {
      $get: (option: Methods15['get']['req'] & { init?: RequestInit }) =>
        send<Methods15['get']['res']>(f, GET, prefix, PATH9, 'text', option),
      $path: (option?: { method?: 'get'; query: Methods15['get']['req']['query'] }) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    /**
     * get method comment
     *
     * @remarks
     * get method remarks comment
     */
    $get: (option?: Methods0['get']['req'] & { init?: RequestInit }) =>
      send<Methods0['get']['res']>(f, GET, prefix, PATH0, 'formData', option),
    /**
     * @param option.body - body comment
     */
    $post: (option: Methods0['post']['req'] & { init?: RequestInit }) =>
      send<Methods0['post']['res']>(f, POST, prefix, PATH0, 'arrayBuffer', option),
    /**
     * put method comment
     * @param option.query - query comment
     * @returns returns comment
     */
    $put: (option: Methods0['put']['req'] & { init?: RequestInit }) =>
      send<Methods0['put']['res']>(f, PUT, prefix, PATH0, 'json', option),
    $delete: (option: Methods0['delete']['req'] & { init?: RequestInit }) =>
      send<Methods0['delete']['res']>(f, DELETE, prefix, PATH0, 'void', option),
    $path: (option?: { method?: 'get'; query: Methods0['get']['req']['query'] } | { method: 'post'; query: Methods0['post']['req']['query'] } | { method: 'put'; query: Methods0['put']['req']['query'] } | { method: 'delete'; query: Methods0['delete']['req']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}
