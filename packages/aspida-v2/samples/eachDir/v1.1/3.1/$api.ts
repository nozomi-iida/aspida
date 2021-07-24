/* $api.ts was generated by aspida@1.6.3 */
/* eslint-disable */
// prettier-ignore
import type { Methods as Methods0 } from '.'

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
 * 3.1 comment
 */
// prettier-ignore
export const createApi = (config?: { baseURL?: string; trailingSlash?: boolean; init?: RequestInit}) => {
  const f = typeof fetch !== 'undefined' ? fetch : require('node-fetch')
  const prefix = (config?.baseURL ?? '').replace(/\/$/, '')
  const PATH0 = '/v1.1/3.1/'
  const GET = 'GET'
  const POST = 'POST'

  return {
    /**
     * 3.1 get method comment
     * @param option.headers - 3.1 reqHeaders
     */
    $get: (option?: Methods0['get']['req'] & { init?: RequestInit }) =>
      send<Methods0['get']['res']>(f, GET, prefix, PATH0, 'json', option),
    $post: (option: Omit<Methods0['post']['req'], 'format'> & { init?: RequestInit }) =>
      send<Methods0['post']['res']>(f, POST, prefix, PATH0, 'json', option, 'URLSearchParams'),
    $path: (option?: { method?: 'get'; query: Methods0['get']['req']['query'] } | { method: 'post'; query: Methods0['post']['req']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}
