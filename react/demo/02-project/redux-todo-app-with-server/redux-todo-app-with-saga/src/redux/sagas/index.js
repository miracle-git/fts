import { put, takeEvery } from 'redux-saga/effects';
import { getTodoList } from '../services';
import { getAllTodosAsync } from '../actions';
import { GET_ALL_TODOS } from '../types';

export default function* () {
  yield takeEvery(GET_ALL_TODOS, function* () {
    const result = yield getTodoList();
    if(result.success) {
      yield put(getAllTodosAsync(result.data));
    }
  });
};
