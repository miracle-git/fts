export default {
  namespaced: true,
  state: {
    isLogin: false,
    username: ''
  },
  mutations: {
    login(state, username) {
      state.isLogin = true
      state.username = username
    },
    logout(state) {
      state.isLogin = false
      state.username = ''
    }
  },
  getters: {
    welcome(state) {
      return `您好，${state.username}!`
    }
  },
  actions: {
    login({ commit }, username) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'admin') {
            commit('login', username)
            resolve()
          } else {
            reject('非法用户')
          }
        }, 1000)
      })
    }
  }
}
