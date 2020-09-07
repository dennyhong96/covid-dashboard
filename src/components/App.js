import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import { fetchCountries, selectCountry } from "../redux/actions/covid";
import { greyLight } from "../theme";
import Topbar from "./UI/Topbar";
import SideDrawer from "./UI/SideDrawer";
import MapView from "./Dashboard/MapView";
import CasesByCountry from "./Dashboard/CasesByCountry";
import NewCasesChart from "./Dashboard/NewCasesChart";
import InfoSection from "./Dashboard/InfoSection";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch a list of supported countries from desease.sh
    dispatch(fetchCountries());
    dispatch(selectCountry());
  }, [dispatch]);

  return (
    <Box style={{ backgroundColor: greyLight, minHeight: "100vh" }}>
      <Topbar />
      <SideDrawer />
      <Grid container style={{ paddingLeft: 73 }}>
        <Grid item xs={8}>
          <InfoSection />
          <MapView />
        </Grid>
        <Grid item xs={4}>
          <CasesByCountry />
          <NewCasesChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
