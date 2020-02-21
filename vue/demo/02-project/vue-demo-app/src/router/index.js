import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', name: '主页', component: Home },
    { path: '/1.1', name: 'Vue三大核心概念(属性、事件、插槽)', component: () => import('@/views/1.1') },
    { path: '/1.2', name: '双向绑定和单向数据流不冲突', component: () => import('@/views/1.2') },
    { path: '/1.3', name: '虚拟DOM', component: () => import('@/views/1.3') },
    { path: '/1.4', name: '如何触发组件的更新', component: () => import('@/views/1.4') },
    { path: '/1.5', name: '合理应用计算属性和监听器', component: () => import('@/views/1.5') },
    { path: '/1.6', name: '生命周期的应用场景和函数式组件', component: () => import('@/views/1.6') },
    { path: '/1.7', name: '指令的本质', component: () => import('@/views/1.7') },
    { path: '/1.8', name: '跨组件间通信', component: () => import('@/views/1.8') }
  ]
})
