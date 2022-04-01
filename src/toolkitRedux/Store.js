import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./Reducer";

export default configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});
