import React, { Fragment } from "react";

import Topbar from "./ui/Topbar";
import SideDrawer from "./ui/SideDrawer";

import "./App.scss";

const App = () => {
  return (
    <Fragment>
      <Topbar />
      <SideDrawer />
    </Fragment>
  );
};

export default App;
