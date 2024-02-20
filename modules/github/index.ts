import { defineNuxtModule } from '@nuxt/kit'
import { createResolver, addPlugin, addServerHandler } from '@nuxt/kit'

export default defineNuxtModule({
    async setup(options, nuxt) {
        const { resolve } = createResolver(import.meta.url)
        addPlugin({ src: resolve('./plugins/github.client.ts') })
        addServerHandler({
            route: '/api/github/search/repositories',
            handler: resolve('./server/api/search/repositories.get.ts'),
        })
    }
})
