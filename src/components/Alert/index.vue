<template>
  <div
    v-if="visible"
    :class="alertClass"
    class="absolute top-2 right-2 p-4 rounded shadow-md flex items-center space-x-2"
  >
    <span class="font-semibold">{{ title }}</span>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
// Props
const props = defineProps({
  type: {
    type: String,
    default: 'info'
  },
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 5000 // 5 seconds
  }
})

// State
const visible = ref(true)
const router = useRouter()

// Computed class based on type
const alertClass = computed(() => {
  switch (props.type) {
    case 'success':
      return 'bg-green-100 text-green-800 border border-green-300'
    case 'error':
      return 'bg-red-100 text-red-800 border border-red-300'
    case 'warning':
      return 'bg-yellow-100 text-yellow-800 border border-yellow-300'
    default:
      return 'bg-blue-100 text-blue-800 border border-blue-300'
  }
})

// Auto close after a duration
setTimeout(() => {
  visible.value = false
  if (props.type === 'error') {
    router.push('/')
  }
}, props.duration)
</script>

<style scoped>
/* Optional styles, e.g., adding transition effects */
</style>
