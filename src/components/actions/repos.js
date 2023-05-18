import { Octokit } from "@octokit/core";
import axios from "axios";
import { setIsFetching, setRepos } from "../reducers/reposReducer";
// import { setRepositories } from "../reducers/reposReducer";

const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
  if (searchQuery === '') {
    searchQuery = "stars:%3E1";
  }
  return async (dispatch) => {
    dispatch(setIsFetching(true))
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: "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",
        },
      }
    );
    await dispatch(setRepos(response.data));
  };
};

export default getRepos;
