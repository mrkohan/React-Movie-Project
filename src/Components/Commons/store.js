import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Main";
const store = configureStore({
  reducer: { movies: moviesReducer },
});

export default store;
