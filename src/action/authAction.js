import {
  SET_CURRENT_USER,
  GET_ERRORS,
  REGISTER_USER,
  TOOGLE_DATA
} from "./types";

export const loginUser = userData => dispatch => {
  console.log("this is clcked ");

  dispatch({
    type: SET_CURRENT_USER,
    payload: userData
  });
};

export const registerUser = userData => dispatch => {
  dispatch({
    type: REGISTER_USER,
    payload: userData
  });
};

export const toogleHandaler = () => dispatch => {
  dispatch({
    type: TOOGLE_DATA
  });
};
