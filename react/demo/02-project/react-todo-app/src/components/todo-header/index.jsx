import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class TodoHeader extends React.Component {
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired
  };

  handleAddTodo(e) {
    if (e.keyCode === 13) {
      const { onAddTodo } = this.props;
      const value = e.target.value.trim();
      if (value.length) {
        onAddTodo({ name: value, compeleted: false });
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
