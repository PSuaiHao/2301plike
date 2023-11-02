import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Vant from 'vant';
import 'vant/lib/index.css'

createApp(App).use(Vant).use(ElementPlus).use(store).use(router).mount('#app')
