<script setup lang="ts">
import useGithubRepositoriesSearcher from '~/composables/app/github-repositories-searcher.ts';

const { $keyword, $repositories, load, $emptyText, $total } = useGithubRepositoriesSearcher();
</script>

<template>
  <v-container density="compact" dense>
    <v-row dense>
      <v-col :cols="12"> 來個 Repo 🤘 </v-col>
    </v-row>
    <v-row dense>
      <v-col :cols="12">
        <v-text-field v-model="$keyword" density="compact" label="輸入關鍵字" hide-details />
      </v-col>
    </v-row>
  </v-container>
  <ClientOnly>
    <v-infinite-scroll
      :key="$keyword"
      :items="$repositories"
      :onLoad="load"
      :empty-text="$emptyText"
      density="compact"
    >
      <v-container>
        <v-row v-show="$keyword && $total">
          <v-col cols="12">一共有 {{ $total }} 筆搜尋結果</v-col>
        </v-row>
        <template
          v-for="(
            { id, full_name, description, html_url, stargazers_count, topics, owner }, index
          ) in $repositories"
          :key="id"
        >
          <v-row dense>
            <v-col :cols="12">
              <v-card density="compact" rounded="2">
                <v-layout>
                  <v-row dense>
                    <v-col cols="auto" :class="$style['beside-avatar']" align-self="center">
                      <v-card-title density="compact">
                        {{ index + 1 }}.
                        <NuxtLink :to="html_url" external target="_blank">{{ full_name }}</NuxtLink>
                      </v-card-title>
                    </v-col>
                    <v-col cols="auto" :class="$style['avatar']">
                      <v-container density="compact" dense>
                        <v-row dense>
                          <v-spacer />
                          <v-col cols="auto">
                            <NuxtLink :to="owner.html_url" external target="_blank">
                              <v-avatar>
                                <v-img :src="owner.avatar_url" />
                              </v-avatar>
                            </NuxtLink>
                          </v-col>
                          <v-spacer />
                        </v-row>
                      </v-container>
                    </v-col>
                  </v-row>
                </v-layout>
                <v-card-subtitle>
                  {{ owner.login }}
                </v-card-subtitle>
                <v-card-text density="compact">
                  {{ description }}
                </v-card-text>
                <v-container density="compact" dense>
                  <v-row dense>
                    <v-col cols="auto" :class="$style['beside-avatar']">
                      <v-card-item>
                        <v-chip-group column>
                          <template v-for="topic in topics" :key="topic">
                            <v-chip variant="elevated" size="small">{{ topic }}</v-chip>
                          </template>
                        </v-chip-group>
                      </v-card-item>
                    </v-col>
                    <v-col cols="auto" :class="$style['avatar']">
                      <v-layout density="compact" dense style="flex-direction: column">
                        <v-row dense>
                          <v-spacer />
                          <v-col cols="auto">
                            <v-icon icon="mdi-star" />
                          </v-col>
                          <v-spacer />
                        </v-row>
                        <v-row dense>
                          <v-spacer />
                          <v-col cols="auto">
                            <v-card-subtitle>
                              {{ stargazers_count }}
                            </v-card-subtitle>
                          </v-col>
                          <v-spacer />
                        </v-row>
                      </v-layout>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-container>
    </v-infinite-scroll>
  </ClientOnly>
</template>

<style scoped module>
.avatar {
  flex-basis: 96px;
}

.beside-avatar {
  flex-basis: calc(100% - 96px);
}
</style>

<style scoped>
.v-card-title {
  @apply whitespace-normal break-all;
}

.v-badge {
  @apply text-center;
}

.v-card-text {
  @apply overflow-hidden line-clamp-3 py-0 break-all my-4;
}
</style>
