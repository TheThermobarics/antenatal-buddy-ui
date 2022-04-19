import axios from "axios";
import { API_BASE_URL } from "./../constants";
import { setAlert } from "./alert";
import { GET_HELPER_APPOINTMENTS, GET_HELPER_APPOINTMENTS_FAIL } from "./types";

export const getAllAppointmentsForDoctor = (helperId) => async (dispatch) => {
  try {
    const res = await axios.get(
      API_BASE_URL + `appointment?helper=${helperId}`
    );
    console.log(res.data);
    dispatch({
      type: GET_HELPER_APPOINTMENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: GET_HELPER_APPOINTMENTS_FAIL,
    });
  }
};
