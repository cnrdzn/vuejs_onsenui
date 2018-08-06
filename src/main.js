// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueOnsen from 'vue-onsenui'

import 'onsenui/css/onsenui.min.css'
import 'onsenui/css/onsen-css-components.min.css'

Vue.use(VueOnsen)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  document.title = `cnr - ${to.meta.title}`
  next()
})
