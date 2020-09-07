import React, { Fragment, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

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
      boxShadow: `0 3px 10px rgba(0,0,0,0.08)`,
    },
    width: theme.spacing(17.5),
    boxShadow: `0 3px 10px rgba(0,0,0,0.08)`,
  },
  menu: {
    marginTop: theme.spacing(4.5),
    borderRadius: 10,
    "& .MuiPaper-rounded": {
      borderRadius: 10,
    },
  },
  arrowIcon: {
    transition: `transform 0.2s ease`,
  },
  arrowIconFlip: {
    transform: `rotate(180deg)`,
    transition: `transform 0.2s ease`,
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
        className={classes.button}
        aria-controls="country-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        <Typography noWrap style={{ fontSize: "0.9rem" }}>
          {selectedCountry.country || "World Wide"}
        </Typography>
        <KeyboardArrowDownIcon
          className={clsx(classes.arrowIcon, {
            [classes.arrowIconFlip]: !!anchorEl,
          })}
        />
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
