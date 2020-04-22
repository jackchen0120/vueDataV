import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from "axios";
import vueParticles from 'vue-particles'
import Vcomp from './components/index'
import Toast from './components/toast'
import $ from 'jquery'

import '@/assets/styles/base.scss'
import '@/assets/iconfont/iconfont.css'

Vue.use(vueParticles)
Vue.use(Vcomp)

Vue.config.productionTip = false

Vue.prototype.$Axios = Axios
Vue.prototype.$Toast = Toast

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
