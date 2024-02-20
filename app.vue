<script setup lang="ts">
const nuxt = useNuxtApp()

onBeforeMount(async () => {
  console.log(await nuxt.$github.searchForRepositories({keyword: 'jquery'}))
})
</script>

<template>
  <div>

  </div>
</template>

<style scoped></style>