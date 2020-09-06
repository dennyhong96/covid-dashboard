import { OPEN_DRAWER, CLOSE_DRAWER } from "./index";

export const openDrawer = () => (dispatch) => {
  dispatch({
    type: OPEN_DRAWER,
  });
};

export const closeDrawer = () => (dispatch) => {
  dispatch({
    type: CLOSE_DRAWER,
  });
};
