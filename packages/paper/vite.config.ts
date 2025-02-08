import path from 'node:path'
import { fileURLToPath } from 'node:url'
import devServer from '@hono/vite-dev-server'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: __dirname,

  plugins: [
    vike({}),
    devServer({
      entry: '../server/src/entry.ts',

      exclude: [
        /^\/@.+$/,
        /.*\.(ts|tsx|vue)($|\?)/,
        /.*\.(s?css|less)($|\?)/,
        /^\/favicon\.ico$/,
        /.*\.(svg|png)($|\?)/,
        /^\/(public|assets|static)\/.+/,
        /^\/node_modules\/.*/,
      ],

      injectClientScript: false,
    }),
    react({}),
  ],

  build: {
    target: 'es2022',
  },

  resolve: {
    alias: {
      '@': new URL('./', import.meta.url).pathname,
    },
  },
})
