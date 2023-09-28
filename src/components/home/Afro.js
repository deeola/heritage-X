import React, { useState, useContext, useEffect } from "react";
import heritageContext from "../context/Heritage/heritageContext";

import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Continents } from "./Continents.jsx/Continents";
import Card from "../core/Card/Card";

function Afro() {
  const HeritageContext = useContext(heritageContext);
 

  const [Alldata, setAlldata] = useState([]);

  const getAfro = async () => {
    const res = await fetch("./data.json");
    const items = await res.json();
    const Africas = items.filter((item) => item.region.name === "Africa");

    setAlldata(Africas);
  };

  useEffect(() => {
    getAfro();
    // eslint-disable-next-line
  }, []);

  return (
    <div className=".afro-container ">
      <Navbar />
      <Continents
        countries={Alldata}
        getAll={getAfro}
      />
      <Footer />
    </div>
  );
}

export default Afro;
