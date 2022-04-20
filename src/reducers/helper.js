import {
  GET_HELPER_APPOINTMENTS,
  GET_HELPER_APPOINTMENTS_FAIL,
  GET_HELPER_ANC_VISITS,
  GET_HELPER_ANC_VISITS_FAIL,
} from "../actions/types";

const initialState = {
  helperAppointments: [],
  helperVisits: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_HELPER_APPOINTMENTS:
      return { ...state, helperAppointments: [...payload.data] };
    case GET_HELPER_APPOINTMENTS_FAIL:
      return { ...state, helperAppointments: null };
    case GET_HELPER_ANC_VISITS:
      return { ...state, helperVisits: [...payload.data] };
    case GET_HELPER_ANC_VISITS_FAIL:
      return { ...state, helperVisits: null };

    default:
      return state;
  }
}
