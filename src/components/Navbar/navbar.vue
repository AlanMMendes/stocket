<template>
  <nav
    class="font-serif flex flex-col bg-transparent w-full p-10 text-white flex items-center justify-center gap-4"
  >
    <ul class="flex space-x-4 items-center">
      <Dropdown title="U.S" :items="itemsUs" />
      <Dropdown title="World" :items="itemLsWorld" />
      <Dropdown title="Business" :items="itemsBusiness" />
      <Dropdown title="Art" :items="itemsArt" />
    </ul>
    <div class="flex flex-col gap-0.5 w-full justify-center items-center">
      <hr class="border border-ridge w-full border-emerald border-op-40" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from '../Dropdown/dropdown.vue'
const itemsUs = ref([
  { id: 1, name: 'Politics' },
  { id: 2, name: 'Health' },
  { id: 3, name: 'Education' }
]) as any

const itemLsWorld = ref([
  { id: 1, name: 'World' },
  { id: 2, name: 'Canada' },
  { id: 3, name: 'Science' }
]) as any

const itemsBusiness = ref([
  { id: 1, name: 'Business' },
  { id: 2, name: 'Tech' },
  { id: 3, name: 'Economy' }
]) as any

const itemsArt = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
]) as any
</script>

<style scoped></style>
