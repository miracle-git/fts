import storage from 'good-storage'
import { CACHE_KEYS } from '@/config/keys.config'

export default store => {
  const user = storage.get(CACHE_KEYS.loginUser)
  if (user) {
    store.commit('user/login', user.username)
  }
  // 监控用户状态变化，自动存入storage
  store.subscribe((mutation, state) => {
    if (mutation.type === 'user/login') {
      storage.set(CACHE_KEYS.loginUser, state.user)
    } else if (mutation.type === 'user/logout') {
      storage.remove(CACHE_KEYS.loginUser)
    }
  })
}
