import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import TodoPage from '../todo';
import './index.css';

export default () => {
  return (
    <Provider store={store}>
      <TodoPage/>
    </Provider>
  )
};
