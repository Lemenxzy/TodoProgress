import Vue from 'vue'
import Router from 'vue-router'
import Guide from '@/components/private/guide'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'guide',
      component: Guide,
      children:[
        {
          path: '/',
          component: resolve => require(['@/components/private/guide/task/task.vue'], resolve)
        },
        {
          path: '/task',
          component: resolve => require(['@/components/private/guide/task/task.vue'], resolve)
        },
        {
          path: '/taskList',
          component: resolve => require(['@/components/private/guide/tasklist/tasklist.vue'], resolve)
        },
        {
          path: '/willTask',
          component: resolve => require(['@/components/private/guide/willtask/willtask.vue'], resolve)
        },
        {
          path: '/Login',
          component: resolve => require(['@/components/private/guide/login/login.vue'], resolve)
        },
        {
          path: '/Resign',
          component: resolve => require(['@/components/private/guide/resign/resign.vue'], resolve)
        }  
      ]
    }
  ]
})
