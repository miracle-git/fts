import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/home'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '',
  //   redirect: Home
  // },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '@/views/admin'),
    children: [
      {
        // path: '/admin/course/:name',
        path: 'course/:name',
        name: 'course-detail',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/detail')
      }
    ],
    meta: {
      auth: true,
      keepAlive: true
    }
    // 独享路由守卫
    // beforeEnter(to, from, next) {
    //   // 是否登录
    //   if (window.isLogin) {
    //     next()
    //   } else {
    //     next(`/login?redirect=${to.fullPath}`)
    //   }
    // }
  },
  {
    path: '/course/:name',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '@/views/detail'),
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/user/login')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "not-found" */ '@/views/not-found')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

// 全局守卫
router.beforeEach((to, from, next) => {
  // 是否需要守卫
  if (to.meta.auth) {
    // 是否登录
    if (store.state.user.isLogin) {
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`)
    }
  } else {
    next()
  }
})

export default router
