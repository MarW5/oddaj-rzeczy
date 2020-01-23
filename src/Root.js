import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import { Provider } from "react-redux";
import configureStore from "./configureStore";

const store = configureStore();

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}

export default Root;