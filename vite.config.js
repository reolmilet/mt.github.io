import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import px2rem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [autoprefixer(), px2rem({ rootValue: 75, unitPrecision: 5, propList: ['*'] })]
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
})
