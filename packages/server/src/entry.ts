import 'dotenv/config'
import { Hono } from 'hono'
import { tsRestHandler } from './router'

const app = new Hono()

app.all('/api/*', tsRestHandler())


export default app
