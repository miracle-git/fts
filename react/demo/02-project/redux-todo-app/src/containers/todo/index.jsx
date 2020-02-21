import React from 'react';
import TodoHeader from '../../components/todo-header';
import TodoList from '../../components/todo-list';
import TodoFooter from '../../components/todo-footer';
import './index.css';

export default () => (
  <div className="todo-container">
    <div className="todo-wrap">
      <TodoHeader/>
      <TodoList/>
      <TodoFooter/>
    </div>
  </div>
);