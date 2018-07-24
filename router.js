/*global Vue*/
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Task from '@/pages/task/task'
import User from '@/pages/user/user'


Vue.use(Router)

module.exports = new Router({
  routes: [
    {path: '/', component: Index},
    {path: '/task', component: Task},
    {path: '/user', component: User},
  ]
})
