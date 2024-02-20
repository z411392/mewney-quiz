import type { SearchResult } from '~/modules/github/types/github/search-result'
import type { Repository } from '~/modules/github/types/github/search-result/repository'

export type Github = {
    searchForRepositories(params: { keyword: string, page?: number }, signal?: AbortSignal): Promise<SearchResult<Repository>>
}