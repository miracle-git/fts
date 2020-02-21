import React from 'react';
import PropTypes from 'prop-types';
import { dispatch } from '../../utils';
import { toggleTodo, removeTodo } from '../../redux/actions';
import './index.css';

export default class TodoItem extends React.Component {
  static propTypes = {
    todo: PropTypes.object.isRequired
  };

  state = {
    showButton: false
  };

  render() {
    const { todo } = this.props;
    const { showButton } = this.state;
    
    return (
      <li className="todo-item" 
          onMouseOver={()=>this.setState({showButton:true})}
          onMouseOut={()=>this.setState({showButton:false})}>
        <label>
          <input type="checkbox"
                 checked={!!todo.completed}
                 onChange={()=>dispatch(toggleTodo(todo.id))}/>
          <span>{todo.name}</span>
        </label>
        <button className="btn btn-warning" 
                style={{display:showButton?'block':'none'}}
                onClick={()=>dispatch(removeTodo(todo.id))}>删除</button>
      </li>
    )
  }
}
