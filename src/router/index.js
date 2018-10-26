import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
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
        },
        {
            path: '/notepicker',
            name: 'NotePicker',
            component: () => import('@/components/NotePicker')
        },
        {
            path: '/pitch',
            name: 'Pitch',
            component: () => import('@/components/Pitch')
        }
    ]
})