import {
  GET_HELPER_APPOINTMENTS,
  GET_HELPER_APPOINTMENTS_FAIL,
} from "../actions/types";

const initialState = {
  helperAppointments: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_HELPER_APPOINTMENTS:
      return { ...state, helperAppointments: [...payload.data] };
    case GET_HELPER_APPOINTMENTS_FAIL:
      return { ...state, helperAppointments: null };

    default:
      return state;
  }
}
