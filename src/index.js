import React from "react";
import ReactDOM from "react-dom";
import "./Styles/main.scss";

import App from "./App";
import { Provider } from "react-redux";
import store from "./Components/Commons/store";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
