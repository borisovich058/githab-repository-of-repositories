import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  getRepos  from '../actions/repos';
import Repos from "./repos/Repos";
import "./main.less";


const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.items);
  
  useEffect(() => {
    dispatch(getRepos());
    
  }, []);

  return (
    <div className="container">
      {repos.map(repo => {
        <Repos repo={repo}/>
      })}
    </div>
  );
};

export default Main;
