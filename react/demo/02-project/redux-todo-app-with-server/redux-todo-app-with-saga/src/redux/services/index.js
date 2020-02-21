import { fetch }from '../../utils';

// 使用axios
export const getTodoList = () => fetch('/api/todos');
