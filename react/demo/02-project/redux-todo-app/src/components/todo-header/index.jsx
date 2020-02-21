import React from 'react';
import { getState, dispatch, subscribe } from '../../utils';
import { addTodo } from '../../redux/actions';
import './index.css';

export default class TodoHeader extends React.Component {
  state = getState();

  componentWillMount() {
    subscribe(this);
  }

  handleAddTodo(e) {
    if (e.keyCode === 13) {
      const value = e.target.value.trim();
      if (value.length) {
        const { todos } = this.state;
        const todoId = todos.length ? todos[todos.length - 1].id: 0;
        dispatch(addTodo({ id: todoId + 1, name: value, completed: false }));
        e.target.value = '';
      }
    }
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" 
               placeholder="请输入今天的任务清单，按回车键确认"
               onKeyDown={e=>this.handleAddTodo(e)}/>
      </div>
    )
  }
}
