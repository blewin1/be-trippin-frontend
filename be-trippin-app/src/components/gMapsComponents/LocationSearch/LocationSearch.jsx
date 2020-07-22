import React from 'react'
import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete'
import 'react-google-places-autocomplete/dist/index.min.css';
import "./LocationSearch.scss";

const LocationSearch = ({ addStop }) => {
    const setStop = async address => {
        try {
            console.log(address.place_id)
            const a = await geocodeByPlaceId(address.place_id);
            let latlng = await getLatLng(a[0])
            console.log(latlng)
            addStop(latlng)
        } catch (err) {
            console.log('Failed to set Location', err)
        }
    }
    return (
        <div className="google-map-form">
            <GooglePlacesAutocomplete
                onSelect={setStop}
                placeholder="Add a Stop"
                displayFromSuggestionSelected={() => ''}
            />
        </div>
    )
}

export default LocationSearch
