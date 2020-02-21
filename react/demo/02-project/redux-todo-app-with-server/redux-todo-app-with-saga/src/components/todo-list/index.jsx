import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../todo-item';
import './index.css';

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    
    return (
      <ul className="todo-list">
        {
          todos.map(item => (
            <TodoItem key={item.id} todo={item}/>
          ))
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps, null)(TodoList);