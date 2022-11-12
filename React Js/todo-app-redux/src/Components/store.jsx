import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./../StorageHandler";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
