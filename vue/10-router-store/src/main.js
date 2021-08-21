import Vue from 'vue'
import App from './views/app.vue'
import filters from './filters'
import router from './router/dynamic'
import store from './store'

Vue.config.productionTip = false
// 注册全局过滤器
filters.map(item => Vue.filter(item.name, item.rule))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
