import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getRepos from "../actions/repos";
import Repo from "./repos/Repo";
import "./main.less";
import { setCurrentPage } from "../reducers/reposReducer";
import { createPages } from "../../utils/pagesCreator";

const Main = () => {
  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);
  const currentPage = useSelector((state) => state.repos.currentPage);
  const totalCount = useSelector((state) => state.repos.totalCount);
  const perPage = useSelector((state) => state.repos.perPage);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const pagesCount = Math.ceil(totalCount / perPage);
  let pages = [];
  createPages(pages, pagesCount, currentPage);

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, [currentPage]);

  console.log(repos);

  const searchHandler = () => {
    dispatch(setCurrentPage(1));
    dispatch(getRepos(searchValue, currentPage, perPage));
  };

  return (
    <div className="container">
      <div className="search">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="enter repo name"
          className="search-input"
        />
        <button onClick={searchHandler} className="search-btn">
          Search
        </button>
      </div>
      {isFetching === false ? (
        repos.map((repo) => <Repo key={repo.id} repo={repo} />)
      ) : (
        <div className="fetching" />
      )}

      <div className="pages">
        {pages.map((page, index) => (
          <span
            key={index}
            className={currentPage === page ? "current-page" : "page"}
            onClick={() => dispatch(setCurrentPage(page))}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Main;
