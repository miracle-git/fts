import store from '../redux/store';

export const { dispatch, getState } = store;
export const subscribe = (component) => store.subscribe(() => {
  component.setState(store.getState());
});