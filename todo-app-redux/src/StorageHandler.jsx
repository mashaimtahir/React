import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: [
        { id: 1, value: 0, name: 'name' },
        { id: 2, value: 0, name: 'name' },
    ],
    reducers: {
        increment: (state, action) => {
            state[action.payload-1].value += 1
        },
        decrement: (state, action) => {
            state[action.payload-1].value -= 1
        },
        Insertion: (state, action) => {
            const counter = state;
            state.push({ id: state.length+1, value: 0, name: action.payload});
            state = counter;
        },
        Deletion: (state, action) => {
            const counter = state;
            const count = counter.filter(c => c.id !== action.payload);
            state = count;
        }
    },
})
export const { increment, decrement, Insertion, Deletion } = counterSlice.actions
export default counterSlice.reducer