import React, { useEffect } from "react";
import { useTheme, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { useSelector, useDispatch } from "react-redux";

import { chartConfig } from "../../config";
import { fetchChartData } from "../../redux/actions/covid";
import {
  greenLight,
  greenDark,
  redLight,
  redDark,
  yellowLight,
  yellowDark,
} from "../../theme";

import { Line } from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
  card: {
    marginLeft: theme.spacing(1),
    marginRight: "1rem",
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    boxShadow: `0 3px 10px rgba(0,0,0,0.08)`,
    borderRadius: 15,
  },
}));

const CHART_THEME_MAP = {
  cases: {
    bg: yellowLight,
    border: yellowDark,
  },
  recovered: {
    bg: greenLight,
    border: greenDark,
  },
  deaths: {
    bg: redLight,
    border: redDark,
  },
};

const NewCasesChart = () => {
  const dispatch = useDispatch();
  const chartData = useSelector(({ covid: { chartData } }) => chartData);
  const casesType = useSelector(({ covid: { casesType } }) => casesType);
  const selectedCountry = useSelector(
    ({ covid: { selectedCountry } }) => selectedCountry
  );
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchChartData(casesType));
  }, [casesType, dispatch, selectedCountry]);

  return (
    <Card className={classes.card}>
      <Typography
        align="center"
        variant="h6"
        style={{ fontWeight: 700, color: theme.palette.common.black }}
        gutterBottom
      >
        {selectedCountry?.country || "World Wide"}{" "}
        {`${casesType.slice(0, 1).toUpperCase()}${casesType.slice(1)}`}
      </Typography>
      <Line
        data={{
          datasets: [
            {
              backgroundColor: CHART_THEME_MAP[casesType].bg,
              borderColor: CHART_THEME_MAP[casesType].border,
              data: chartData,
            },
          ],
        }}
        options={chartConfig}
      />
    </Card>
  );
};

export default NewCasesChart;
