import axios from "axios";
import { API_BASE_URL } from "./../constants";
import { setAlert } from "./alert";
import {
  GET_ALL_DOCTORS,
  GET_ALL_DOCTORS_FAIL,
  MAKE_APPOINTMENT,
  GET_APPOINTMENTS,
  GET_APPOINTMENTS_FAIL,
  MAKE_APPOINTMENT_FAIL,
} from "./types";
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

export const getAllAppointments = (patientId) => async (dispatch) => {
  try {
    const res = await axios.get(
      API_BASE_URL + `appointment?patient=${patientId}`
    );
    console.log(res.data);
    dispatch({
      type: GET_APPOINTMENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: GET_APPOINTMENTS_FAIL,
    });
  }
};

export const makeAppointment = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(API_BASE_URL + "appointment", formData);
    console.log(res.data);
    dispatch({
      type: MAKE_APPOINTMENT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    // dispatch({
    //   type: MAKE_APPOINTMENT_FAIL,
    // });
  }
};
