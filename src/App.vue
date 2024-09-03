<script setup lang="ts">
import { onMounted } from 'vue'
import Navbar from './components/navbar/navbar.vue'
import { useNytStore } from './stores/nyyStore'

const nytStore = useNytStore() as any

onMounted(() => {
  nytStore.fetchArticles()
  nytStore.fetchArticlesByTopic()
})
</script>

<template>
  <Navbar />
  <div class="flex flex-row">
    <div v-if="nytStore.loading">Loading...</div>
    <div v-if="nytStore.error">Error: {{ nytStore.error.message }}</div>

    <div
      v-if="!nytStore.loading && !nytStore.error"
      class="font-serif flex flex-row flex-wrap gap-4 border border-solid border-t-0 border-l-0 p-4 justify-center"
    >
      <div
        v-for="article in nytStore.articles"
        :key="article.uri"
        class="max-w-96 flex flex-col gap-2 border border-dashed border-op-40 border-gray-300 rounded-lg p-4 shadow-md"
      >
        <div class="min-h-54 flex flex-col gap-2">
          <h2 class="text-2xl font-bold text-white">{{ article.title }}</h2>
          <p class="font-serif">{{ article.abstract }}</p>
        </div>

        <div class="flex flex-row justify-between items-center">
          <div class="order-first">
            <button
              class="rounded-lg underline-transparent font-extralight w-fit py-1.5 px-2 border-dashed text-emerald bg-transparent border border-emerald"
            >
              {{ article.section }}
            </button>
          </div>
          <div class="order-last">
            <a
              :href="article.url"
              class="rounded-lg underline-transparent font-extralight w-fit py-1.5 px-2 border-solid text-emerald bg-transparent border border-emerald hover:bg-emerald hover:text-black cursor-pointer"
            >
              Read more</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
