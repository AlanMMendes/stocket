import '@fortawesome/fontawesome-free/css/all.min.css'
import 'virtual:uno.css'
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

library.add(faSearch) // Adicione os ícones que deseja usar

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
