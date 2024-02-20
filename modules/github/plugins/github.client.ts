import type { Plugin } from "nuxt/app"
import { github } from "../utils"

export default defineNuxtPlugin(async () => {
    return {
        provide: {
            github,
        }
    }
}) as Plugin