import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../../apiConfig";
import "../Home/home.scss";
import AddTrip from "../../homepageComponents/AddTrip/AddTrip";
import TripList from "../../homepageComponents/TripList/TripList";
import SearchTrip from "../../homepageComponents/SearchTrip/SearchTrip";

const Home = ({ history }) => {
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);

  useEffect(() => {
    const initTripList = async () => {
      const alltrips = await getTrips();
      setFilteredTrips(alltrips);
    };
    // getTrips();
    initTripList();
  }, []);

  const getTrips = async () => {
    try {
      const tripData = await axios.get(`${apiUrl}/trips/`);
      console.log("Got Trips", tripData);
      setTrips(tripData.data.trips);
      return tripData.data.trips;
    } catch (err) {
      console.error("ERROR GETTING TRIPS", err);
    }
  };

  return (
    <div className="homepage">
      <span>Logo</span>
      <AddTrip history={history} />
      <SearchTrip trips={trips} setFilteredTrips={setFilteredTrips} />
      <TripList history={history} trips={filteredTrips} getTrips={getTrips} />
    </div>
  );
};

export default Home;
