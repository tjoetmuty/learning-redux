import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: "user",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }, 
    incrementByAmount: (state, action) => {
      state.value = action.payload;
    },
    changeName: (state, action) => {
      state.name = action.payload
    }
  },
});

export const { decrement, increment, incrementByAmount, changeName } = counterSlice.actions;
export default counterSlice.reducer;