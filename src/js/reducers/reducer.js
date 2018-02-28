import { combineReducers } from "redux";

import file from "./fileReducer";
import user from "./userReducer";

export default combineReducers({
  file,
  user
});
