import { defineConfig } from '@tanstack/start/config'
import { resolve } from 'path'

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, './'),
        'components': resolve(__dirname, './components'),
        'utils': resolve(__dirname, './utils'),
        'types': resolve(__dirname, './types'),
        'db': resolve(__dirname, './db'),
      },
    },
  },
  server: {
    preset: 'node-server',
  },
})
