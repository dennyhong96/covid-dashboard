import React from "react";

import Grid from "@material-ui/core/Grid";

import InfoCard from "./InfoCard";

import {
  green,
  yellow,
  red,
  greenLight,
  yellowLight,
  redLight,
} from "../../theme";

const InfoSection = () => {
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
    <Grid container>
      {cardOptions.map((cardOption, idx) => (
        <Grid key={idx} item xs={4}>
          <InfoCard {...cardOption} />
        </Grid>
      ))}
    </Grid>
  );
};

export default InfoSection;
