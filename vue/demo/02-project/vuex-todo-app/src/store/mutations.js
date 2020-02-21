import {
  GET_ALL_TODOS,
  ADD_TODO,
  DELETE_TODO,
  CHECKED_ALL_TODOS,
  CLEAR_COMPLETED_TODOS
} from './types'

export default {
  [GET_ALL_TODOS](state, payload) {
    state.todos = payload
  },
  [ADD_TODO](state, payload) {
    state.todos.unshift(payload)
  },
  [DELETE_TODO](state, payload) {
    state.todos.splice(payload, 1)
  },
  [CHECKED_ALL_TODOS](state, payload) {
    state.todos = state.todos.map(item => ({ ...item, completed: payload }))
  },
  [CLEAR_COMPLETED_TODOS](state) {
    state.todos = state.todos.filter(item => !item.completed)
  }
}
