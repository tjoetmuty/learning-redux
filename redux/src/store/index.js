import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import todoReducer from "./slice/counterSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
});
