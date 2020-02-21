import React from 'react';
import { connect } from 'react-redux';
import { removeCompletedTodos, checkedAllTodos } from '../../redux/actions';
import './index.css';

class TodoFooter extends React.Component {
  render() {
    const { todos, completedCount, checkedAllTodos, removeCompletedTodos } = this.props;
    const allTodosChecked = completedCount && completedCount === todos.length;

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"
                 checked={allTodosChecked}
                 onChange={()=>checkedAllTodos(allTodosChecked)}/>
          <span>已完成{completedCount}件</span> / 总计{todos.length}件
        </label>
        <button className="btn btn-warning"
                onClick={()=>removeCompletedTodos()}>清除已完成任务</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  completedCount: state.completedCount
});

const mapDispatchToProps = (dispatch) => ({
  checkedAllTodos: (checkedAll) => dispatch(checkedAllTodos(checkedAll)),
  removeCompletedTodos: () => dispatch(removeCompletedTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter);