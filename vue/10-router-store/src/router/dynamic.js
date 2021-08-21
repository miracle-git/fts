import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/user/login')
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
  // 判断是否在白名单
  const whiteList = ['/']
  if (whiteList.includes(to.path)) {
    next()
  } else {
    // 是否登录
    if (store.state.user.isLogin) {
      // 是否去登录页
      if (to.path === '/login') {
        next('/')
      } else {
        next()
      }
    } else {
      if (to.path === '/login') {
        next()
      } else {
        next(`/login?redirect=${to.fullPath}`)
      }
    }
  }
})

export const dynamicRoutes = [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '@/views/admin'),
    children: [
      {
        path: 'course/:name',
        name: 'course-detail',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/detail')
      }
    ],
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/course/:name',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '@/views/detail')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "not-found" */ '@/views/not-found')
  }
]

export default router
