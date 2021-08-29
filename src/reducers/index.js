import { combineReducers } from "redux";
import ContinentReducer from "./ContinentReducer";
import Countries from "./CountriesReducers";

const allReducers = combineReducers({
  continent: ContinentReducer,
});

export default allReducers;
