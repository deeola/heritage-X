import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { Text } from "../Text/Text";
import "./Card.css";

const Card = ({
  onStoreLocalStorage,
  onStoreVisited,
  getAll,
  countryId,
  stateName,
  countryName,
  countryUrl,
  key,
}) => {
  return (
    <div>
      <div className="card" key={key}>
        <div className="card-image">
          <img className="img" alt={countryName} src={countryUrl} />
        </div>
        <div className="card-text">
          <Text className="text" text={stateName} />
          <Text className="site-text" text={countryName} />
          <div >
            <Link className="linktext" onClick={getAll} to={`${countryId}`}>
              Details
            </Link>
          </div>
          <Button text={"Add to Bucketlist"} onClick={onStoreLocalStorage} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};
Card.defaultProps = {};

export default Card;
