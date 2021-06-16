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
  const [Africa, setAfrica] = useState([]);
  const [Asia, setAsia] = useState([]);
  const [Latin, setLatin] = useState([]);
  const [Europe, setEurope] = useState([]);
  const [Arab, setArab] = useState([]);


  const [state, dispatch] = useReducer(heritageReducer, initialState);

  //Natural

  const getRegion = async(text) => {
    setLoading(true);
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const regions =  items.filter(item => item.region.name === text);
    SetRegions(regions)
    setLoading(false)
  }

  //Categories

  const getCategory = async(text) => {
    setLoading(true);
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const categories =  items.filter(item => item.category.name === text );
    SetCategories(categories)
    setLoading(false)
  }

  //Country

  const getCountry = async(text) => {
    setLoading(true);
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const Countries =  items.filter(item => item.states[0].name === text);
    SetCountries(Countries)
    setLoading(false)
  }

  //GET AFRICA DATA
  const getAfrica = async () => {
    setLoading(true)
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const Africas =  items.filter(item => item.region.name === 'Africa');

    //GET RANDOM NUMBERS
    const Num1 = Math.floor(Math.random()*Africas.length) + 1 
    const Num2 = Math.floor(Math.random()*Africas.length) + 1 
    const Num3 = Math.floor(Math.random()*Africas.length) + 1 

    setAfrica([Africas[Num1], Africas[Num2],Africas[Num3]])
    setLoading(false)
  }


  //GET ASIA DATA
  const getAsia = async () => {
    setLoading(true)
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const Asia =  items.filter(item => item.region.name === 'Asia and the Pacific');

    //GET RANDOM NUMBERS
    const Num1 = Math.floor(Math.random()*Asia.length) + 1 
    const Num2 = Math.floor(Math.random()*Asia.length) + 1 
    const Num3 = Math.floor(Math.random()*Asia.length) + 1 

    setLatin([Asia[Num1], Asia[Num2],Asia[Num3]])
    setLoading(false)
  }

  //GET Latin DATA
  const getLatin = async () => {
    setLoading(true)
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const Latins =  items.filter(item => item.region.name === 'Latin America and the Caribbean');

    //GET RANDOM NUMBERS
    const Num1 = Math.floor(Math.random()*Latins.length) + 1 
    const Num2 = Math.floor(Math.random()*Latins.length) + 1 
    const Num3 = Math.floor(Math.random()*Latins.length) + 1 

    setAsia([Latins[Num1], Latins[Num2],Latins[Num3]])
    setLoading(false)
  }

  //GET EUROPE DATA
  const getEurope = async () => {
    setLoading(true)
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const Europes =  items.filter(item => item.region.name === 'Europe and North America');

    //GET RANDOM NUMBERS
    const Num1 = Math.floor(Math.random()*Europes.length) + 1 
    const Num2 = Math.floor(Math.random()*Europes.length) + 1 
    const Num3 = Math.floor(Math.random()*Europes.length) + 1 

    setEurope([Europes[Num1], Europes[Num2],Europes[Num3]])
    setLoading(false)
  }

  //GET EUROPE DATA
  const getArab = async () => {
    setLoading(true)
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const Arabs =  items.filter(item => item.region.name === 'Arab States');

    //GET RANDOM NUMBERS
    const Num1 = Math.floor(Math.random()*Arabs.length) + 1 
    const Num2 = Math.floor(Math.random()*Arabs.length) + 1 
    const Num3 = Math.floor(Math.random()*Arabs.length) + 1 

    setArab([Arabs[Num1], Arabs[Num2],Arabs[Num3]])
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
        getDatas,
        clickMe,
        getRegion,
        loading,
        getCategory,
        getCountry,
        Countries,
        Categories,
        Regions,
        Africa,
        getAfrica,
        getAsia,
        Asia,
        Latin,
        getLatin,
        Europe,
        getEurope,
        Arab,
        getArab
      }}
    >
      {props.children}
    </heritageContext.Provider>
  );
};

export default HeritageState;