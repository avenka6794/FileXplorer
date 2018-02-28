import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import "./styles.css";
import store from "./js/store";
import Layout from "./js/pages/Layout";

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Layout />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
