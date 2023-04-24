import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reposReducer from "./reposReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  repos: reposReducer,
});

const store = configureStore(
  { reducer: rootReducer }
);

export default store;
