import {
  GET_ALL_TODOS,
  GET_ALL_TODOS_ASYNC,
  ADD_TODO,
  REMOVE_TODO,
  REMOVE_COMPLETED_TODOS,
  TOGGLE_TODO,
  CHECKED_ALL_TODOS
} from '../types';

export const getAllTodosAsync = (todos) => ({
  type: GET_ALL_TODOS_ASYNC,
  payload: todos
});

export const getAllTodos = () => ({
  type: GET_ALL_TODOS
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

export const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  payload: todoId
});

export const removeCompletedTodos = () => ({
  type: REMOVE_COMPLETED_TODOS
});

export const toggleTodo = (todoId) => ({
  type: TOGGLE_TODO,
  payload: todoId
});

export const checkedAllTodos = (checkedAll) => ({
  type: CHECKED_ALL_TODOS,
  payload: checkedAll
});
