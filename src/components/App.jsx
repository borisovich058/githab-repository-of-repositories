import React from "react";
import Main from "./main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.less";
import Card from "./card/Card";

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/card/:username/:reponame" element={<Card />} />
      </Routes>
    </Router>
  );
};

export default App;
