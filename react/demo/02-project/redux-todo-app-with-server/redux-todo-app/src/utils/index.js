import axios from 'axios';
import store from '../redux/store';

export const { dispatch, getState } = store;
export const subscribe = (component) => store.subscribe(() => {
  component.setState(store.getState());
});
export const fetch = (url, params = {}, method = 'GET') => {
  return new Promise((resolve, reject) => {
    const _method = method.toUpperCase();
    let _promise, _url = url, _params = '';

    if (_method === 'GET') {
      const keys = Object.keys(params);
      keys.forEach((item, index) => {
        _params += `${item}=${params[item]}`;
        if (index !== keys.length - 1) {
          _params += '&';
        }
      });
      if (_params) {
        _url = `${_url}?${_params}`;
      }
      _promise = axios.get(_url);
    } else if (_method === 'POST') {
      _promise = axios.post(_url, params);
    }

    _promise.then(res => resolve(res.data)).catch(err => reject(err));
  });
};
