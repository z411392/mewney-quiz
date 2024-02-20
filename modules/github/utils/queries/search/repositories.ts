import { makeRequest } from "../../make-request"
import type { SearchResult } from '~/modules/github/types/github/search-result'
import type { Repository } from '~/modules/github/types/github/search-result/repository'

export const searchForRepositories = async ({ keyword, page = 1 }: { keyword: string, page?: number }, signal?: AbortSignal) => makeRequest<SearchResult<Repository>>('GET', '/search/repositories', { keyword, page }, signal)