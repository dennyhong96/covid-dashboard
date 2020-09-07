import React, { useEffect } from "react";
import { useTheme, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { useSelector, useDispatch } from "react-redux";

import { chartConfig } from "../../config";
import { fetchChartData } from "../../redux/actions/covid";

import { Line } from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
  card: {
    marginLeft: theme.spacing(1),
    marginRight: "1rem",
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    boxShadow: `0 3px 10px rgba(0,0,0,0.04)`,
    borderRadius: 10,
  },
}));

const NewCasesChart = () => {
  const dispatch = useDispatch();
  const chartData = useSelector(({ covid: { chartData } }) => chartData);
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchChartData());
  }, []);

  console.log(chartData);
  return (
    <Card className={classes.card}>
      <Line
        data={{
          datasets: [
            {
              backgroundColor: theme.palette.common.greenLight,
              borderColor: theme.palette.common.greenDark,
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
