/*global Vue*/
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Task from '@/pages/task/task'
import User from '@/pages/user/user'
import Setting from '@/pages/user/setting'


Vue.use(Router)

module.exports = new Router({
  routes: [
    {path: '/', component: User},
    {path: '/task', component: Task},
    {path: '/user', component: User},
    {path: '/setting', component: Setting},
  ]
})
