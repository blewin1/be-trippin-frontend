//AIzaSyDb1WyAkq9mjuRJMpMeTK4K9nJu9AWAemE

import React, { useState } from "react";
import "./map.scss";
import MapWithAMarker from "./MapTest";
import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete'
import 'react-google-places-autocomplete/dist/index.min.css';

const Map = () => {

    const [locations, setLocations] = useState([])

    const setStop = async address => {
        try {
            console.log(address.place_id)
            const a = await geocodeByPlaceId(address.place_id);
            let latlng = await getLatLng(a[0])
            console.log(latlng)
            setLocations([...locations, latlng])
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="map">
            <GooglePlacesAutocomplete
                onSelect={setStop}
                placeholder="Add a Stop"
                displayFromSuggestionSelected={() => ''}
            />
            <MapWithAMarker
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `500px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                stops={locations}
            />

        </div>
    );
};

export default Map;
