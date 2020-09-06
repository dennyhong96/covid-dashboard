import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";

import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

import { openDrawer, closeDrawer } from "../../redux/actions/drawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "#fff",
    color: theme.palette.common.black,
  },
  toolbar: {
    paddingLeft: 64 + 33,
    transition: theme.transitions.create(["padding"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbarShift: {
    paddingLeft: drawerWidth + 33,
    transition: theme.transitions.create(["padding"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    padding: theme.spacing(1),
    transition: `transform 0.4s ease-out`,
  },
  menuButtonFlip: {
    transform: `rotate(180deg)`,
    transition: `transform 0.4s ease-out`,
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
  const theme = useTheme();
  const open = useSelector(({ drawer: { open } }) => open);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(open ? closeDrawer() : openDrawer());
  };

  return (
    <Box className={classes.root}>
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar
          className={clsx(classes.toolbar, {
            [classes.toolbarShift]: open,
          })}
        >
          <IconButton
            className={clsx(classes.menuButton, {
              [classes.menuButtonFlip]: open,
            })}
            onClick={handleClick}
            color="inherit"
            aria-label="menu"
            edge="start"
          >
            <DoubleArrowIcon style={{ fontSize: 28 }} />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            <Typography variant="h5" className={classes.covid}>
              COVID-19{" "}
            </Typography>
            - Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
