import store from './../Store/store';

class DispatchController {
  static values = {
    increment: value => {
      store.dispatch({
        type: 'increment',
        payload: value,
      });
    },
    decrement: value => {
      store.dispatch({
        type: 'decrement',
        payload: value,
      });
    },
  };

  static event = {
    insert: value =>
      store.dispatch({
        type: 'insertion',
        payload: value,
      }),
    delete: value =>
      store.dispatch({
        type: 'deletion',
        payload: value,
      }),
  };
}

export default DispatchController;
