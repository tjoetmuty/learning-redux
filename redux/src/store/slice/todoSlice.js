import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: []
}

export const todoSlice = createSlice({
  name: "to do",
  initialState,
  reducers: {
    
  }
})
export default todoSlice.reducer;