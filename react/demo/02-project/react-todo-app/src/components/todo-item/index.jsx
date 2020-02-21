import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class TodoItem extends React.Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired
  };

  state = {
    showButton: false
  };

  render() {
    const { todo, onRemoveTodo, onToggleTodo } = this.props;
    const { showButton } = this.state;

    return (
      <li className="todo-item" 
          onMouseOver={()=>this.setState({showButton:true})}
          onMouseOut={()=>this.setState({showButton:false})}>
        <label>
          <input type="checkbox" 
                 checked={todo.completed}
                 onChange={()=>onToggleTodo(todo.id)}/>
          <span>{todo.name}</span>
        </label>
        <button className="btn btn-warning" 
                style={{display:showButton?'block':'none'}}
                onClick={()=>onRemoveTodo(todo.id)}>删除</button>
      </li>
    )
  }
}
