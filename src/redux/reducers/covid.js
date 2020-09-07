import { COUNTRIES_FETCHED, COUNTRY_SELECTED } from "../actions";

const INITIAL_STATE = {
  countries: [],
  selectedCountry: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case COUNTRIES_FETCHED:
      return {
        ...state,
        countries: payload.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        })),
      };
    case COUNTRY_SELECTED:
      return { ...state, selectedCountry: payload };
    default:
      return state;
  }
};
