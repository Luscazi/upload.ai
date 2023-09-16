import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        './src',
        './public',
        path.resolve(__dirname, './node_modules/@ffmpeg/util/dist/esm/index.js'),
        path.resolve(__dirname, './node_modules/@ffmpeg/util/dist/esm/errors.js'),
        path.resolve(__dirname, './node_modules/@ffmpeg/util/dist/esm/const.js'),
        path.resolve(__dirname, './node_modules/@ffmpeg/util/dist/esm/types.js'),

        path.resolve(__dirname, './node_modules/@ffmpeg/ffmpeg/dist/esm/index.js'),
        path.resolve(__dirname, './node_modules/@ffmpeg/ffmpeg/dist/esm/classes.js'),
        path.resolve(__dirname, './node_modules/@ffmpeg/ffmpeg/dist/esm/const.js'),
        path.resolve(__dirname, './node_modules/@ffmpeg/ffmpeg/dist/esm/errors.js'),
        path.resolve(__dirname, './node_modules/@ffmpeg/ffmpeg/dist/esm/types.js'),
        path.resolve(__dirname, './node_modules/@ffmpeg/ffmpeg/dist/esm/utils.js'),
        path.resolve(__dirname, './node_modules/@ffmpeg/ffmpeg/dist/esm/worker.js'),
      ]
    }
  },
  optimizeDeps: {
    exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util']
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
