import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";

import DashboardIcon from "@material-ui/icons/Dashboard";
import AnnouncementIcon from "@material-ui/icons/Announcement";

import { closeDrawer } from "../../redux/actions/drawer";
import { ReactComponent as BrandLogo } from "../../assets/brand.svg";

const DRAWER_OPEN_WIDTH = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: DRAWER_OPEN_WIDTH,
    flexShrink: 0,
    whiteSpace: "nowrap",
    ...theme.mixins.toolbar,
    "& .MuiDrawer-paperAnchorDockedLeft": {
      border: "none",
      boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
    },
    position: "relative",
  },
  drawerOpen: {
    width: DRAWER_OPEN_WIDTH,
    transition: `width 0.2s ease-in`,
  },
  drawerClose: {
    transition: `width 0.2s ease-in`,
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  backIconButton: {
    transform: "rotate(-180deg)",
    alignSelf: "flex-end",
    position: "absolute",
    padding: theme.spacing(1),
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  backIcon: {
    fontSize: 28,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  brandBtn: {
    marginTop: "0.5rem",
    padding: 4,
    alignSelf: "center",
    transition: `all 0.2s ease-in`,
  },
  brandTransformed: {
    marginTop: "2.5rem",
    marginBottom: "2.5rem",
    transform: `scale(1.5)`,
    transition: `all 0.2s ease-in`,
  },
  brandLogo: {
    width: 55,
    height: 55,
  },
}));

const SideDrawer = () => {
  const open = useSelector(({ drawer: { open } }) => open);
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      {open && (
        <IconButton
          aria-label="menu"
          edge="start"
          className={classes.backIconButton}
          onClick={() => dispatch(closeDrawer())}
        >
          <DoubleArrowRoundedIcon
            className={classes.backIcon}
            style={{ color: theme.palette.common.black }}
          />
        </IconButton>
      )}

      <IconButton
        component={Link}
        to="/refresh"
        className={clsx(classes.brandBtn, { [classes.brandTransformed]: open })}
      >
        <BrandLogo className={classes.brandLogo} />
      </IconButton>

      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/news">
          <ListItemIcon>
            <AnnouncementIcon />
          </ListItemIcon>
          <ListItemText primary="News" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
