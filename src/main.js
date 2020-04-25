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

// $(window).resize(() => {
//   let width = 1920; // 设计图尺寸
//   let vW = document.documentElement.clientWidth; // 窗口宽度
//   let rem = vW * 100 / width; 
//   document.documentElement.style.fontSize = rem + 'px';
// });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
