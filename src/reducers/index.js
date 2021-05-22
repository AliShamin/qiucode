import { combineReducers } from "redux";
import question_id_reducer from "./question_id_reducer";
import login_reducers from "./login_reducer";
import code_run_reducer from "./code_run_reducer";
const rootReducer = combineReducers({
  question_id_reducer,
  login_reducers,
  code_run_reducer,
});

export default rootReducer;
