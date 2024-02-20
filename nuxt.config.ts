// https://nuxt.com/docs/api/configuration/nuxt-config

const modules: string[] = [
  `./modules/github`,
]

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules,
})
