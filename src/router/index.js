import Vue from 'vue'
import Router from 'vue-router'

// import $ from 'jquery'

import LandingPage from '@/components/pages/landing'

// window.Popper = Popper
// window.jQuery = window.$ = $

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LandingPage
    }
  ]
})
