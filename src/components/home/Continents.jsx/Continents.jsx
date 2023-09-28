import React,{useContext} from "react";
import heritageContext from "../../context/Heritage/heritageContext";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import "./Continents.css";
import Card from "../../core/Card/Card";

export function Continents({
  countries,
  getAll
}) {


    const HeritageContext = useContext(heritageContext);
    const { storeTaskInLocalStorages, storeTaskInLocalStoragesVisited } = HeritageContext;

  return (
    <section className="base">
      <div className="countries">
        {countries.map((country) => {
          return (
            <Card
              key={uuid()}
              stateName={country.states[0].name}
              countryName={country.name}
              countryUrl={country.image_url}
              countryId={country.id}
              onStoreVisited={ () => storeTaskInLocalStorages(country)}
              onStoreLocalStorage={() => storeTaskInLocalStoragesVisited(country)}
              getAll={getAll}
            />
          );
        })}
      </div>
    </section>
  );
}

Continents.propTypes = {
  countries: PropTypes.array,
  onStoreVisited: PropTypes.func,
  getAll: PropTypes.func,
};

Continents.defaultProps = {
  countries: [],
  onStoreVisited: null,
  getAll: null,
};
