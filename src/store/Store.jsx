import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/features/counter/CounterSlice";
import sidebarReducer from "../store/features/nav/navSlice";
import { loadState, saveState } from "../utils/localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sidebar: sidebarReducer,
  },
  preloadedState
});

store.subscribe(() => {
  saveState(store.getState());
});
