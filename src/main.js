import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/main.scss'
import Input from "@/components/Input";
import Spinner from "@/components/Spinner";

Vue.config.productionTip = false
Vue.component('t-input', Input)
Vue.component('t-spinner', Spinner)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
