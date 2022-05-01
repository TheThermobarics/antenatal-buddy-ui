import axios from "axios";
import { API_BASE_URL } from "./../constants";
import { setAlert } from "./alert";
import {
  GET_HELPER_APPOINTMENTS,
  GET_HELPER_APPOINTMENTS_FAIL,
  GET_HELPER_ANC_VISITS,
  GET_HELPER_ANC_VISITS_FAIL,
  SET_LANGUAGE_SELECTED,
} from "./types";

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

export const getAllVisitsForDoctor = (helperId) => async (dispatch) => {
  try {
    const res = await axios.get(
      API_BASE_URL + `medicalVisit?helper=${helperId}`
    );
    console.log(res.data);
    dispatch({
      type: GET_HELPER_ANC_VISITS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: GET_HELPER_ANC_VISITS_FAIL,
    });
  }
};

export const setLanguageSelected = (selectedLanguage) => async (dispatch) => {
  console.log("in action");
  console.log(selectedLanguage);
  dispatch({
    type: SET_LANGUAGE_SELECTED,
    payload: selectedLanguage,
  });
};
