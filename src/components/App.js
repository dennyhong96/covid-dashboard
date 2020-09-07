import React from "react";
import { Route, Switch } from "react-router-dom";
import Box from "@material-ui/core/Box";

import { greyLight } from "../theme";
import Topbar from "./UI/Topbar";
import SideDrawer from "./UI/SideDrawer";
import Dashboard from "./Pages/Dashboard";
import Backdrop from "./UI/Backdrop";
import "./App.scss";

const App = () => {
  return (
    <Box style={{ backgroundColor: greyLight, minHeight: "100vh" }}>
      <Topbar />
      <SideDrawer />
      <Backdrop />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Box>
  );
};

export default App;
