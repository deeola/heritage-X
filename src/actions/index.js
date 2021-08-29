import {
  GET_AFRICA,
  GET_ARABS,
  GET_ASIA,
  GET_COUNTRY,
  GET_EUROPE,
  GET_LATINO,
  SEARCH_ERRORS,
  SET_LOADING,
} from "./types";

export const getCountries = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("./data");

    const data = await res.json();

    dispatch({
      type: GET_COUNTRY,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_ERRORS,
      payload: error.response,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// export const Arabs = () => {
//   return {
//     type: "ARAB",
//   };
// };

// export const Africa = () => {
//   return {
//     type: "AFRICA",
//   };
// };

// export const Latino = () => {
//   return {
//     type: "LATINO",
//   };
// };

// export const Europe = () => {
//   return {
//     type: "EUROPE",
//   };
// };

// export const Asia = () => {
//   return {
//     type: "ASIA",
//   };
// };

// export const Continent = (continent) => {
//   return {
//     type: "CONTINENT",
//     payload: continent,
//   };
// };
