import { configureStore, createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

export const actions = coursesSlice.actions;

const store = configureStore({
  reducer: coursesSlice.reducer,
});

export default store;
