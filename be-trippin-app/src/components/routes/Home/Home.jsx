import React from "react";
import "../Home/home.scss";
import AddTrip from "../../homepageComponents/AddTrip/AddTrip";
import TripList from "../../homepageComponents/TripList/TripList";

const Home = ({ history }) => {

  return (
    <div className="homepage">
      <span>Logo</span>
      <AddTrip history={history} />
      <TripList history={history} />
    </div>
  );
};

export default Home;
