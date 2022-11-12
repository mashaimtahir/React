import {createSlice} from '@reduxjs/toolkit';

export const personalSlice = createSlice({
  name: 'personal',
  initialState: {
    name: 'Mashaim Ali',
    password: 'admin',
    email: 'mashaim@admin.com',
    phone: '+923441860612',
  },
  reducer: {
    changeName: (state, action) => {
      state.name = action;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});
export const {changeName, changePassword, changeEmail, changePhone} =
  personalSlice.actions;
export default personalSlice.reducer;
