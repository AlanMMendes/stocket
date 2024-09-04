// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Find from '../views/Find/index.vue'
import Home from '../views/Home/index.vue'
import Section from '../views/Sections/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/section/:id',
    name: 'Section',
    component: Section
  },
  {
    path: '/search/:id',
    name: 'Find',
    component: Find
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
