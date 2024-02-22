import { ref, watch, computed } from 'vue';
import github from '~/utils/github/index.ts';
import type { Repository } from '~/utils/github/types/repository';

type Done = (status: 'loading' | 'error' | 'empty' | 'ok') => void; // eslint-disable-line no-unused-vars

export default () => {
  const $keyword = ref('');
  const $page = ref(1);
  const $repositories = ref<Repository[]>([]);
  let abortController: AbortController | undefined;
  const load = async ({ done }: { done: Done }) => {
    if (abortController) {
      abortController.abort();
      abortController = undefined;
    }
    abortController = new AbortController();
    try {
      const { items } = await github.searchForRepositories(
        { keyword: $keyword.value, page: $page.value },
        abortController.signal,
      );
      $repositories.value = [...$repositories.value, ...items];
      if (items.length < 10) return done('empty');
      $page.value += 1;
      return done('ok');
    } catch {
      return done('error');
    }
  };
  const flush = () => {
    $page.value = 1;
    $repositories.value = [];
  };
  watch($keyword, flush);
  const $emptyText = computed(() => {
    if ($repositories.value.length) return '';
    if ($keyword.value) return '沒有更多了 🙈';
    return '要輸入關鍵字才會開始搜尋喔！';
  });
  return {
    $keyword,
    $repositories,
    load,
    $emptyText,
  };
};
