import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: [
    {id: 1, value: 0, name: 'name'},
    {id: 2, value: 0, name: 'name'},
  ],
  reducers: {
    increment: (state, action) => {
      state[action.payload - 1].value += 1;
    },
    decrement: (state, action) => {
      state[action.payload - 1].value -= 1;
    },
    Insertion: (state, action) => {
      state.push({id: state.length + 1, value: 0, name: action.payload});
    },
    Deletion: (state, action) => {
      const newstate = state.filter(c => c.id !== action.payload);
      return newstate;
    },
  },
});
export const {increment, decrement, Insertion, Deletion} = counterSlice.actions;
export default counterSlice.reducer;
