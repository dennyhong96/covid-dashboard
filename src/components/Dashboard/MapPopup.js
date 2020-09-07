import React from "react";
import numeral from "numeral";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const MapPopup = ({ record }) => {
  return (
    <Box>
      <img src={record.countryInfo.flag} height={12} alt="Country Flag" />
      <Typography
        style={{
          display: "inline",
          margin: 0,
          fontSize: "0.8rem",
          fontWeight: 700,
          marginLeft: 4,
        }}
      >
        {record.country}
      </Typography>
      <Typography style={{ margin: 0, fontSize: "0.8rem", fontWeight: 500 }}>
        <strong># Cases:</strong> {numeral(record.cases).format("0,0")}
      </Typography>
      <Typography style={{ margin: 0, fontSize: "0.8rem", fontWeight: 500 }}>
        <strong># Recovered:</strong> {numeral(record.recovered).format("0,0")}
      </Typography>
      <Typography style={{ margin: 0, fontSize: "0.8rem", fontWeight: 500 }}>
        <strong># Deaths:</strong> {numeral(record.deaths).format("0,0")}
      </Typography>
    </Box>
  );
};

export default MapPopup;
