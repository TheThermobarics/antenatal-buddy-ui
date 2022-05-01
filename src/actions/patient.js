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
  GET_DOCTOR_WISE_VISITS,
  GET_VISIT_BY_ID,
} from "./types";
// import setAuthToken from "../utils/setAuthToken";

export const getAllDoctors = () => async (dispatch) => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }
  try {
    const res = await axios.get(API_BASE_URL + "users?role=helper");
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
      API_BASE_URL + `appointment?mother=${patientId}&sort=date`
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
      payload: formData,
    });
    dispatch(getAllAppointments(formData.mother));
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

export const create1stMedicalVisit =
  (
    mother,
    helper,
    dateOfVisit,
    pallor,
    pulse,
    rr,
    bp,
    weight,
    labInvestigationsImg
  ) =>
  async (dispatch) => {
    console.log({
      mother,
      helper,
      dateOfVisit,
      pallor,
      pulse,
      rr,
      bp,
      weight,
      labInvestigationsImg,
    });
    try {
      const res = await axios.post(API_BASE_URL + "medicalVisit", {
        mother,
        helper,
        dateOfVisit,
        pallor,
        pulse,
        rr,
        bp,
        weight,
        labInvestigationsImg,
      });
      console.log(res.data);
      // dispatch({
      //   type: MAKE_APPOINTMENT,
      //   payload: formData,
      // });
      dispatch(getDoctorWiseVisits(mother));
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

export const create2ndMedicalVisit =
  (mother, helper, dateOfVisit, sfhMeasurement, weight, labInvestigationsImg) =>
  async (dispatch) => {
    try {
      const res = await axios.post(API_BASE_URL + "medicalVisit", {
        mother,
        helper,
        dateOfVisit,
        sfhMeasurement,
        weight,
        labInvestigationsImg,
      });
      console.log(res.data);
      // dispatch({
      //   type: MAKE_APPOINTMENT,
      //   payload: formData,
      // });
      dispatch(getDoctorWiseVisits(mother));
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

export const create3rdMedicalVisit =
  (
    mother,
    helper,
    dateOfVisit,
    preeclampsia,
    anemia,
    IUGR,
    weight,
    labInvestigationsImg
  ) =>
  async (dispatch) => {
    console.table({
      mother,
      helper,
      dateOfVisit,
      preeclampsia,
      anemia,
      IUGR,
      weight,
      labInvestigationsImg,
    });
    try {
      const res = await axios.post(API_BASE_URL + "medicalVisit", {
        mother,
        helper,
        dateOfVisit,
        preeclampsia,
        anemia,
        IUGR,
        weight,
        labInvestigationsImg,
      });
      console.log(res.data);
      // dispatch({
      //   type: MAKE_APPOINTMENT,
      //   payload: formData,
      // });
      dispatch(getDoctorWiseVisits(mother));
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

export const create4thMedicalVisit =
  (mother, helper, dateOfVisit, foetalPosition, weight, birthPlanImage) =>
  async (dispatch) => {
    try {
      const res = await axios.post(API_BASE_URL + "medicalVisit", {
        mother,
        helper,
        dateOfVisit,
        foetalPosition,
        weight,
        birthPlanImage,
        foetalLie: "some value ",
      });
      console.log(res.data);
      // dispatch({
      //   type: MAKE_APPOINTMENT,
      //   payload: formData,
      // });
      dispatch(getDoctorWiseVisits(mother));
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

export const getDoctorWiseVisits = (motherId) => async (dispatch) => {
  try {
    const res = await axios.post(
      API_BASE_URL + "medicalVisit/doctorWiseVisit",
      { motherId }
    );
    console.log(res.data);
    dispatch({
      type: GET_DOCTOR_WISE_VISITS,
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

export const getVisitById = (visitId) => async (dispatch) => {
  try {
    const res = await axios.get(API_BASE_URL + `medicalVisit?_id=${visitId}`);
    console.log("Inside Action");
    console.log(res.data);
    dispatch({
      type: GET_VISIT_BY_ID,
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
