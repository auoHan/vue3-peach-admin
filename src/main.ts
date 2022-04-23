import App from './App.vue'
import piniaPluginPersist from 'pinia-plugin-persist'
import router from '@/router'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersist)
app.use(pinia)
app.use(router)
app.mount('#app')
