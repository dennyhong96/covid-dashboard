import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

import SwapVertIcon from "@material-ui/icons/SwapVert";

import { selectCountry } from "../../redux/actions/covid";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: 100,
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    textTransform: "none",
    backgroundColor: theme.palette.common.greenDark,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.common.green,
    },
    width: theme.spacing(17.5),
  },
  menu: {
    marginTop: theme.spacing(4.5),
  },
}));

const CountryMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const countries = useSelector(({ covid: { countries } }) => countries);
  const selectedCountry = useSelector(
    ({ covid: { selectedCountry } }) => selectedCountry
  );

  const handleClick = (evt) => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (country) => {
    dispatch(selectCountry(country));
    handleClose();
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
        <Typography noWrap style={{ fontSize: "0.9rem" }}>
          {selectedCountry?.name || "World Wide"}
        </Typography>
        <SwapVertIcon style={{ fontSize: 20 }} />
      </Button>
      <Menu
        id="country-menu"
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
        className={classes.menu}
        PaperProps={{ style: { maxHeight: 450, width: "15rem" } }}
      >
        {!!countries.length &&
          countries.map((country) => (
            <MenuItem
              onClick={() => handleSelect(country)}
              key={`${country.value}-${country.name}`}
            >
              <Typography noWrap>{country.name}</Typography>
            </MenuItem>
          ))}
      </Menu>
    </Fragment>
  );
};

export default CountryMenu;
