import { getRoutes } from './src/routes'

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  devServer: {
    port: Number(process.env.PORT)
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/apollo'
  ],
  css: ['~/assets/styles/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/mixins.scss" as *;'

        }
      }
    }
  },
  hooks: {
    async 'pages:extend' (pages) {
      pages.splice(0, pages.length, ...getRoutes())
    }
  },
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
      pathPrefix: false,
    }
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.GRAPHQL_URI
      }
    },
  }
})
