import numeral from "numeral";

export const chartConfig = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  // maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: (tooltipItem, data) => numeral(tooltipItem.value).format("+0,0"),
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: (value) => numeral(value).format("0a"),
        },
      },
    ],
  },
};
