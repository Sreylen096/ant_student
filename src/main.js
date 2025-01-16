import './assets/theme.css'
import './assets/main.css'
import './assets/fonts/feather/feather.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { flatpickrDirective } from './directives/flatpickrDirective'
import axios from 'axios'

import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap'

axios.defaults.baseURL = `${import.meta.env.VITE_API_HOST}/${import.meta.env.VITE_API_VERSION}`
const app = createApp(App)
app.use(createPinia())
app.directive('flatpickr', flatpickrDirective)
app.use(router)
app.mount('#app')
