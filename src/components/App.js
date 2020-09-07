import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import { useDispatch } from "react-redux";

import { fetchCountries } from "../redux/actions/covid";

import Topbar from "./ui/Topbar";
import SideDrawer from "./ui/SideDrawer";

import { greyLight } from "../theme";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <Box style={{ backgroundColor: greyLight, minHeight: "100vh" }}>
      <Topbar />
      <SideDrawer />
    </Box>
  );
};

export default App;
