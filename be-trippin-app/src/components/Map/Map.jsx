//AIzaSyDb1WyAkq9mjuRJMpMeTK4K9nJu9AWAemE

import React, { useState } from "react";
import "./map.scss";
import MapWithAMarker from "./MapTest";
import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete'
import 'react-google-places-autocomplete/dist/index.min.css';

const Map = () => {

    const [locations, setLocations] = useState([])
    const [location, setLocation] = useState([])

    const setStop = async address => {
        try {
            console.log(address.place_id)
            const a = await geocodeByPlaceId(address.place_id);
            let latlng = await getLatLng(a[0])
            console.log(latlng)
            setLocations([...locations, latlng])
            setLocation(latlng)
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
            // apiKey='AIzaSyDb1WyAkq9mjuRJMpMeTK4K9nJu9AWAemE'
            />
            <MapWithAMarker
                // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDb1WyAkq9mjuRJMpMeTK4K9nJu9AWAemE&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `500px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                stops={locations}
            // stop={location}
            />

        </div>
    );
};

export default Map;
