import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from 'axios'

createApp(App).use(store).use(router).mount("#app")

app.config.globalProperties.$peticionAxios = axios
window.axios = axios

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//new Vue({
//render: h => h(App),
//}).$mount('#app')
