import axios from "axios";

import { COUNTRIES_FETCHED, COUNTRY_SELECTED } from "./index";

export const fetchCountries = () => async (dispatch) => {
  try {
    const res = await axios.get("https://disease.sh/v3/covid-19/countries");
    dispatch({
      type: COUNTRIES_FETCHED,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.response);
  }
};

export const selectCountry = (country) => async (dispatch) => {
  dispatch({
    type: COUNTRY_SELECTED,
    payload: country,
  });
};
