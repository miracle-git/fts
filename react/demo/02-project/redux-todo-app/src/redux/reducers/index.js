import { 
  ADD_TODO, 
  REMOVE_TODO, 
  REMOVE_COMPLETED_TODOS, 
  TOGGLE_TODO, 
  CHECKED_ALL_TODOS 
} from '../types';

const initialState = {
  todos: [
    { id: 1, name: '学习1小时React', completed: false },
    { id: 2, name: '学习2小时Vue', completed: false },
    { id: 3, name: '学习3小时Angular', completed: false }
  ],
  completedCount: 0
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  const { todos } = newState;
  if (action.type === ADD_TODO) {
    todos.push(action.payload);
    return { ...state, ...newState };
  } else if (action.type === REMOVE_TODO) {
    const filterTodos = todos.filter(item => item.id !== action.payload);
    const completedTodos = filterTodos.filter(item => item.completed);
    return { ...state, ...{
      todos: filterTodos,
      completedCount: completedTodos.length
    }};
  } else if (action.type === REMOVE_COMPLETED_TODOS) {
    let filterTodos = todos.filter(item => !item.completed);
    return { ...state, ...{
      todos: filterTodos,
      completedCount: 0
    }};
  } else if (action.type === TOGGLE_TODO) {
    const todo = todos.find(item => item.id === action.payload);
    todo.completed = !todo.completed;
    const completedTodos = todos.filter(item => item.completed);
    return { ...state, ...{
      todos,
      completedCount: completedTodos.length
    }};
  } else if (action.type === CHECKED_ALL_TODOS) {
    const mapTodos = todos.map(item => ({ ...item, completed: !action.payload }));
    return { ...state, ...{
      todos: mapTodos,
      completedCount: action.payload ? 0 : todos.length
    }};
  } else {
    return state;
  }
};