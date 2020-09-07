import axios from "axios";

import {
  COUNTRIES_FETCHED,
  COUNTRY_SELECTED,
  CHART_DATA_FETCHED,
} from "./index";

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
  try {
    const res = await axios.get(
      country?.value
        ? `https://disease.sh/v3/covid-19/countries/${country.value}`
        : "https://disease.sh/v3/covid-19/all"
    );
    console.log(res.data);
    dispatch({
      type: COUNTRY_SELECTED,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.response);
  }
};

export const fetchChartData = (type) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://disease.sh/v3/covid-19/historical/all`
    );
    dispatch({
      type: CHART_DATA_FETCHED,
      payload: {
        data: res.data,
        type,
      },
    });
  } catch (error) {
    console.error(error.response);
  }
};
