import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '@/components/Home'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Play')
    },
    {
        path: '/notes',
        name: 'Notes',
        component: Home
      }
  ]
})
