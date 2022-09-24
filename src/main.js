import Vue from 'vue'
import ElementUI from 'element-ui'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import qs from "qs"
Vue.use(ElementUI)
axios.defaults.baseURL = 'http://127.0.0.1:6789'
Vue.prototype.$qs = qs
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
