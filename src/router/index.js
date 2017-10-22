import Vue from 'vue'
import Router from 'vue-router'

import 'owl.carousel/dist/assets/owl.carousel.css'

import $ from 'jquery'

import 'owl.carousel/dist/owl.carousel'
import 'jquery-sticky/jquery.sticky'
import 'magnific-popup/dist/jquery.magnific-popup'
import 'counterup/jquery.counterup'
import 'waypoints/lib/jquery.waypoints'
import 'countdown/countdown'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap'

import '@/assets/js/custom'
import '@/assets/js/plugins'

window.Popper = Popper
window.jQuery = window.$ = $

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: {
        template: require('@/views/home.html')
      }
    }
  ]
})
