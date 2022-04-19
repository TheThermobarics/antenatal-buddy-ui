import { combineReducers } from "redux";

import auth from "./auth";
import patient from "./patient";
import helper from "./helper";

export default combineReducers({ auth, patient, helper });
