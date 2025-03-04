import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './2/_hogeId'
import type { Methods as Methods2 } from './2/_hogeId@number'
import type { Methods as Methods3 } from './2/_hogeId@string/entries.json'
import type { Methods as Methods4 } from './2/_hogeId@string/test-4'
import type { Methods as Methods5 } from './2/_hogeId@string/test-4/_fugaId'
import type { Methods as Methods6 } from './2/_hogeId@string/test-4/fuga aa'
import type { Methods as Methods7 } from './3.1'
import type { Methods as Methods8 } from './_articleId.json'
import type { Methods as Methods9 } from './users/_userId@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1.1'
  const PATH1 = '/v1.1/2'
  const PATH2 = '/entries.json'
  const PATH3 = '/test-4'
  const PATH4 = '/test-4/fuga aa'
  const PATH5 = '/v1.1/3.1'
  const PATH6 = '/v1.1/users'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    $2: {
      _hogeId: (val1: number | string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _hogeId_number: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          $get: (option: { query?: Methods2['get']['query'] | undefined, headers: Methods2['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods2['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      _hogeId_string: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          entries_json: {
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`
          },
          test_4: {
            /**
             * _fugaId comment
             */
            _fugaId: (val3: number | string) => {
              const prefix3 = `${prefix1}${PATH3}/${val3}`

              return {
                $get: (option?: { query?: Methods5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods5['get']['resBody']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $post: (option: { body?: Methods5['post']['reqBody'] | undefined, query: Methods5['post']['query'], config?: T | undefined }) =>
                  fetch<Methods5['post']['resBody']>(prefix, prefix3, POST, option).json().then(r => r.body),
                $put: (option: { query: Methods5['put']['query'], config?: T | undefined }) =>
                  fetch<Methods5['put']['resBody']>(prefix, prefix3, PUT, option).json().then(r => r.body),
                /**
                 * _fugaId delete method
                 * @returns _fugaId resBody
                 */
                $delete: (option: { query: Methods5['delete']['query'], config?: T | undefined }) =>
                  fetch<Methods5['delete']['resBody']>(prefix, prefix3, DELETE, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods5['get']['query'] } | { method: 'post'; query: Methods5['post']['query'] } | { method: 'put'; query: Methods5['put']['query'] } | { method: 'delete'; query: Methods5['delete']['query'] } | undefined) =>
                  `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              }
            },
            fuga_aa: {
              $get: (option: { query: Methods6['get']['query'], config?: T | undefined }) =>
                fetch<Methods6['get']['resBody']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
              $post: (option: { body?: Methods6['post']['reqBody'] | undefined, query: Methods6['post']['query'], config?: T | undefined }) =>
                fetch<Methods6['post']['resBody']>(prefix, `${prefix1}${PATH4}`, POST, option).json().then(r => r.body),
              $put: (option: { query: Methods6['put']['query'], config?: T | undefined }) =>
                fetch<Methods6['put']['resBody']>(prefix, `${prefix1}${PATH4}`, PUT, option).json().then(r => r.body),
              $delete: (option: { body: Methods6['delete']['reqBody'], query: Methods6['delete']['query'], config?: T | undefined }) =>
                fetch<Methods6['delete']['resBody']>(prefix, `${prefix1}${PATH4}`, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods6['get']['query'] } | { method: 'post'; query: Methods6['post']['query'] } | { method: 'put'; query: Methods6['put']['query'] } | { method: 'delete'; query: Methods6['delete']['query'] } | undefined) =>
                `${prefix}${prefix1}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            },
            $get: (option: { query: Methods4['get']['query'], config?: T | undefined }) =>
              fetch(prefix, `${prefix1}${PATH3}`, GET, option).send().then(r => r.body),
            $post: (option?: { body?: Methods4['post']['reqBody'] | undefined, query?: Methods4['post']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch(prefix, `${prefix1}${PATH3}`, POST, option).send().then(r => r.body),
            $put: (option?: { query?: Methods4['put']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods4['put']['resBody']>(prefix, `${prefix1}${PATH3}`, PUT, option).json().then(r => r.body),
            $delete: (option: { query: Methods4['delete']['query'], config?: T | undefined }) =>
              fetch<Methods4['delete']['resBody']>(prefix, `${prefix1}${PATH3}`, DELETE, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods4['get']['query'] } | { method: 'post'; query: Methods4['post']['query'] } | { method: 'put'; query: Methods4['put']['query'] } | { method: 'delete'; query: Methods4['delete']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
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
      $get: (option?: { query?: Methods7['get']['query'] | undefined, headers?: Methods7['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods7['get']['resBody']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $post: (option: { body?: Methods7['post']['reqBody'] | undefined, query: Methods7['post']['query'], config?: T | undefined }) =>
        fetch<Methods7['post']['resBody']>(prefix, PATH5, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods7['get']['query'] } | { method: 'post'; query: Methods7['post']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    _articleId_json: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}.json`

      return {
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods8['get']['resBody']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    users: {
      _userId: (val1: string) => {
        const prefix1 = `${PATH6}/${val1}`

        return {
          $get: (option: { query: Methods9['get']['query'], headers: Methods9['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods9['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $post: (option: { query: Methods9['post']['query'], config?: T | undefined }) =>
            fetch<Methods9['post']['resBody']>(prefix, prefix1, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods9['get']['query'] } | { method: 'post'; query: Methods9['post']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    },
    $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
