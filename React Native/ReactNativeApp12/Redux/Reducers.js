import produce from 'immer';

export const initialState = {
  counter: [{id: 0, name: 'Todo', value: 0}],
};

const Reducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case 'increment':
      return produce(state, draftState => {
        let temp = draftState.counter.findIndex(
          event => event.id == action.payload,
        );
        draftState.counter[temp].value++;
      });
    case 'decrement':
      return produce(state, draftState => {
        let temp = draftState.counter.findIndex(
          event => event.id == action.payload,
        );
        draftState.counter[temp].value--;
      });
    case 'insertion':
      return produce(state, draftState => {
        draftState.counter.push(action.payload);
      });
    case 'deletion':
      return produce(state, draftState => {
        let temp = draftState.counter.filter(c => c.id !== action.payload);
        draftState.counter = temp;
      });
    default:
      return {...state};
  }
};

export default Reducer;
