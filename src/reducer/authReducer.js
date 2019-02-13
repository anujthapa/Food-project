import { SET_CURRENT_USER, REGISTER_USER, TOOGLE_DATA } from "../action/types";

const initialState = {
  isAuthenticated: false,
  userData: {},
  toogle: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated
      };

    case REGISTER_USER:
      return {
        ...state,
        toogle: !state.toogle,
        userData: action.payload
      };
    case TOOGLE_DATA:
      return {
        ...state,
        toogle: !state.toogle
      };
    default:
      return state;
  }
}
