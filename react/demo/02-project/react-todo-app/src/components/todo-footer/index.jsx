import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class TodoFooter extends React.Component {
  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    onCheckedAllTodos: PropTypes.func.isRequired,
    onRemoveCompletedTodos: PropTypes.func.isRequired
  };

  render() {
    const { completedCount, totalCount, onCheckedAllTodos, onRemoveCompletedTodos } = this.props;
    const allTodosChecked = completedCount === totalCount;

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"
                 checked={allTodosChecked}
                 onChange={()=>onCheckedAllTodos(allTodosChecked)}/>
          <span>已完成{completedCount}件</span> / 总计{totalCount}件
        </label>
        <button className="btn btn-warning"
                onClick={()=>onRemoveCompletedTodos()}>清除已完成任务</button>
      </div>
    )
  }
}
