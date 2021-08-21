import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'
import persist from '@/plugins/persist'
import user from './user'

Vue.use(Vuex)

const isDev = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: isDev,
  plugins: isDev ? [persist, createLogger()] : [persist],
  modules: {
    user
  }
})
