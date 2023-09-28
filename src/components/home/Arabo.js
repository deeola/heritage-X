import React, { useState, useEffect } from "react";

import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Continents } from "./Continents.jsx/Continents";

function Arabo() {


  const [Alldata, setAlldata] = useState([]);

  const getArabo = async () => {
    const res = await fetch("./data.json");
    const items = await res.json();
    const Arabo = items.filter((item) => item.region.name === "Arab States");

    setAlldata(Arabo);
  };

  useEffect(() => {
    getArabo();
    // eslint-disable-next-line
  }, []);

  return (
    <div className=".afro-container ">
      <Navbar />
      <Continents
        countries={Alldata}
        getAll={getArabo}
      />
      <Footer />
    </div>
  );
}

export default Arabo;

