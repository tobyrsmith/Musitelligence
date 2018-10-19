import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from './../components/Home'
import Play from './../components/Play'
export default new Router({
  routes: [
    {
      path: '/',
      name: Home,
      component: Home
    }
  ]
})
