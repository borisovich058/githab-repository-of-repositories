import React from "react";
import Main from "./main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.less";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
