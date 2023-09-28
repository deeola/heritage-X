import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "../../shared/Navbar";
import { Continents } from "../Continents.jsx/Continents";
import Footer from "../../shared/Footer";
import { useHistory } from "react-router-dom";


const Allcontinents = ({ match }) => {
    const { continent } = match.params;
    console.log(continent)
  const [Alldata, setAlldata] = useState([]);

  let history = useHistory ();

  console.log(history.location.pathname)
  let str = history.location.pathname;
  let result = str.replace("/", "");


  const getAfro = async () => {
    const res = await fetch("./data.json");
    const items = await res.json();
    const Continents = items.filter((item) => item.region.name === result);

    setAlldata(Continents);
  };

  useEffect(() => {
    getAfro();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Navbar />
      <Continents countries={Alldata} getAll={getAfro} />
      <Footer />
    </div>
  );
};

Allcontinents.propTypes = {};

export default Allcontinents;
