import { initContract } from '@ts-rest/core'
import { z } from 'zod'

const c = initContract()

export const paper = c.router({
  getList: {
    method: 'GET',
    path: '/paper/list',
    query: z.object({
      location: z.string(),
    }),
    summary: 'Get a list of papers',
    responses: {
      200: z.object({
        list: z.any(),
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
