import {
  COUNTRIES_FETCHED,
  COUNTRY_SELECTED,
  CHART_DATA_FETCHED,
} from "../actions";

import { transformChartData } from "../../utils";

const INITIAL_STATE = {
  countries: [],
  selectedCountry: { name: "World Wide", value: false },
  countriesByCases: [],
  chartData: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case COUNTRIES_FETCHED:
      return {
        ...state,
        countries: [
          { name: "World Wide 🌍", value: null },
          ...payload.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          })),
        ],
        countriesByCases: payload.sort((a, b) => b.cases - a.cases),
      };
    case COUNTRY_SELECTED:
      return {
        ...state,
        selectedCountry: payload,
      };
    case CHART_DATA_FETCHED:
      return {
        ...state,
        chartData: transformChartData(payload.data, payload.type),
      };
    default:
      return state;
  }
};
