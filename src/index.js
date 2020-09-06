import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import theme from "./theme";

import App from "./components/App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
