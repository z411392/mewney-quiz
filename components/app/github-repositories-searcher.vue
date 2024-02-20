<script setup lang="ts">
import { useGithubRepositoriesSearcher } from '~/composables/app/github-repositories-searcher'
const {
    $keyword,
    $repositories,
    load,
    $emptyText,
} = useGithubRepositoriesSearcher()
</script>

<template>
    <v-container density="compact" dense>
        <v-row dense>
            <v-col :cols="12">
                來個 Repo 🤘
            </v-col>
        </v-row>
        <v-row dense>
            <v-col :cols="12">
                <v-text-field density="compact" label="輸入關鍵字" v-model="$keyword" hide-details />
            </v-col>
        </v-row>
    </v-container>
    <v-infinite-scroll :key="$keyword" :items="$repositories" :onLoad="load" :empty-text="$emptyText" density="compact">
        <v-container>
            <template
                v-for="{ id, full_name, description, html_url, stargazers_count, topics, owner }, index in $repositories"
                :key="id">
                <v-row>
                    <v-col :cols="12">
                        <v-card density="compact" rounded="2">
                            <v-layout>
                                <v-row dense>
                                    <v-col cols="auto" :class="$style['beside-avatar']">
                                        <v-card-title density="compact">
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
                                                <template v-for="topic in topics">
                                                    <v-chip variant="elevated" size="small">{{ topic }}</v-chip>
                                                </template>
                                            </v-chip-group>
                                        </v-card-item>
                                    </v-col>
                                    <v-col cols="auto" :class="$style['avatar']">
                                        <v-container density="compact" dense>
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
                                                    {{ stargazers_count }}
                                                </v-col>
                                                <v-spacer />
                                            </v-row>
                                        </v-container>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
            </template>
        </v-container>
    </v-infinite-scroll>
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
</style>