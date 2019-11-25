import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
import About from '../components/About'
import Plan from '../components/Plan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/plan',
      component: Plan
    }
  ]
})