import { GET_ALL_DOCTORS, GET_ALL_DOCTORS_FAIL } from "../actions/types";

const initialState = {
  doctors: null,
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
    default:
      return state;
  }
}
