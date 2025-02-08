import 'dotenv/config'
// import { authjsHandler, authjsSessionMiddleware } from './server/authjs-handler'

import { createHandler, createMiddleware } from '@universal-middleware/hono'
import { Hono } from 'hono'
import { tsRestHandler } from './router'
// import { dbMiddleware } from './server/db-middleware'
// import { tsRestHandler } from './server/ts-rest-handler'
import { vikeHandler } from './vike-handler'

const app = new Hono()

// app.use(createMiddleware(dbMiddleware)())

// app.use(createMiddleware(authjsSessionMiddleware)())

/**
 * Auth.js route
 * @link {@see https://authjs.dev/getting-started/installation}
 **/
// app.use('/api/auth/**', createHandler(authjsHandler)())

// app.all('/api/*', createHandler(tsRestHandler)())
app.all('/api/*', tsRestHandler())

// app.get('/', (c) => c.text('Hello World'))

/**
 * Vike route
 *
 * @link {@see https://vike.dev}
 **/
app.all('*', createHandler(vikeHandler)())

export default app
