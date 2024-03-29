import makeRequest from '../make-request.ts';
import type { SearchResult, Repository } from '../types';

export default async (
  {
    keyword,
    page = 1,
    itemsPerPage = 10,
  }: { keyword: string; page?: number; itemsPerPage?: number },
  signal?: AbortSignal,
) => {
  // https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-repositories
  // https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories
  // https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api?apiVersion=2022-11-28#changing-the-number-of-items-per-page
  // https://docs.github.com/en/search-github/getting-started-with-searching-on-github/sorting-search-results
  if (!keyword) {
    return {
      total_count: 0,
      incomplete_results: false,
      items: [],
    } as SearchResult<Repository>;
  }
  const conditions = [
    `'${keyword}' in:topics`,
    `'${keyword}' in:description`,
    `'${keyword}' in:name`,
  ].join(' OR ');
  const q = `(${conditions}) sort:stars`;
  return makeRequest<SearchResult<Repository>>(
    'GET',
    '/search/repositories',
    { q, per_page: itemsPerPage, page },
    signal,
  );
};
