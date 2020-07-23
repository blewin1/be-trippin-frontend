import React, { useState, useEffect } from "react";
import PackingList from "../../sideWindows/PackingList/PackingList";
import SuitcaseButton from "../../sideWindows/PackingList/SuitcaseButton";
import CountdownTimer from "../../sideWindows/CountdownTimer/CountdownTimer";
import Map from "../../gMapsComponents/Map/Map";
import LocationSearch from "../../gMapsComponents/LocationSearch/LocationSearch";
import axios from "axios";
import apiUrl from "../../../apiConfig";
import "./TripPage.scss";

const TripPage = ({ match }) => {
  const [packingListOpen, setPackingListOpen] = useState(false);
  const [stops, setStops] = useState([]);
  const [trip, setTrip] = useState({});

  const [departureDateBackend, setDepartureDate] = useState("");

  useEffect(() => {
    refreshTrip();
  }, []);

  const refreshTrip = async () => {
    try {
      const tripData = await axios.get(`${apiUrl}/trips/${match.params.id}`);
      console.log("Got Trip", tripData);
      setTrip(tripData.data.trip);
      setDepartureDate(tripData.data.trip.departureDate);
    } catch (err) {
      console.error("ERROR GETTING TRIPS", err);
    }
  };

  const handleSuitcaseButton = () => {
    setPackingListOpen(!packingListOpen);
  };

  const addStop = (latlng) => {
    setStops([...stops, latlng]);
  };

  let showPackingList = null;
  if (packingListOpen) {
    showPackingList = (
      <PackingList
        match={match}
        packingListData={trip.packingList}
        setTrip={setTrip}
      />
    );
  }

  return (
    <div className="trip-page">
      <SuitcaseButton suitcaseClickHandler={handleSuitcaseButton} />
      {showPackingList}
      <LocationSearch addStop={addStop} />
      <Map
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        stops={stops}
      />
      <span>Add </span>
      <CountdownTimer
        match={match}
        // departureDateBackend={trip.departureDate}
        departureDateBackend={departureDateBackend}
        setTrip={setTrip}
      />
    </div>
  );
};

export default TripPage;
