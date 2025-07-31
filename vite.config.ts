import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue()],
<<<<<<< HEAD
  base: '/Deeerain/',
=======
  base: process.env.NODE_ENV === 'production' 
  ? '/Deeerain/'
  : '/',
>>>>>>> 3f42d0f (update ci-cd)
})
