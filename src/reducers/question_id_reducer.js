import {
  NEXT_QUESTION,
  PREV_QUESTION,
  UPDATE_QUESTION_ID,
} from "../actions/actionTypes";
import initialState from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case NEXT_QUESTION:
      return { questionId: state.questionId + 1, eventFired: NEXT_QUESTION };
    case PREV_QUESTION:
      return { questionId: state.questionId - 1, eventFired: PREV_QUESTION };
    case UPDATE_QUESTION_ID:
      return { questionId: action.id, eventFired: UPDATE_QUESTION_ID };
    default:
      return state;
  }
};
