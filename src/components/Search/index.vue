<template>
  <div class="relative flex flex-row h-auto w-full gap-1">
    <div>
      <button
        class="h-8 w-8 rounded-lg bg-emerald border border-dotted hover:scale-95 cursor-pointer"
        @click="toggleSearch"
      >
        <font-awesome-icon class="text-black hover:text-white" icon="search" />
      </button>
    </div>
    <div v-show="isSearchOpen" class="flex flex-row gap-1">
      <input
        class="px-2 h-8 w-auto rounded-lg bg-white border border-dotted"
        v-model="searchQuery"
        placeholder="Search..."
      />
      <button
        class="h-8 w-8 cursor-pointer text-white hover:text-emerald rounded-lg border border-emerald bg-transparent border border-solid hover:scale-95"
        @click="search"
      >
        GO
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const searchQuery = ref('')
const isSearchOpen = ref(false)
const router = useRouter()

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
}
const search = () => {
  router.push(`/search/${searchQuery.value}`)
}
</script>

<style scoped>
input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 0.5rem;
}
</style>
