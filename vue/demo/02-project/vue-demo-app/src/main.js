import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from '@/app'
import router from '@/router'
import 'ant-design-vue/dist/antd.min.css'

Vue.use(Antd)
Vue.config.productinTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
