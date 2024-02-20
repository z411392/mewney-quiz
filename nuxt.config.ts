// https://nuxt.com/docs/api/configuration/nuxt-config

const modules: string[] = [
  `./modules/github`,
]

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules,
  webpack: { optimizeCSS: true },
  vite: { build: { chunkSizeWarningLimit: 1600 } },
  build: { transpile: ['vuetify'] },
  app: {
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
