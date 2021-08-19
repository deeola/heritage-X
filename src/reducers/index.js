import { combineReducers } from "redux";
import Continentreducer from "./ContinentReducer";
import Countries from "./CountriesReducers";

const allReducers = combineReducers({
  Countries,
  Continentreducer,
});

export default allReducers;
