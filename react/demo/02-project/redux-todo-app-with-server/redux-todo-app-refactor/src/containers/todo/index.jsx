import React from 'react';
import { connect } from 'react-redux';
import { getTodoList } from '../../redux/services';
import { getAllTodos } from '../../redux/actions';
import TodoHeader from '../../components/todo-header';
import TodoList from '../../components/todo-list';
import TodoFooter from '../../components/todo-footer';
import './index.css';

class TodoPage extends React.Component {
  componentDidMount() {
    this.props.getTodoList();
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

const mapDispatchToProps = (dispatch) => ({
  async getTodoList() {
    const result = await getTodoList();
    if (result.success) {
      dispatch(getAllTodos(result.data));
    }
  }
});

export default connect(null, mapDispatchToProps)(TodoPage);