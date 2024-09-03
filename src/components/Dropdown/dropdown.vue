<template>
  <div class="w-20" @mouseover="toggleDropdown" @mouseleave="closeDropdown">
    <a
      class="text-emerald py-2 cursor-pointer rounded hover:underline hover:underline-emerald justify-center items-center flex"
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
      class="absolute h-54 py-2 px-24 rounded-sm left-0 bg-dark-3 text-gray-900 border border-gray-200 shadow-lg w-full items-center flex"
    >
      <div class="flex flex-col items-start justify-start gap-4">
        <ul class="list-none text-emerald w-32 flex flex-col gap-2">
          <h1 class="text-xs text-gray">SECTIONS</h1>
          <li v-for="item in props.items" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

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

const isDropdownOpen = ref(false)

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
