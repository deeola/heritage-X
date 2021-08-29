// import Africa from "../components/home/Africa";

import {
  SET_LOADING,
  GET_AFRICA,
  GET_COUNTRY,
  SEARCH_ERRORS,
} from "../actions/types";

const initialState = {
  continent: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        continent: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SEARCH_ERRORS:
      console.error(action.payload);

      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
