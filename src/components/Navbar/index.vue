<template>
  <Loading />
  <nav
    class="font-serif flex flex-col bg-transparent p-5 text-white flex items-center justify-center gap-4 w-full"
  >
    <div class="flex flex-auto w-full justify-between">
      <div class="order-first h-8"><Search /></div>
    </div>
    <div class="flex flex-auto w-full justify-between">
      <div class="order-first h-8">{{ formattedDate }}</div>
    </div>

    <div class="flex items-center justify-center w-full gap-2">
      <Dropdown title="Popular" :items="itemsUs" />
      <Dropdown title="News" :items="itemLsWorld" />
      <Dropdown title="Business" :items="itemsBusiness" />
    </div>
    <div class="flex flex-col w-full justify-center items-center">
      <hr class="border border-ridge w-full border-emerald border-op-40 w-full" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from '../Dropdown/dropdown.vue'
import Search from '../Search/index.vue'

const getFullDate = () => {
  const today = new Date()

  // Nome dos dias da semana e meses
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const dayOfWeek = daysOfWeek[today.getDay()] // Nome completo do dia da semana
  const month = months[today.getMonth()] // Nome completo do mês
  const day = today.getDate() // Dia do mês
  const year = today.getFullYear() // Ano

  return `${dayOfWeek}, ${month} ${day}, ${year}`
}
const formattedDate = ref(getFullDate())

const itemsUs = ref([
  { id: 1, name: 'Politics' },
  { id: 2, name: 'Health' },
  { id: 3, name: 'Education' },
  { id: 4, name: 'Obituaries' },
  { id: 6, name: 'Climate' },
  { id: 7, name: 'Weather' },
  { id: 8, name: 'Sports' }
]) as any

const itemLsWorld = ref([
  { id: 1, name: 'World' },
  { id: 2, name: 'Science' },

  { id: 4, name: 'Movies' },
  { id: 5, name: 'Politics' },
  { id: 6, name: 'Food' },
  { id: 7, name: 'Fashion' },
  { id: 8, name: 'Technology' }
]) as any

const itemsBusiness = ref([
  { id: 1, name: 'Business' },
  { id: 3, name: 'Opinion' }
]) as any
</script>

<style scoped></style>
