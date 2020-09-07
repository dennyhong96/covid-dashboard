import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import { ReactComponent as GreenCovid } from "../../assets/green-covid.svg";
import { ReactComponent as RedCovid } from "../../assets/red-covid.svg";
import { ReactComponent as YellowCovid } from "../../assets/yellow-covid.svg";

import Card from "@material-ui/core/Card";
import { green, yellow, red } from "../../theme";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    height: "10rem",
    backgroundColor: theme.palette.common.greenLight,
    borderRadius: 10,
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: `0 3px 10px rgba(0,0,0,0.07)`,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 12,
    transform: "scale(1.5)",
    zIndex: 0,
  },
  title: {
    color: theme.palette.common.green,
    fontWeight: 700,
    fontSize: "1.3rem",
    lineHeight: 1,
    marginBottom: theme.spacing(1.5),
    zIndex: 1,
  },
  newCases: {
    color: theme.palette.common.green,
    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: 1,
    marginBottom: theme.spacing(1.5),
    zIndex: 1,
  },
  total: {
    color: theme.palette.common.green,
    fontWeight: 700,
    fontSize: "1.6rem",
    lineHeight: 1,
    zIndex: 1,
  },
}));

const InfoCard = ({ bgColor, color, title, newCases, total }) => {
  const classes = useStyles();
  const ICON_MAP = {
    [green]: <GreenCovid className={classes.icon} />,
    [yellow]: <YellowCovid className={classes.icon} />,
    [red]: <RedCovid className={classes.icon} />,
  };

  return (
    <Card className={classes.card} style={{ backgroundColor: bgColor }}>
      {ICON_MAP[color]}
      <Typography align="center" className={classes.title} style={{ color }}>
        {title}
      </Typography>
      <Typography align="center" className={classes.newCases} style={{ color }}>
        {newCases}
      </Typography>
      <Typography align="center" className={classes.total} style={{ color }}>
        {total} Total
      </Typography>
    </Card>
  );
};

export default InfoCard;
