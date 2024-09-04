<template>
  <div class="p-4">
    <Loading v-if="store.loading" />
    <Alert v-if="store.error" type="error" title="Error" :message="store.error.message" />
    <h1 v-if="!store.loading && !store.error" class="text-2xl font-bold mb-4 text-emerald">
      Searching for: {{ itemId }}
    </h1>
    <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="article in store.items?.response?.docs"
        :key="article.uri"
        class="p-4 rounded-lg shadow-md min-w-[280px] min-h-[400px] border border-dotted"
      >
        <div class="min-h-72 flex flex-col gap-2">
          <h2 class="text-lg-1 font-bold text-white">{{ article.headline.main }}</h2>
          <h2 class="text-sm text-white">{{ article.byline.original }}</h2>
          <p class="font-serif text-base">{{ article.abstract }}</p>
        </div>
        <div class="flex flex-row justify-between items-center">
          <div class="order-first">
            <button
              class="rounded-lg underline-transparent font-extralight w-fit py-1.5 px-2 border-dashed text-emerald bg-transparent border border-emerald"
            >
              {{ article.section_name }}
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

<script setup>
import { useSearchStore } from '@/stores/searchNyStore'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Alert from '../../components/Alert/index.vue'
import Loading from '../../components/Loading/index.vue'

const route = useRoute()
const store = useSearchStore()
const userId = ref(route.params.id)
const itemId = route.params.id
store.fetchSearch(itemId)

watch(
  () => route.params.id,
  (newId) => {
    userId.value = newId
    store.fetchSearch(userId)
  },
  { immediate: true }
)
</script>
