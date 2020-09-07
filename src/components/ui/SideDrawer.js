import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

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
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  brandBtn: {
    padding: 4,
    alignSelf: "center",
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
      <IconButton className={classes.brandBtn}>
        <BrandLogo className={classes.brandLogo} />
      </IconButton>

      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
