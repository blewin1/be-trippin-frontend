import React from 'react'
import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete'
import 'react-google-places-autocomplete/dist/index.min.css';


const LocationSearch = ({ addStop }) => {
    const setStop = async address => {
        try {
            console.log(address.structured_formatting.main_text)
            const a = await geocodeByPlaceId(address.place_id);
            const latlng = await getLatLng(a[0])
            const stop = {
                ...latlng,
                name: address.structured_formatting.main_text
            }
            console.log(stop)
            addStop(stop)
        } catch (err) {
            console.log('Failed to set Location', err)
        }
    }
    return (
        <div>
            <GooglePlacesAutocomplete
                onSelect={setStop}
                placeholder="Add a Stop"
                displayFromSuggestionSelected={() => ''}
            />
        </div>
    )
}

export default LocationSearch
