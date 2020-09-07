export const transformChartData = (data, type = "cases") => {
  const chartData = [];
  let previousCases;
  Object.keys(data[type]).forEach((date) => {
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
