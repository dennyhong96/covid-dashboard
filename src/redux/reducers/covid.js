import { COUNTRIES_FETCHED } from "../actions";

const INITIAL_STATE = {
  countries: [],
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case COUNTRIES_FETCHED:
      return { ...state, countries: payload };
    default:
      return state;
  }
};
