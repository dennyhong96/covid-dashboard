import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import { fetchCountries, selectCountry } from "../redux/actions/covid";
import theme, { greyLight } from "../theme";
import Topbar from "./UI/Topbar";
import SideDrawer from "./UI/SideDrawer";
import MapView from "./Dashboard/MapView";
import NewCasesChart from "./Dashboard/NewCasesChart";
import InfoSection from "./Dashboard/InfoSection";
import CountryCasesTable from "./Dashboard/CountryCasesTable";
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
          <MapView center={{ lat: 34.80746, lng: -40.4796 }} zoom={3} />
        </Grid>
        <Grid item xs={4}>
          <CountryCasesTable style={{ marginBottom: theme.spacing(2) }} />
          <NewCasesChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
