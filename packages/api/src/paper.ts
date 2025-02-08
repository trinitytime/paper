import { initContract } from '@ts-rest/core'
import { z } from 'zod'
// import { c } from './contract'

const c = initContract()

export const paper = c.router({
  getList: {
    method: 'GET',
    path: '/paper/list',
    summary: 'Get a paper by id',
    responses: {
      200: z.object({
        demo: z.string(),
      }),
    },
  },
  getPaper: {
    method: 'POST',
    path: '/paper/get',
    summary: 'Get a paper by id',
    body: z.object({
      url: z.string(),
    }),
    responses: {
      200: z.object({
        html: z.string(),
      }),
    },
  },
})
