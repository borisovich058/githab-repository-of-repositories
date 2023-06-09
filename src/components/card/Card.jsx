import React, { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { getContributors, getCurrentRepos } from "../actions/repos";
import { useNavigate } from "react-router-dom";
import "./card.less";

const Card = (props) => {
  const { username, reponame } = useParams();
  const [repo, setRepo] = useState({ owner: {} });
  const [contributors, setContributors] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    getCurrentRepos(username, reponame, setRepo);
    getContributors(username, reponame, setContributors);
  }, []);

  return (
    <div>
      <button onClick={() => navigate("/")}>back</button>
      <div className="card">
        <img src={repo.owner.avatar_url} alt="avatar" />
        <div className="name">{repo.name}</div>
        <div className="stars">{repo.stargazers_count}</div>
      </div>
      {contributors.map((c, index) => (
        <div>
          {index + 1}. {c.login}
        </div>
      ))}
    </div>
  );
};

export default Card;
