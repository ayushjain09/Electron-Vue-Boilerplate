import { createApp } from 'vue'
import App from './App.vue'
import store from './Renderer/store/index.js'
import router from './Renderer/router/index.js'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
