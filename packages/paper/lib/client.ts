import { contract } from '@paper/api'
import { initClient } from '@ts-rest/core'

/**
 * ts-rest client
 *
 * This is the basic client, using fetch under the hood which is exported from @ts-rest/core
 * @link {@see https://ts-rest.com/docs/core/fetch/}
 **/
export const client = initClient(contract, {
  baseUrl: 'http://localhost:3000',
  baseHeaders: {},
})
