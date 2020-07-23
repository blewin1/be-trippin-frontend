import React, { useState } from 'react'
import axios from 'axios';
import apiUrl from '../../../apiConfig';

const AddTrip = ({ history }) => {
    const [tripName, setTripName] = useState('')

    const handleChange = (event) => {
        setTripName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const trip = await axios.post(`${apiUrl}/trip`, { name: tripName });
            console.log('Got Trip', trip)
            setTripName("");
            console.log(trip.data.trip._id)
            history.push(`/trip/${trip.data.trip._id}`)
        } catch (err) {
            console.error('Error Creating Trip:', err);
        }
    };


    return (
        <form className='add-trip' onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Name your trip to begin!"
                onChange={handleChange}
                value={tripName}
            />
            <input type="submit" />
        </form>
    )
}

export default AddTrip
