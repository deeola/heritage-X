import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

function MyMap() {
  const BerlinDessau = [
    {
      lat: 52.520008,
      lng: 13.404954,
      parkId: 1,
      name: "berlin",
    },
    {
      lat: 51.83864,
      lng: 12.24555,
      parkId: 2,
      name: "dessau",
    },
  ];
  return (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{ lat: 52.520008, lng: 13.404954 }}
    >
      {BerlinDessau.map((city) => (
        <Marker key={city.parkId} position={{ lat: city.lat, lng: city.lng }} />
      ))}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(MyMap));

function Map() {
  return (
    <section className="mapContainerDiv">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </section>
  );
}

export default Map;