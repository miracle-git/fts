import { fetch }from '../../utils';
import { getAllTodos } from '../actions';

// 使用redux-thunk
export const getTodoList = () => async (dispatch) => {
  const result = await fetch('/api/todos');
  if(result.success) {
    dispatch(getAllTodos(result.data));
  }
};
