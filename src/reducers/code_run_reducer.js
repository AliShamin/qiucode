import { RUN_CODE } from "../actions/actionTypes";

export default (state = { isLoad: false }, action) => {
  switch (action.type) {
    case RUN_CODE:
      return { isLoad: action.isLoad };
    default:
      return state;
  }
};
