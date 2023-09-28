import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { Text } from "../../core/Text/Text";
import { Continents } from "../Continents.jsx/Continents";

const ExploreCards = ({ getContinent, continent, names, subtext }) => {

    useEffect(() => {
        getContinent();
        // eslint-disable-next-line
      }, []);

  return (
    <section>
      <Text text={`Explore ${names}`} className="explore" />
      <Text
        className="explore-subtext"
        text={subtext}
      />
      <Continents countries={continent} getAll={getContinent} />
      <Link className="seeMoreLink" to={`/${names}`}>
        <p className="seeMore">
          See More From {`${names}`}<i className="fas fa-chevron-right"></i>
        </p>{" "}
      </Link>
    </section>
  );
};

ExploreCards.propTypes = {};

export default ExploreCards;
