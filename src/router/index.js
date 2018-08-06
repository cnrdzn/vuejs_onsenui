import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import PosesPage from '@/components/PosesPage'
import ChakrasPage from '@/components/ChakrasPage'
import MudrasPage from '@/components/MudrasPage'
import TerminologyPage from '@/components/TerminologyPage'
import AboutPage from '@/components/AboutPage'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        title: 'Önsöz'
      }
    }, {
      path: '/poses',
      name: 'PosesPage',
      component: PosesPage,
      meta: {
        title: 'Duruşlar'
      }
    }, {
      path: '/chakras',
      name: 'ChakrasPage',
      component: ChakrasPage,
      meta: {
        title: 'Çakralar'
      }
    }, {
      path: '/mudras',
      name: 'MudrasPage',
      component: MudrasPage,
      meta: {
        title: 'Mudralar'
      }
    }, {
      path: '/terminology',
      name: 'TerminologyPage',
      component: TerminologyPage,
      meta: {
        title: 'Terimler'
      }
    }, {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
      meta: {
        title: 'Hakkında'
      }
    }, {
      path: '*',
      component: PageNotFound,
      meta: {
        title: 'Sayfa Bulunamadı !'
      }
    }],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})
