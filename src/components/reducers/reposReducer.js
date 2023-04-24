import { createAction, createReducer } from "@reduxjs/toolkit";

const defaultState = {
  items: [],
  isFetching: true,
};

export const setRepositories = createAction('SET_REPOS');

export default createReducer( defaultState, {
  [setRepositories]: function(state) {
    state.items = state.items;
  }
})

//export const setRepos = (repos) => ({ type: setRepositories, payload: repos });
