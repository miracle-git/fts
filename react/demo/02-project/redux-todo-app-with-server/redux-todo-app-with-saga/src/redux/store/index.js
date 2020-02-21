import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appSagas from '../sagas';
import appReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const saga = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(saga));
const store = createStore(appReducer, enhancer);
saga.run(appSagas);

export default store;
