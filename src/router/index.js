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
        },
        {
            path: '/schedule',
            name: 'Schedule',
            component: () => import('@/components/Schedule')
        },
        {
            path: '/LearnMenu',
            name: 'LearnMenu',
            component: () => import('@/components/LearnMenu')
        },
        {
            path: '/testsetup',
            name: 'Test Setup',
            component: () => import('@/components/TestSetup')
        },
        {
            path: '/test',
            name: 'Test',
            component: () => import('@/components/Test')
        },
        {
            path: '/mainmenu',
            name: 'mainmenu',
            component: () => import('@/components/MainMenu')
        },
    ]
})