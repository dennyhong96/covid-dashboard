import React, { useEffect } from "react";
import { useTheme } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { chartConfig } from "../../config";
import { fetchChartData } from "../../redux/actions/covid";

import { Line } from "react-chartjs-2";

const NewCasesChart = () => {
  const dispatch = useDispatch();
  const chartData = useSelector(({ covid: { chartData } }) => chartData);
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchChartData());
  }, []);

  console.log(chartData);
  return (
    <div>
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
    </div>
  );
};

export default NewCasesChart;
