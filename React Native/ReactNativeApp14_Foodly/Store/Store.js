import {configureStore} from '@reduxjs/toolkit';
import ProfileReducer from '../Reducers/ProfileReducer';

export default configureStore({
  reducer: {
    profile: ProfileReducer,
  },
});
