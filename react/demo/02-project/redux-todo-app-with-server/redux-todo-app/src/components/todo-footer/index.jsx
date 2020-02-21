import React from 'react';
import { getState, dispatch, subscribe } from '../../utils';
import { removeCompletedTodos, checkedAllTodos } from '../../redux/actions';
import './index.css';

export default class TodoFooter extends React.Component {
  state = getState();

  componentWillMount() {
    subscribe(this);
  }

  render() {
    const { todos, completedCount } = this.state;
    const allTodosChecked = completedCount && completedCount === todos.length;

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"
                 checked={allTodosChecked}
                 onChange={()=>dispatch(checkedAllTodos(allTodosChecked))}/>
          <span>已完成{completedCount}件</span> / 总计{todos.length}件
        </label>
        <button className="btn btn-warning"
                onClick={()=>dispatch(removeCompletedTodos())}>清除已完成任务</button>
      </div>
    )
  }
}
