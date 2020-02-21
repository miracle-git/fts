import { createStore } from 'redux';
import appReducer from '../reducers';

export default createStore(appReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());