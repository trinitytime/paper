import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import Markdown from './components/Markdown.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('Markdown', Markdown)

app.mount('#app')
