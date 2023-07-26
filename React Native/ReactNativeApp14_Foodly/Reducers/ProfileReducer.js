import {createSlice} from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: 'Mashaim Ali',
    password: 'admin',
    email: 'mashaim@admin.com',
    phone: '+923441860612',
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
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
    changePasswordConfirm: (state, action) => {
      state.password =
        state.password === action.payload.old
          ? action.payload.new
          : state.password;
    },
  },
});
export const {changeName, changePassword, changeEmail, changePhone} =
  profileSlice.actions;
export default profileSlice.reducer;
