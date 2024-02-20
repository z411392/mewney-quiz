import { makeRequest } from '../../make-request'
import type { SearchResult } from '~/modules/github/types/github/search-result'
import type { Repository } from '~/modules/github/types/github/search-result/repository'

export const searchForRepositories = ({ keyword, itemsPerPage = 10, page }: { keyword: string, itemsPerPage?: number, page: number }, signal?: AbortSignal) => {
    // https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-repositories
    // https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories
    // https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api?apiVersion=2022-11-28#changing-the-number-of-items-per-page
    // https://docs.github.com/en/search-github/getting-started-with-searching-on-github/sorting-search-results
    if (!keyword) return {
        total_count: 0,
        incomplete_results: false,
        items: []
    } as SearchResult<Repository>
    const q = [
        `"${keyword}" in:topics`,
        `"${keyword}" in:description`,
        `"${keyword}" in:name`,
        'sort:interactions',
    ].join(' or ')
    return makeRequest<SearchResult<Repository>>('GET', '/search/repositories', { q, per_page: itemsPerPage, page }, signal)
}