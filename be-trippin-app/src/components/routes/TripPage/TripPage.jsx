import React, { useState } from "react";
import PackingList from "../../sideWindows/PackingList/PackingList";
import SuitcaseButton from "../../sideWindows/PackingList/SuitcaseButton";
import CountdownTimer from "../../sideWindows/CountdownTimer/CountdownTimer";
import CountdownButton from "../../sideWindows/CountdownTimer/CountdownButton";
import Map from '../../gMapsComponents/Map/Map'
import LocationSearch from "../../gMapsComponents/LocationSearch/LocationSearch";
import "./TripPage.scss";

const TripPage = () => {
    const [packingListOpen, setPackingListOpen] = useState(false);
    const [countdownOpen, setCountdownOpen] = useState(false);
    const [stops, setStops] = useState([])

    const addStop = (latlng) => {
        setStops([...stops, latlng])
    }


    const handleSuitcaseButton = () => {
        setPackingListOpen(!packingListOpen);
    };

    let showPackingList = null;
    if (packingListOpen) {
        showPackingList = <PackingList />;
    }

    const handleCountdownButton = () => {
        setCountdownOpen(!countdownOpen);
    };

    let showCountdownTimer = null;
    if (countdownOpen) {
        showCountdownTimer = <CountdownTimer />;
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
            <CountdownButton countdownClickHandler={handleCountdownButton} />
            {showCountdownTimer}
        </div>
    );
};

export default TripPage;
