import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "leaflet/dist/leaflet.css";

import store from "./redux/store";
import theme from "./theme";

import App from "./components/App";

ReactDOM.render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById("root")
);
