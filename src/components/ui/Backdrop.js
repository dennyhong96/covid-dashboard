import React from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";

import { closeDrawer } from "../../redux/actions/drawer";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    position: "absolute",
    background: "rgba(0,0,0,0.5)",
    zIndex: theme.zIndex.appBar + 1,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
}));

const Backdrop = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector(({ drawer: { open } }) => open);

  return open ? (
    <Box className={classes.backdrop} onClick={() => dispatch(closeDrawer())} />
  ) : null;
};

export default Backdrop;
