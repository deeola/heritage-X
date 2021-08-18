import { combineReducers } from "redux";
import Countries from "./CountriesReducers";

const allReducers = combineReducers({
  Countries,
});

export default allReducers;
