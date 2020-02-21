import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';
import './index.css';

class TodoHeader extends React.Component {
  handleAddTodo(e) {
    if (e.keyCode === 13) {
      const value = e.target.value.trim();
      if (value.length) {
        const { todos } = this.props;
        const todoId = todos.length ? todos[todos.length - 1].id: 0;
        this.props.addTodo({ id: todoId + 1, name: value, completed: false });
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

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader);
