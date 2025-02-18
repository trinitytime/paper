import { initContract } from '@ts-rest/core'
import { paper } from './paper'

const c = initContract()

export const contract = c.router(
  {
    paper,
    // ...paper,
    // demo: {
    //   method: "GET",
    //   path: "/demo",
    //   responses: {
    //     200: c.type<{ demo: boolean }>(),
    //   },
    // },
    // createTodo: {
    //   method: "POST",
    //   path: "/todo/create",
    //   body: c.type<{ text: string }>(),
    //   responses: {
    //     200: c.type<{ status: string }>(),
    //   },
    //   summary: "Create a Todo",
    // },
  },
  {
    pathPrefix: '/api',
  },
)
