import type { Github } from "~/modules/github/types/github"

declare module '#app' {
    interface NuxtApp {
        $github: Github
    }
}