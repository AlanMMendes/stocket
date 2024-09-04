<template>
  <div class="w-auto h-12" @mouseover="toggleDropdown" @mouseleave="closeDropdown">
    <a
      class="text-emerald flex justify-center items-center py-2 cursor-pointer rounded hover:underline hover:underline-emerald"
    >
      {{ props.title }}

      <svg
        v-if="isDropdownOpen"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        class="animate-rotate-in animate-duration-100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 14l-5-5-5 5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-else
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        class="animate-rotate-in animate-duration-100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 10l5 5 5-5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>

    <div
      v-show="isDropdownOpen"
      class="absolute h-auto py-5 border px-24 rounded-sm left-0 bg-dark-3 text-gray-900 border border-gray-200 shadow-lg w-full flex"
    >
      <div class="flex flex-col h-auto min-h-52 items-start justify-start gap-4 w-full">
        <div class="flex flex-col items-center justify-center gap-4 w-32">
          <h1 class="text-xs text-gray">SECTIONS</h1>
        </div>

        <ul class="list-none text-emerald w-auto grid grid-cols-2 gap-4 grid-content-start">
          <li v-for="item in props.items" :key="item.id">
            <a
              class="underline-transparent hover:underline-emerald text-emerald"
              :href="url(item.name.replace(/\s+/g, ''))"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
const isDropdownOpen = ref(false)
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: ''
  },
  items: {
    type: Array,
    required: true,
    default: () => []
  }
} as any)

const url = (name: string) => {
  return `/section/${name}`
}

const toggleDropdown = () => {
  isDropdownOpen.value = true
}

const closeDropdown = () => {
  setTimeout(() => {
    isDropdownOpen.value = false
  }, 100)
}
</script>

<style scoped></style>
