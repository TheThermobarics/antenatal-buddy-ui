import {
  GET_ALL_DOCTORS,
  GET_ALL_DOCTORS_FAIL,
  GET_APPOINTMENTS,
  GET_APPOINTMENTS_FAIL,
  MAKE_APPOINTMENT,
  CLEAR_APPOINTMENTS,
} from "../actions/types";

const initialState = {
  doctors: null,
  appointments: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_DOCTORS:
      console.log("---------------");
      console.log(payload.data);
      return { ...state, doctors: [...payload.data] };
    case GET_ALL_DOCTORS_FAIL:
      return { ...state, doctors: null };
    case GET_APPOINTMENTS:
      return { ...state, appointments: [...payload.data] };
    case GET_APPOINTMENTS_FAIL:
      return { ...state, appointments: null };
    case MAKE_APPOINTMENT:
      return { ...state, appointments: [payload, ...state.appointments] };
    case CLEAR_APPOINTMENTS:
      return { ...state, appointments: [] };
    default:
      return state;
  }
}
