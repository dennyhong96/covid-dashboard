import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Box from "@material-ui/core/Box";

import { greyLight } from "../theme";
import Dashboard from "./Pages/Dashboard";
import News from "./Pages/News";
import Topbar from "./UI/Topbar";
import SideDrawer from "./UI/SideDrawer";
import Backdrop from "./UI/Backdrop";
import Refresh from "./UI/Refresh";
import "./App.scss";

const App = () => {
  return (
    <Box style={{ backgroundColor: greyLight, minHeight: "100vh" }}>
      <Topbar />
      <SideDrawer />
      <Backdrop />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/news" component={News} />
        <Route exact path="/refresh" component={Refresh} />
        <Redirect to="/" />
      </Switch>
    </Box>
  );
};

export default App;
