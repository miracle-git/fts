export default {
  totalCount(state) {
    return state.todos.length
  },
  completedCount(state) {
    return state.todos.filter(item => item.completed).length
  },
  checkAll(state, getters) {
    return getters.totalCount > 0 && getters.completedCount === getters.totalCount
  }
}
