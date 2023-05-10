import { configureStore } from "@reduxjs/toolkit";
import reposReducer, {  } from "./reposReducer";

const store = configureStore({
  reducer: {
    repos: reposReducer
  }
});

export default store;
