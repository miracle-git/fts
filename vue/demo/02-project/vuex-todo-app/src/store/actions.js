import { DataStorage } from 'm2-core'
import {
  GET_ALL_TODOS,
  ADD_TODO,
  DELETE_TODO,
  CHECKED_ALL_TODOS,
  CLEAR_COMPLETED_TODOS
} from './types'

export default {
  getAllTodos({ commit }) {
    setTimeout(() => {
      const todos = DataStorage.get('TODO_LIST_DATA') || []
      commit(GET_ALL_TODOS, todos)
    }, 1000)
  },
  addTodo({ commit }, todo) {
    commit(ADD_TODO, todo)
  },
  deleteTodo({ commit }, index) {
    commit(DELETE_TODO, index)
  },
  checkedAllTodos({ commit }, checked) {
    commit(CHECKED_ALL_TODOS, checked)
  },
  clearCompletedTodos({ commit }) {
    commit(CLEAR_COMPLETED_TODOS)
  }
}
