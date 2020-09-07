import axios from "axios";

import {
  COUNTRIES_FETCHED,
  COUNTRY_SELECTED,
  CHART_DATA_FETCHED,
  CASE_TYPE_SET,
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

    dispatch({
      type: COUNTRY_SELECTED,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.response);
  }
};

export const fetchChartData = (type) => async (dispatch, getState) => {
  try {
    const {
      covid: { selectedCountry },
    } = await getState();

    const url = selectedCountry?.countryInfo
      ? `https://disease.sh/v3/covid-19/historical/${selectedCountry.countryInfo.iso2}?lastdays=120`
      : `https://disease.sh/v3/covid-19/historical/all?lastdays=120`;

    const res = await axios.get(url);

    dispatch({
      type: CHART_DATA_FETCHED,
      payload: {
        data: selectedCountry?.countryInfo ? res.data.timeline : res.data,
        type,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const setCaseType = (type) => (dispatch) => {
  dispatch({
    type: CASE_TYPE_SET,
    payload: type,
  });
};
