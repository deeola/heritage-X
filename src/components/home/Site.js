import React, { useEffect, useContext, useState } from "react";
import heritageContext from "../context/Heritage/heritageContext";
import uuid from "react-uuid";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

function Site({ match }) {
  const HeritageContext = useContext(heritageContext);
  const { storeTaskInLocalStoragesVisited, storeTaskInLocalStorages } =
    HeritageContext;

  const [Alldata, setAlldata] = useState([]);

  const getAll = async () => {
    const res = await fetch("./data.json");
    const items = await res.json();

    const id = match.params.id;
    const newdata = items.filter((item) => item.id === Number(id));

    setAlldata(newdata);
  };

  useEffect(() => {
    getAll();

    // eslint-disable-next-line
  }, []);

  //MAPS

  return (
    <div className="afro-container">
      <Navbar />
      {Alldata.length !== 0 &&
        Alldata.map((item) => {
          const Laty = Number(item.latitude);
          const Long = Number(item.longitude);

          function MyMap() {
            const BerlinDessau = [
              {
                lat: Laty,
                lng: Long,
                parkId: 1,
              },
            ];
            return (
              <GoogleMap
                defaultZoom={7}
                defaultCenter={{ lat: Laty, lng: Long }}
              >
                {BerlinDessau.map((city) => (
                  <Marker
                    key={city.parkId}
                    position={{ lat: city.lat, lng: city.lng }}
                  />
                ))}
                {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} /> */}
              </GoogleMap>
            );
          }

          const WrappedMap = withScriptjs(withGoogleMap(MyMap));

          return (
            <div className="siteDetailsContainer" key={uuid()}>
              <div className="site-upper-div">
                <div className="first-details-container">
                  <h3 className="siteName">{item.name}</h3>
                  <div className="site-country-region">
                    <p className="siteCountry">{item.states[0].name}</p>
                    <p className="siteRegion">{item.region.name}</p>
                  </div>
                  <div className="site-image">
                    <img src={item.image_url} alt=""></img>
                  </div>
                  <div className="site-description">
                    <h5>THE SITE</h5>
                    <p className="site-description-text">
                      {item.short_description}
                    </p>
                  </div>
                </div>
                <div className="second-details-div">
                  <div className="subCategory">
                    <div className="sub-sub-category">
                      <i className="fas fa-box"></i>
                      <p className="details-title">CATEGORY</p>
                    </div>
                    <p className="details-text">{item.category.name}</p>
                  </div>
                  <div className="subCategory">
                    <div className="sub-sub-category">
                      <i className="fas fa-location-arrow"></i>
                      <p className="details-title">COUNTRY</p>
                    </div>
                    <p className="details-text">{item.states[0].name}</p>
                  </div>
                  <div className="subCategory">
                    <div className="sub-sub-category">
                      <i className="far fa-calendar-alt"></i>
                      <p className="details-title">DATE INSCRIBED</p>
                    </div>
                    <p className="details-text">{item.date_inscribed}</p>
                  </div>
                  <div className="subCategory">
                    <div className="sub-sub-category">
                      <i className="fas fa-globe"></i>
                      <p className="details-title">REGION</p>
                    </div>
                    <p className="details-text">{item.region.name}</p>
                  </div>
                  <div className="subCategory">
                    <div className="sub-sub-category">
                      <i className="fas fa-closed-captioning"></i>
                      <p className="details-title">COUNTRY CODE</p>
                    </div>
                    <p className="details-text">
                      {item.iso_codes[0].alpha_2_code}
                    </p>
                  </div>
                  <div className="subCategory">
                    <div className="sub-sub-category">
                      <i className="fas fa-grip-lines"></i>
                      <p className="details-title">Latitude</p>
                    </div>
                    <p className="details-text">{item.latitude}</p>
                  </div>
                  <div className="subCategory">
                    <div className="sub-sub-category">
                      <i className="fas fa-grip-lines-vertical"></i>
                      <p className="details-title">Longitude</p>
                    </div>
                    <p className="details-text">{item.longitude}</p>
                  </div>
                  <div className="Save-container">
                    <div
                      className="bucketlist"
                      onClick={() => {
                        storeTaskInLocalStorages(item);
                      }}
                    >
                      Save to Bucketlist
                    </div>
                    <div
                      className="visited"
                      onClick={() => {
                        storeTaskInLocalStoragesVisited(item);
                      }}
                    >
                      Save to Visited
                    </div>
                  </div>
                </div>
              </div>

              <div className="mapContainerDiv">
                <WrappedMap
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${`AIzaSyDe3n2kCyxwMV82eyQtemz11qqMDrhsfto`}`}
                  loadingElement={<div style={{ height: "100%" }} />}
                  containerElement={<div style={{ height: "100%" }} />}
                  mapElement={<div style={{ height: "100%" }} />}
                />
              </div>
            </div>
          );
        })}
      <Footer />
    </div>
  );
}

export default Site;
