import React from "react";
import Box from "@material-ui/core/Box";

import Topbar from "./ui/Topbar";
import SideDrawer from "./ui/SideDrawer";

import { greyLight } from "../theme";

import "./App.scss";

const App = () => {
  return (
    <Box style={{ backgroundColor: greyLight, minHeight: "100vh" }}>
      <Topbar />
      <SideDrawer />
    </Box>
  );
};

export default App;
