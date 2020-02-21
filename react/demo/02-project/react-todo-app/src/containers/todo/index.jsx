import React from 'react';
import TodoHeader from '../../components/todo-header';
import TodoList from '../../components/todo-list';
import TodoFooter from '../../components/todo-footer';
import './index.css';

export default class TodoPage extends React.Component {
  state = {
    todos: [
      { id: 1, name: '学习1小时React', completed: false },
      { id: 2, name: '学习2小时Vue', completed: false },
      { id: 3, name: '学习3小时Angular', completed: false }
    ],
    completedCount: 0
  };

  handleAddTodo(todo) {
    const { todos } = this.state;
    const todoId = todos.length ? todos[todos.length - 1].id: 0;
    todos.push({ ...todo, id: todoId + 1});
    this.setState({ 
      todos
    });
  }

  handleRemoveTodo(todoId) {
    const { todos } = this.state;
    const filterTodos = todos.filter(item => item.id !== todoId);
    const completedTodos = filterTodos.filter(item => item.completed);
    this.setState({ 
      todos: filterTodos, 
      completedCount: completedTodos.length 
    });
  }

  handleRemoveCompletedTodos() {
    const { todos } = this.state;
    const filterTodos = todos.filter(item => !item.completed);
    this.setState({ 
      todos: filterTodos, 
      completedCount: 0 
    });
  }

  handleToggleTodo(todoId) {
    const { todos } = this.state;
    const todo = todos.find(item => item.id === todoId);
    if (todo) {
      todo.completed = !todo.completed;
      const completedTodos = todos.filter(item => item.completed);
      this.setState({ 
        todos, 
        completedCount: completedTodos.length 
      });
    }
  }

  handleCheckedAllTodos(checkedAll) {
    const { todos } = this.state;
    const mapTodos = todos.map(item => ({ ...item, completed: !checkedAll }));
    this.setState({ 
      todos: mapTodos,
      completedCount: checkedAll ? 0 : todos.length
    });
  }

  render() {
    const { todos, completedCount } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <TodoHeader onAddTodo={this.handleAddTodo.bind(this)}/>
          <TodoList todos={todos} 
                    onRemoveTodo={this.handleRemoveTodo.bind(this)}
                    onToggleTodo={this.handleToggleTodo.bind(this)}/>
          <TodoFooter completedCount={completedCount}
                      totalCount={todos.length}
                      onCheckedAllTodos={this.handleCheckedAllTodos.bind(this)}
                      onRemoveCompletedTodos={this.handleRemoveCompletedTodos.bind(this)}/>
        </div>
      </div>
    )
  }
}
