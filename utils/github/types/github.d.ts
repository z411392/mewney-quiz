import type { SearchResult } from './search-result'
import type { Repository } from './repository'

export type Github = {
    searchForRepositories(params: { keyword: string, page?: number }, signal?: AbortSignal): Promise<SearchResult<Repository>>
}