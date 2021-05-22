import { USER_LOGGED_IN } from "../actions/actionTypes";

export default (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { isLoggedIn: true };
    default:
      return state;
  }
};
