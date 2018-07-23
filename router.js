/*global Vue*/
import Router from 'vue-router'
import Index from '@/pages/index/index'


Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    
  ]
})
