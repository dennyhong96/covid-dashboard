import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Provider as ReduxProvider } from "react-redux";
import "leaflet/dist/leaflet.css";

import store from "./redux/store";
import theme from "./theme";

import App from "./components/App";

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById("root")
);
