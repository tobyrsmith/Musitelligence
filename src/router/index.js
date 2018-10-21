import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '@/components/Home'
export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: () => import('@/components/Home')
        },
        {
            path: '/demo',
            name: 'Demo',
            component: () => import('@/components/fur')
        },
        {
            path: '/piano',
            name: 'Piano',
            component: () => import('@/components/PianoPage')
        }
    ]
})