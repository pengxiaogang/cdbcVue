import Vue from 'vue'
import Axios from 'axios'
import VueAxios from "vue-axios";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import Qs from 'qs'
// import apiConfig from '@/config/api.config.js'
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAxios,Axios);
Vue.prototype.Qs=Qs;
Vue.use(VueAxios, Axios);
Axios.defaults.baseURL = "/backend";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
