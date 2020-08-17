import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/reset.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Index from './views/Index.vue'
Vue.use(ElementUI)
Vue.component("my-header",Header)
Vue.component("my-footer",Footer)
Vue.component("my-index",Index)

axios.default.baseURL="http://127.0.0.1:3000";
Vue.prototype.axios=axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
