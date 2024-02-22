import type { Github } from "./types"
import { searchForRepositories } from "./queries/search-for-repositories"
export const github = { searchForRepositories } as Github
