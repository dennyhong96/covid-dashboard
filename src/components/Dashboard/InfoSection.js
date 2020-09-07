import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";

import { setCaseType } from "../../redux/actions/covid";
import { transformInfoCardData } from "../../utils";
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
  const selectedCountry = useSelector(
    ({ covid: { selectedCountry } }) => selectedCountry
  );
  const casesType = useSelector(({ covid: { casesType } }) => casesType);
  const dispatch = useDispatch();

  const cardOptions = [
    {
      bgColor: yellowLight,
      color: yellow,
      title: "Covid-19 Cases",
      newCases: transformInfoCardData(selectedCountry.todayCases),
      total: selectedCountry.cases,
      caseType: "cases",
    },
    {
      bgColor: greenLight,
      color: green,
      title: "Recovered Cases",
      newCases: transformInfoCardData(selectedCountry.todayRecovered),
      total: selectedCountry.recovered,
      caseType: "recovered",
    },
    {
      bgColor: redLight,
      color: red,
      title: "Deaths",
      newCases: transformInfoCardData(selectedCountry.todayDeaths),
      total: selectedCountry.deaths,
      caseType: "deaths",
    },
  ];

  return (
    <Grid container>
      {cardOptions.map((cardOption, idx) => (
        <Grid key={idx} item xs={4}>
          <InfoCard
            {...cardOption}
            active={casesType === cardOption.caseType}
            onClick={() => dispatch(setCaseType(cardOption.caseType))}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default InfoSection;
