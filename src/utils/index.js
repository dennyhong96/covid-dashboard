export const transformChartData = (data = "cases", type) => {
  const chartData = [];
  let previousCases;
  data[type].forEach((date) => {
    if (previousCases) {
      chartData.push({
        x: date,
        y: data[type][date] - previousCases,
      });
    }
    previousCases = data[type][date];
  });
  return chartData;
};
