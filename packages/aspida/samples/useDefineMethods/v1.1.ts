import { mockMethods } from 'aspida-mock'
import { DefineMethods } from '../../src'

export type Methods = DefineMethods<{
  get: {
    // test
    query?: (
      | {
          aa: number /*
    test { aa }
    */
        }
      | { bb: string[] }
    )[]
    status: 200
    resBody: Array<{ aa: number } | { bb: Array<string> }>
  }
}>

export default mockMethods<Methods>({
  // @ts-expect-error
  get: ({ query }) => (query ? { status: 201, resBody: query } : { status: 403 })
})
