import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'

createApp(App)
.use(router)
.use(store)
.mount('#app')
