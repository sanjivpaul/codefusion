import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/features/counter/CounterSlice";
import sidebarReducer from "../store/features/nav/navSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sidebar: sidebarReducer,
  },
});
