import React,{useContext} from "react";
import ExploreCards from "./ExploreCards/ExploreCards";
import heritageContext from "../context/Heritage/heritageContext";



function Body() {

  const HeritageContext = useContext(heritageContext);
  const {
    Asia,
    getAsia,
    getAfrica,
    Africa,
    Europe,
    getEurope,
    Latin,
    getLatin,
    Arab,
    getArab,
  } = HeritageContext;

 

  return (
    <main>
      <ExploreCards getContinent={getAfrica} continent={Africa} names={"Africa"}subtext={'Wildlife, Medinas and Ancient Wonders'} />
      <ExploreCards getContinent={getAsia} continent={Asia} names={"Asia and the Pacific"} subtext={'Explore Asia and the Pacific'} />
      <ExploreCards getContinent={getEurope} continent={Europe} names={"Europe and North America"} subtext={'Historic Architecture and stunning landscapes'}/>
      <ExploreCards getContinent={getArab} continent={Arab} names={'Arab States'} subtext={'Rich in History and beauty'} />
      <ExploreCards getContinent={getLatin} continent={Latin} names={'Latin America and the Caribbean'} subtext={' Amazing landscape and beautiful marine Wildlife'} />
      

    </main>
  );
}

export default Body;
