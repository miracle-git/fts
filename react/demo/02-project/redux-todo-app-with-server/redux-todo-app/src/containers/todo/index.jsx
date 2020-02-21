import React from 'react';
import { dispatch } from '../../utils';
import { getTodoList } from '../../redux/services';
import { getAllTodos } from '../../redux/actions';
import TodoHeader from '../../components/todo-header';
import TodoList from '../../components/todo-list';
import TodoFooter from '../../components/todo-footer';
import './index.css';

export default class TodoPage extends React.Component {

  async getData() {
    const result = await getTodoList();
    if (result.success) {
      dispatch(getAllTodos(result.data));
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <TodoHeader/>
          <TodoList/>
          <TodoFooter/>
        </div>
      </div>
    );
  }
}
