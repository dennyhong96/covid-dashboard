import { OPEN_DRAWER, CLOSE_DRAWER } from "../actions";

const INITIAL_STATE = {
  open: false,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_DRAWER:
      return { ...state, open: true };
    case CLOSE_DRAWER:
      return { ...state, open: false };
    default:
      return state;
  }
};
