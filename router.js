/*global Vue*/
import Router from 'vue-router'
import Index from '@/components/index/index'
import List from '@/components/list/list'
import Cart from '@/components/cart/cart'
import User from '@/components/user/user'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/list/list',
      name: 'List',
      component: List
    },
    {
      path: '/cart/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/user/user',
      name: 'User',
      component: User
    }
  ]
})
