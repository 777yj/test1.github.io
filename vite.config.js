import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// vue.config.js

// 基本路径根据当前是生产环境还是开发环境来判断
// let BASE_URL = process.env.NODE_ENV === 'production' ? '/vue-mlhh/' : '/'



// https://vite.dev/config/
export default defineConfig({
  
  // publicPath: BASE_URL,
  plugins: [
    vue(),
    vueDevTools(),
     AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  base:'test1.github.io',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

