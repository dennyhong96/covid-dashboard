import React from "react";
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";

import { green, red, yellow } from "../theme";
import MapPopup from "../components/Dashboard/MapPopup";

const MAP_COLORS = {
  cases: {
    color: yellow,
    rMultiplier: 800,
  },
  recovered: {
    color: green,
    rMultiplier: 1200,
  },
  deaths: {
    color: red,
    rMultiplier: 2000,
  },
};

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

export const transformMapData = (data, type = "cases") =>
  data.map((record) => {
    console.log(record);
    return (
      <Circle
        key={`${record.countryInfo.iso2}-${record.country}`}
        center={[record.countryInfo.lat, record.countryInfo.long]}
        fillOpacity={0.5}
        color={MAP_COLORS[type].color}
        fillColor={MAP_COLORS[type].color}
        radius={Math.sqrt(record[type]) * MAP_COLORS[type].rMultiplier}
      >
        <Popup>
          <MapPopup record={record} />
        </Popup>
      </Circle>
    );
  });

export const transformInfoCardData = (data) =>
  data ? `+ ${numeral(data).format("0.0a")}` : "+0";
