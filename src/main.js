// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* Bootstrap */
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'owl.carousel'
import 'jquery-sticky'
import 'magnific-popup'
import 'counterup/jquery.counterup'
import 'waypoints/lib/jquery.waypoints'
import 'countdown/countdown'

import '@/assets/js/custom'
import '@/assets/js/plugins'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
