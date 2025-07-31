import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ImportMeta } from './src/vite-env'

export default defineConfig({
  plugins: [vue()],
  base: import.meta.env
  ? '/Deeerain/'
  : '/',
})
