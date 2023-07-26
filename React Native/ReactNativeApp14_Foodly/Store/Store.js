import {configureStore} from '@reduxjs/toolkit';
import profileReducer from '../Reducers/ProfileReducer';
import resturantSlice from '../Reducers/ResturantReducer';

export default configureStore({
  reducer: {
    profile: profileReducer,
    resturant: resturantSlice,
  },
});
