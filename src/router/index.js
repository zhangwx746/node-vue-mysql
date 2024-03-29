import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { // 重定向
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index/:id?',
      name: 'index',
      // component: () => import('@/pages/index/index')
      component: resolve => require(['@/pages/index/index'], resolve)
    },
    {
      path: '/routerDemo',
      name: 'routerDemo',
      component: resolve => require(['@/pages/routerDemo/routerDemo'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/pages/register/register'], resolve)
    },
    {
      path: '/slotDemo',
      name: 'slotDemo',
      component: resolve => require(['@/pages/slotDemo/slotDemo'], resolve)
    },
    {
      path: '/nextTickDemo',
      name: 'nextTickDemo',
      component: resolve => require(['@/pages/nextTickDemo/nextTickDemo'], resolve)
    },
    {
      path: '/vuexDemo',
      name: ' vuexDemo',
      component: resolve => require(['@/pages/vuexDemo/vuexDemo'], resolve)
    },
    {
      path: '*',
      name: 'notFound',
      component: resolve => require(['@/pages/notFound/notFound'], resolve)
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
// })

export default router
