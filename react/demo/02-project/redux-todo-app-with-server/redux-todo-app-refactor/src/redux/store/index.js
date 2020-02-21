import { createStore } from 'redux';
import appReducer from '../reducers';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(appReducer, enhancer);
export default store;
