import React, { useState } from "react";
import PackingList from "../../sideWindows/PackingList/PackingList";
import SuitcaseButton from "../../sideWindows/PackingList/SuitcaseButton";
import CountdownTimer from "../../sideWindows/CountdownTimer/CountdownTimer";
import Map from '../../gMapsComponents/Map/Map'
import LocationSearch from "../../gMapsComponents/LocationSearch/LocationSearch";
import "./TripPage.scss";

const TripPage = () => {
    const [packingListOpen, setPackingListOpen] = useState(false);
    const [stops, setStops] = useState([])

    const handleSuitcaseButton = () => {
        setPackingListOpen(!packingListOpen);
    };

    const addStop = (latlng) => {
        setStops([...stops, latlng])
    }

    let showPackingList = null;
    if (packingListOpen) {
        showPackingList = <PackingList />;
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
            <CountdownTimer />
        </div>
    );
};

export default TripPage;
