import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from '@/components/pages/landing'

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
