import React from 'react';
import { getState, subscribe } from '../../utils';
import TodoItem from '../todo-item';
import './index.css';

export default class TodoList extends React.Component {
  state = getState();

  componentWillMount() {
    subscribe(this);
  }

  render() {
    const { todos } = this.state;
    
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
