import React, { useReducer, useState,useEffect } from "react";
import heritageContext from "./heritageContext";
import heritageReducer from "./heritageReducer";
import { get_Data, set_loading,get_Natural } from "../types";
import {useHistory} from 'react-router';


const HeritageState = (props) => {

  const history = useHistory();

  


  
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
  const [Alldata, setAlldata] = useState([])


  

  const [state, dispatch] = useReducer(heritageReducer, initialState);

  //GET ALL DATA

  const getAll = async() => {
    setLoading(true);
    const res =  await  fetch('./data.json');
    const items = await res.json();
    setAlldata(items)
    setLoading(false)
  }

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
    const Num1 = Math.floor(Math.random()*Africas.length) 
    const Num2 = Math.floor(Math.random()*Africas.length) 
    const Num3 = Math.floor(Math.random()*Africas.length) 

    setAfrica([Africas[Num1], Africas[Num2],Africas[Num3]])
    setLoading(false)
  }

  //GET AFR0 DATA
  


  //GET ASIA DATA
  const getAsia = async () => {
    setLoading(true)
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const Asia =  items.filter(item => item.region.name === 'Asia and the Pacific');

    //GET RANDOM NUMBERS
    const Num1 = Math.floor(Math.random()*Asia.length) 
    const Num2 = Math.floor(Math.random()*Asia.length)  
    const Num3 = Math.floor(Math.random()*Asia.length) 

    setLatin([Asia[Num1], Asia[Num2],Asia[Num3]]);
    setLoading(false);
  }



  //GET Latin DATA
  const getLatin = async () => {
    setLoading(true)
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const Latins =  items.filter(item => item.region.name === 'Latin America and the Caribbean');

    //GET RANDOM NUMBERS
    const Num1 = Math.floor(Math.random()*Latins.length) 
    const Num2 = Math.floor(Math.random()*Latins.length) 
    const Num3 = Math.floor(Math.random()*Latins.length)  

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
    const Num1 = Math.floor(Math.random()*Europes.length) 
    const Num2 = Math.floor(Math.random()*Europes.length) 
    const Num3 = Math.floor(Math.random()*Europes.length) 

    setEurope([Europes[Num1], Europes[Num2],Europes[Num3]])
    setLoading(false)
  }

  //GET Arab DATA
  const getArab = async () => {
    setLoading(true)
    const res =  await  fetch('./data.json');
    const items = await res.json();
    const Arabs =  items.filter(item => item.region.name === 'Arab States');

    //GET RANDOM NUMBERS
    const Num1 = Math.floor(Math.random()*Arabs.length)
    const Num2 = Math.floor(Math.random()*Arabs.length) 
    const Num3 = Math.floor(Math.random()*Arabs.length) 

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


  //STORE BUCKET LIST
    const storeTaskInLocalStorages = (task) => {
      let buckets = [];
      if (localStorage.getItem("buckets") === null) {
        buckets = [];
      } else {
        buckets = JSON.parse(localStorage.getItem("buckets"));
      }
    
      if (buckets.indexOf(task) == -1) {
        buckets.push(task);
      }
    
  localStorage.setItem("buckets", JSON.stringify(buckets));
  }

  //STORE VISITED

  const storeTaskInLocalStoragesVisited = (task) => {
      let visited = [];
      if (localStorage.getItem("visited") === null) {
        visited = [];
      } else {
        visited = JSON.parse(localStorage.getItem("visited"));
      }
    
      if (visited.indexOf(task) == -1) {
        visited.push(task);
      }
    
    localStorage.setItem("visited", JSON.stringify(visited));
  }

  // Navigation

  const [hamOpen, setHamOpen] = useState(false);
  const [closeIcon, setCloseIcon] = useState(false);
  const [openIcon, setOpenIcon] = useState(false);

  const ulDisplay = () => {
    return hamOpen ? {} : { display: "none" };
  };

  //DISPLAY CLOSE ICON
  const DisplayCloseIcon = () => {
    return closeIcon ? { display: "block" } : { display: "none" };
  };

  //DISPLAY OPEN ICON
  const DisplayOpenIcon = () => {
    return openIcon ? { display: "none" } : { display: "block" };
  };

  //MENU STYLE
  const displayMenu = () => {
    setHamOpen(true);
    setCloseIcon(true);
    setOpenIcon(true);
  };

  const closeMenu = () => {
    setHamOpen(false);
    setCloseIcon(false);
    setOpenIcon(false);
  };

  //LOADING
  const [isSubmitted, setIsSubmitted] = useState(false);


  
  
  function Submitform() {
    
    setIsSubmitted(true);
  //   history.push({
  //     pathname:  "/"
  //  });

  console.log(history)
  }

  




  
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
        getArab,
        Alldata,
        getAll,
        storeTaskInLocalStorages,
        storeTaskInLocalStoragesVisited,
        DisplayOpenIcon,
        DisplayCloseIcon,
        ulDisplay,
        closeMenu,
        displayMenu,
        isSubmitted,
        Submitform
      }}
    >
      {props.children}
    </heritageContext.Provider>
  );
};

export default HeritageState;