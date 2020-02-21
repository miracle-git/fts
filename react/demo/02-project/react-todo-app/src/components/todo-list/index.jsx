import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todo-item';
import './index.css';

export default class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired
  };

  render() {
    const { todos, onRemoveTodo, onToggleTodo } = this.props;

    return (
      <ul className="todo-list">
        {
          todos.map(item => (
            <TodoItem key={item.id} 
                      todo={item} 
                      onRemoveTodo={onRemoveTodo}
                      onToggleTodo={onToggleTodo}/>
          ))
        }
      </ul>
    )
  }
}
