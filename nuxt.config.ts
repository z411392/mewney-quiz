// https://nuxt.com/docs/api/configuration/nuxt-config

const baseURL = process.env.NODE_ENV === 'production' ? '/mewney-quiz/' : '/'
const origin = process.env.NODE_ENV === 'production' ? 'https://z411392.github.io' : 'http://localhost:3000'
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      origin,
    }
  },
  devtools: { enabled: true },
  webpack: { optimizeCSS: true },
  vite: { build: { chunkSizeWarningLimit: 1600 } },
  build: { transpile: ['vuetify'] },
  app: {
    baseURL,
    head: {
      title: '',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: "data:image/png;base64,iVBORw0KGgo=" },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700' },
      ],
      script: [
        { src: 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver,ResizeObserver,WebAnimations,Object.fromEntries,Array.prototype.at' }
      ],
    },
  },
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    '~/public/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
