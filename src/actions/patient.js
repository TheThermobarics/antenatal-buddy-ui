import axios from "axios";
import { API_BASE_URL } from "./../constants";
import { setAlert } from "./alert";
import { GET_ALL_DOCTORS, GET_ALL_DOCTORS_FAIL } from "./types";
// import setAuthToken from "../utils/setAuthToken";

export const getAllDoctors = () => async (dispatch) => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }
  try {
    const res = await axios.get(API_BASE_URL + "users?role=doctor");
    console.log(res.data);
    dispatch({
      type: GET_ALL_DOCTORS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: GET_ALL_DOCTORS_FAIL,
    });
  }
};
