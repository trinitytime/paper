import fs from 'node:fs/promises'
import path from 'node:path'
import { contract } from '@paper/api'
import { fetchRequestHandler, tsr } from '@ts-rest/serverless/fetch'
import type { Get, UniversalHandler } from '@universal-middleware/core'
import { FilebasePaper } from './paper'

const paper = new FilebasePaper(path.join(process.cwd(), '../contents'))

/**
 * ts-rest route
 *
 * @link {@see https://ts-rest.com/docs/serverless/fetch-runtimes/}
 **/
const router = tsr.platformContext().router(contract, {
  paper: {
    getList: async ({ query }) => {
      console.log('call getList')

      const list = await paper.getItemList(query.location)

      return {
        status: 200,
        body: {
          list,
        },
      }
    },
    getPaper: async ({ body }, _ctx) => {
      console.log('call getPaper')
      const url = body.url

      console.log(`url: ${url}`)
      const filePath = path.join(process.cwd(), '../contents', url)
      console.log(process.cwd())
      console.log(filePath)

      const html = await fs.readFile(`${filePath}.html`, 'utf-8')

      console.log(html)

      return {
        status: 200,
        body: {
          html,
        },
      }
    },
  },
  // demo: async () => {
  //   return {
  //     status: 200,
  //     body: {
  //       demo: true,
  //     },
  //   }
  // },
  // createTodo: async ({ body }, _ctx) => {
  //   await drizzleQueries.insertTodo(_ctx.db, body.text)
  //   return {
  //     status: 200,
  //     body: {
  //       status: 'Ok',
  //     },
  //   }
  // },
})

export const tsRestHandler = () => async (c) => {
  return fetchRequestHandler({
    request: c.req.raw.clone(),
    contract,
    router,
    options: {},
  })
}

// export const tsRestHandler2: Get<[], UniversalHandler> = () => async (request, ctx, runtime) => {
//   // console.log(typeof request)
//   return fetchRequestHandler({
//     request: new Request(request.url, request),
//     contract,
//     router,
//     options: {},
//     platformContext: {
//       ...ctx,
//       ...runtime,
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } as any,
//   })
// }
