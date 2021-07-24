/* $api.ts was generated by aspida@1.6.3 */
/* eslint-disable */
// prettier-ignore
import type { Methods as Methods0 } from './[hogeId@number]'
// prettier-ignore
import type { Methods as Methods1 } from './[hogeId@string]/entries.json'
// prettier-ignore
import type { Methods as Methods2 } from './[hogeId@string]/test-4'
// prettier-ignore
import type { Methods as Methods3 } from './[hogeId@string]/test-4/[fugaId]'
// prettier-ignore
import type { Methods as Methods4 } from './[hogeId@string]/test-4/fuga aa'
// prettier-ignore
import type { Methods as Methods5 } from './[hogeId]'

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

// prettier-ignore
export const createApi = (config?: { baseURL?: string; trailingSlash?: boolean; init?: RequestInit}) => {
  const f = typeof fetch !== 'undefined' ? fetch : require('node-fetch')
  const prefix = (config?.baseURL ?? '').replace(/\/$/, '')
  const PATH0 = '/v1.1/2/'
  const PATH1 = '/'
  const PATH2 = '/entries.json/'
  const PATH3 = '/test-4/'
  const PATH4 = '/test-4/fuga aa/'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    hogeId_number: (val0: number) => {
      const prefix0 = `${PATH0}${val0}`

      return {
        $get: (option: Methods0['get']['req'] & { init?: RequestInit }) =>
          send<Methods0['get']['res']>(f, GET, prefix, `${prefix0}${PATH1}`, 'json', option),
        $path: (option?: { method?: 'get'; query: Methods0['get']['req']['query'] }) =>
          `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    hogeId_string: (val0: string) => {
      const prefix0 = `${PATH0}${val0}`

      return {
        entries_json: {
          $get: (option?: { init?: RequestInit }) =>
            send<Methods1['get']['res']>(f, GET, prefix, `${prefix0}${PATH2}`, 'json', option),
          $path: () => `${prefix}${prefix0}${PATH2}`
        },
        test_4: {
          /**
           * _fugaId comment
           */
          fugaId: (val2: number | string) => {
            const prefix2 = `${prefix0}${PATH3}${val2}`

            return {
              $get: (option?: Methods3['get']['req'] & { init?: RequestInit }) =>
                send<Methods3['get']['res']>(f, GET, prefix, `${prefix2}${PATH1}`, 'json', option),
              $post: (option: Methods3['post']['req'] & { init?: RequestInit }) =>
                send<Methods3['post']['res']>(f, POST, prefix, `${prefix2}${PATH1}`, 'json', option),
              $put: (option: Methods3['put']['req'] & { init?: RequestInit }) =>
                send<Methods3['put']['res']>(f, PUT, prefix, `${prefix2}${PATH1}`, 'json', option),
              /**
               * _fugaId delete method
               * @returns _fugaId resBody
               */
              $delete: (option: Methods3['delete']['req'] & { init?: RequestInit }) =>
                send<Methods3['delete']['res']>(f, DELETE, prefix, `${prefix2}${PATH1}`, 'json', option),
              $path: (option?: { method?: 'get'; query: Methods3['get']['req']['query'] } | { method: 'post'; query: Methods3['post']['req']['query'] } | { method: 'put'; query: Methods3['put']['req']['query'] } | { method: 'delete'; query: Methods3['delete']['req']['query'] }) =>
                `${prefix}${prefix2}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          fuga_aa: {
            $get: (option: Methods4['get']['req'] & { init?: RequestInit }) =>
              send<Methods4['get']['res']>(f, GET, prefix, `${prefix0}${PATH4}`, 'json', option),
            $post: (option: Methods4['post']['req'] & { init?: RequestInit }) =>
              send<Methods4['post']['res']>(f, POST, prefix, `${prefix0}${PATH4}`, 'json', option),
            $put: (option: Methods4['put']['req'] & { init?: RequestInit }) =>
              send<Methods4['put']['res']>(f, PUT, prefix, `${prefix0}${PATH4}`, 'json', option),
            $delete: (option: Methods4['delete']['req'] & { init?: RequestInit }) =>
              send<Methods4['delete']['res']>(f, DELETE, prefix, `${prefix0}${PATH4}`, 'json', option),
            $path: (option?: { method?: 'get'; query: Methods4['get']['req']['query'] } | { method: 'post'; query: Methods4['post']['req']['query'] } | { method: 'put'; query: Methods4['put']['req']['query'] } | { method: 'delete'; query: Methods4['delete']['req']['query'] }) =>
              `${prefix}${prefix0}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          $get: (option: Methods2['get']['req'] & { init?: RequestInit }) =>
            send<{}>(f, GET, prefix, `${prefix0}${PATH3}`, 'void', option),
          $post: (option?: Methods2['post']['req'] & { init?: RequestInit }) =>
            send<{}>(f, POST, prefix, `${prefix0}${PATH3}`, 'void', option),
          $put: (option?: Methods2['put']['req'] & { init?: RequestInit }) =>
            send<Methods2['put']['res']>(f, PUT, prefix, `${prefix0}${PATH3}`, 'json', option),
          $delete: (option: Methods2['delete']['req'] & { init?: RequestInit }) =>
            send<Methods2['delete']['res']>(f, DELETE, prefix, `${prefix0}${PATH3}`, 'json', option),
          $path: (option?: { method?: 'get'; query: Methods2['get']['req']['query'] } | { method: 'post'; query: Methods2['post']['req']['query'] } | { method: 'put'; query: Methods2['put']['req']['query'] } | { method: 'delete'; query: Methods2['delete']['req']['query'] }) =>
            `${prefix}${prefix0}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    },
    hogeId: (val0: number | string) => {
      const prefix0 = `${PATH0}${val0}`

      return {
        $get: (option?: { init?: RequestInit }) =>
          send<Methods5['get']['res']>(f, GET, prefix, `${prefix0}${PATH1}`, 'json', option),
        $path: () => `${prefix}${prefix0}${PATH1}`
      }
    }
  }
}
