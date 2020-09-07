import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/styles";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import SwapVertIcon from "@material-ui/icons/SwapVert";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: 100,
    textTransform: "none",
    backgroundColor: theme.palette.common.greenDark,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.common.green,
    },
  },
  menu: {
    marginTop: theme.spacing(4.5),
  },
}));

const CountryMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (evt) => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        disableElevation
        className={classes.button}
        aria-controls="country-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        <SwapVertIcon style={{ fontSize: 20 }} /> World Wide
      </Button>
      <Menu
        id="country-menu"
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
        className={classes.menu}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Fragment>
  );
};

export default CountryMenu;
