import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Topbar from "./ui/Topbar";
import SideDrawer from "./ui/SideDrawer";

import { fetchCountries } from "../redux/actions/covid";
import { greyLight } from "../theme";

import "./App.scss";
import InfoCard from "./Dashboard.js/InfoCard";

import {
  green,
  yellow,
  red,
  greenLight,
  yellowLight,
  redLight,
} from "../theme";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch a list of supported countries from desease.sh
    dispatch(fetchCountries());
  }, [dispatch]);

  const cardOptions = [
    {
      bgColor: yellowLight,
      color: yellow,
      title: "Coronavirus Cases",
      newCases: "+ 2000",
      total: "1.2M",
    },
    {
      bgColor: greenLight,
      color: green,
      title: "Recovered Cases",
      newCases: "+ 2000",
      total: "1.2M",
    },
    {
      bgColor: redLight,
      color: red,
      title: "Deaths",
      newCases: "+ 2000",
      total: "1.2M",
    },
  ];

  return (
    <Box style={{ backgroundColor: greyLight, minHeight: "100vh" }}>
      <Topbar />
      <SideDrawer />
      <Grid container>
        <Grid item xs={8}>
          <Grid container style={{ paddingLeft: 73 }}>
            {cardOptions.map((cardOption, idx) => (
              <Grid key={idx} item xs={4}>
                <InfoCard {...cardOption} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={4}>
          sdfds
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
