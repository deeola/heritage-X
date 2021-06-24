import React, { useContext } from "react";
import heritageContext from '../context/Heritage/heritageContext';

function Layer() {
    const HeritageContext = useContext(heritageContext);
    const {ulDisplay} = HeritageContext;
  
  return <div className="layer" style={ulDisplay()}></div>;
}

export default Layer;