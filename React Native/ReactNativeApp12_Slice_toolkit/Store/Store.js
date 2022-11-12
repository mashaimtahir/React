import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './../Reducer/Reducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
