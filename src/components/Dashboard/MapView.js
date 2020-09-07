import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { Map, TileLayer } from "react-leaflet";

import Card from "@material-ui/core/Card";

import { transformMapData } from "../../utils";

const useStyles = makeStyles((theme) => ({
  mapBox: {
    height: 500,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    borderRadius: 15,
    boxShadow: `0 3px 10px rgba(0,0,0,0.08)`,
    padding: theme.spacing(1.5),
    backgroundColor: "#fff",
    "& .leaflet-container": {
      height: "100%",
      borderRadius: 10,
    },
  },
}));

const MapView = () => {
  const classes = useStyles();
  const selectedCountry = useSelector(
    ({ covid: { selectedCountry } }) => selectedCountry
  );
  const countriesByCases = useSelector(
    ({ covid: { countriesByCases } }) => countriesByCases
  );
  const casesType = useSelector(({ covid: { casesType } }) => casesType);

  const center = selectedCountry.countryInfo
    ? {
        lat: selectedCountry.countryInfo.lat,
        lng: selectedCountry.countryInfo.long,
      }
    : { lat: 34.80746, lng: -40.4796 };
  const zoom = selectedCountry.countryInfo ? 4 : 3;

  return (
    <Card className={classes.mapBox}>
      <Map center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {transformMapData(countriesByCases, casesType)}
      </Map>
    </Card>
  );
};

export default MapView;
