import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
});

const lal = {
  kek: "lel",
  ggg: "sss",
  sos: "kek",
  Danila: "this is not my change",
};
