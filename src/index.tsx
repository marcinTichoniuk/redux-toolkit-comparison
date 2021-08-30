import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// import { store } from "./redux-old-way/Store";
import { store } from "./redux-toolkit/Store";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
