import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../../redux/actions';
import './index.css';

class TodoItem extends React.Component {
  static propTypes = {
    todo: PropTypes.object.isRequired
  };

  state = {
    showButton: false
  };

  render() {
    const { todo, toggleTodo, removeTodo } = this.props;
    const { showButton } = this.state;
    
    return (
      <li className="todo-item" 
          onMouseOver={()=>this.setState({showButton:true})}
          onMouseOut={()=>this.setState({showButton:false})}>
        <label>
          <input type="checkbox"
                 checked={!!todo.completed}
                 onChange={()=>toggleTodo(todo.id)}/>
          <span>{todo.name}</span>
        </label>
        <button className="btn btn-warning" 
                style={{display:showButton?'block':'none'}}
                onClick={()=>removeTodo(todo.id)}>删除</button>
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (todoId) => dispatch(toggleTodo(todoId)),
  removeTodo: (todoId) => dispatch(removeTodo(todoId))
});

export default connect(null, mapDispatchToProps)(TodoItem);
