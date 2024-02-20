import type { Github } from '../../types/github'
import { searchForRepositories } from './queries/search/repositories'
export const github = { searchForRepositories } as Github