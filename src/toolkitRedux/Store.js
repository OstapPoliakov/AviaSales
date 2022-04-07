import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./Reducer";

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});

window.store = store;

export default store;
