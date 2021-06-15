import React, { useReducer, useState,useEffect } from "react";
import heritageContext from "./heritageContext";
import heritageReducer from "./heritageReducer";
import { get_Data, set_loading,get_Natural } from "../types";
import axios from 'axios'

const HeritageState = (props) => {
  //INITIAL STATE
  const initialState = {
    data: [],
    countries:[],
    categories:[],
    regions:[],
    loading: false
  };

  const [Countries, SetCountries] = useState([]);
  const [Categories, SetCategories] = useState([]);
  const [Regions, SetRegions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState([])

  const [state, dispatch] = useReducer(heritageReducer, initialState);

  //Natural

  const getRegion = async(text) => {
    setLoading(true);
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const regions =  items.filter(item => item.region.name === text);
    SetRegions(regions)
    setDisplay(regions)
    setLoading(false)
    
  }

  //Categories

  const getCategory = async(text) => {
    setLoading(true);
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const categories =  items.filter(item => item.category.name === text );
    SetCategories(categories)
    setDisplay(categories)
    setLoading(false)
  }



  //Country

  const getCountry = async(text) => {
    setLoading(true);
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const Countries =  items.filter(item => item.states[0].name === text);
    SetCountries(Countries)
    setDisplay(Countries)
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
        getRegion,
        loading,
        getCategory,
        getCountry,
        Countries,
        Categories,
        Regions,
        display
      }}
    >
      {props.children}
    </heritageContext.Provider>
  );
};

export default HeritageState;