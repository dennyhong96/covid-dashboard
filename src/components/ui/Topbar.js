import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";

import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
import CountryMenu from "./CountryMenu";

import { openDrawer, closeDrawer } from "../../redux/actions/drawer";

const DRAWER_OPEN_WIDTH = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: theme.palette.common.greyLight,
    color: theme.palette.common.black,
  },
  toolbar: {
    paddingLeft: 64 + 33,
    transition: `padding 0.2s ease-in`,
  },
  toolbarShift: {
    paddingLeft: DRAWER_OPEN_WIDTH + 33,
    transition: `padding 0.2s ease-in`,
  },
  menuButton: {
    padding: theme.spacing(1),
    transition: `transform 0.35s ease-out`,
  },
  menuButtonFlip: {
    transform: `rotate(180deg)`,
    transition: `transform 0.35s ease-out`,
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
    marginLeft: theme.spacing(1),
    lineHeight: 0,
  },
  covid: {
    color: theme.palette.common.red,
    display: "inline",
    fontWeight: 700,
    lineHeight: 0,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const open = useSelector(({ drawer: { open } }) => open);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(open ? closeDrawer() : openDrawer());
  };

  return (
    <Box className={classes.root}>
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={clsx(classes.menuButton, {
              [classes.menuButtonFlip]: open,
            })}
            onClick={handleClick}
            color="inherit"
            aria-label="menu"
            edge="start"
          >
            <DoubleArrowRoundedIcon style={{ fontSize: 28 }} />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            <span variant="h5" className={classes.covid}>
              COVID-19{" "}
            </span>
            Dashboard
          </Typography>
          <CountryMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
