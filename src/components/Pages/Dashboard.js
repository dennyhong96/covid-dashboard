import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";

import { fetchCountries, selectCountry } from "../../redux/actions/covid";
import MapView from "../Dashboard/MapView";
import NewCasesChart from "../Dashboard/NewCasesChart";
import InfoSection from "../Dashboard/InfoSection";
import CountryCasesTable from "../Dashboard/CountryCasesTable";

const App = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    // Fetch a list of supported countries from desease.sh
    dispatch(fetchCountries());
    dispatch(selectCountry());
  }, [dispatch]);

  return (
    <Grid container style={{ paddingLeft: 73 }}>
      <Grid item xs={8}>
        <InfoSection />
        <MapView center={{ lat: 34.80746, lng: -40.4796 }} zoom={3} />
      </Grid>
      <Grid item xs={4}>
        <NewCasesChart />
        <CountryCasesTable style={{ marginBottom: theme.spacing(2) }} />
      </Grid>
    </Grid>
  );
};

export default App;
