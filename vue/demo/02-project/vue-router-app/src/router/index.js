import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import About from '@/containers/About'
import News from '@/containers/News'
import Message from '@/containers/Message'
import MessageDetail from '@/containers/MessageDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home', // 注意斜线代表根路径
      component: Home,
      children: [
        { path: 'news', component: News },
        {
          path: 'message',
          component: Message,
          children: [
            { path: 'detail/:id', component: MessageDetail }
          ]
        },
        { path: '', redirect: '/home/news' }
      ]
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
  // linkActiveClass: 'active'
})
