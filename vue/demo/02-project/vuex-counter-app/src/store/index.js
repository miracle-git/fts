import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

const mutations = {
  [types.INCREMENT](state) {
    ++state.count
  },
  [types.DECREMENT](state) {
    --state.count
  }
}

const actions = {
  increment({ commit }) {
    commit(types.INCREMENT)
  },
  decrement({ commit }) {
    commit(types.DECREMENT)
  },
  incrementIfOdd({ commit, state }) {
    if (state.count % 2 === 1) {
      commit(types.INCREMENT)
    }
  },
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit(types.INCREMENT)
    }, 1000)
  }
}

const getters = {
  evenOrOdd(state) {
    return state.count % 2 === 1 ? '奇数' : '偶数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
