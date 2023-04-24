import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./components/reducers/index.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
