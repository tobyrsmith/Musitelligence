/* eslint-disable */
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import { VTooltip } from 'v-tooltip'

VTooltip.options.defaultTemplate =
  '<div class="foo" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'

Vue.use(Vuetify)
Vue.config.productionTip = false

import Home from './components/Home'
import Play from './components/Play'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})