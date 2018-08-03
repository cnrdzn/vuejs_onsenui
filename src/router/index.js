import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

const Foo = { template: `
<h2>Foo</h2>
`}
const Bar = { template: `<div><h2>Page 2</h2><router-link to="/bar/child1">child1</router-link><router-link to="/bar/child2">child2</router-link><router-view></router-view></div>` }
const ChildPageOne = { template: '<h2>Child Page One</h2>' }
const ChildPageTwo = { template: `<div><h2>Child Page Two  <v-ons-button @click="$ons.notification.alert('Hello World!')">
Click me!
</v-ons-button></h2></div>` }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar,
      children: [
        {
          path: 'child1',
          component: ChildPageOne
        },
        {
          path: 'child2',
          component: ChildPageTwo
        }
      ]
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '*',
      component: PageNotFound
    }]
})
