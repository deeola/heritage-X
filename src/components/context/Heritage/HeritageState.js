import React, { useReducer, useState,useEffect } from "react";
import heritageContext from "./heritageContext";
import heritageReducer from "./heritageReducer";
import { get_Data, set_loading,get_Natural } from "../types";
import axios from 'axios'

const HeritageState = (props) => {
  //INITIAL STATE
  const initialState = {
    data: [],
    country:[],
    mixed:[],
    natural:[],
    cultural:[],
    africa:[],
    arabs:[],
    asia:[],
    europe:[],
    latin:[],
    loading: false
  };

  const [Naturals, SetNaturals] = useState([]);
  const [Mixed, SetMixed] = useState([]);
  const [Culture, SetCulture] = useState([]);
  const [loading, setLoading] = useState(false)

  const [state, dispatch] = useReducer(heritageReducer, initialState);

  //Natural

  const getNatural = async() => {
    setLoading(true);
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const Natural =  items.filter(item => item.category.name === 'Natural');
    SetNaturals(Natural);
    setLoading(false)
    console.log(Naturals)
    
  }

  //Mixed

  const getMixed = async() => {
    setLoading(true);
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const Mixeds =  items.filter(item => item.category.name === 'Mixed');
    SetMixed(Mixeds);
    setLoading(false)
  }

  //Culture

  const getCulture = async() => {
    setLoading(true);
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const Cultures =  items.filter(item => item.category.name === 'Cultural');
    SetCulture(Cultures);
    setLoading(false)
  }

  
  const  getDatas = async() => {
    setloading();
    const res =  await  fetch('./data.json');

    const items = await res.json();

    console.log(items)

    dispatch({
        type: get_Data,
        payload: items,
    });
    
}



const clickMe = () => {
    getDatas();
}



  //SET LOADING
  const setloading = () => dispatch({ type: set_loading });

  
  //RETURN
  return (
    <heritageContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        natural : state.natural,
        // getdata,
        getDatas,
        clickMe,
        getNatural,
        Naturals,
        loading,
        getMixed,
        Mixed,
        Culture,
        getCulture

      }}
    >
      {props.children}
    </heritageContext.Provider>
  );
};

export default HeritageState;