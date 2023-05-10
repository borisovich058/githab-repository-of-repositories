import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  getRepos  from '../actions/repos';
import Repo from "./repos/Repo";
import "./main.less";


const Main = () => {
  const repos = useSelector((state) => state.repos.items)
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getRepos());
  }, []);

  console.log(repos)

  return (
    <div className="container">
      {repos.map(repo => (
       <Repo key={repo.id} repo={repo}/>
      ))}
    </div>
  );
};

export default Main;
