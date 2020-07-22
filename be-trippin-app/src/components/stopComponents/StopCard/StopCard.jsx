import React from 'react'
import ListForm from '../../shared/ListForm/ListForm'
import axios from 'axios'
import apiUrl from '../../../apiConfig'
import './stopCard.scss'

const StopCard = ({ stop, setTrip, tripId }) => {

    const removeStop = async () => {
        try {
            const tripData = await axios.delete(`${apiUrl}/trips/${tripId}/removeStop/${stop._id}`);
            console.log('Got Trip', tripData)
            setTrip(tripData.data.trip);
        } catch (err) {
            console.error('ERROR GETTING TRIPS', err);
        }
    }
    return (
        <div className='stop-card'>
            <h3>{stop.name}</h3>
            <ul>
                {stop.thingsToDo.map((el, i) => <span className="list-item" key={i}>{el}</span>)}
            </ul>
            <br />
            <span className='remove' onClick={removeStop}>Remove Stop</span>
            {/* <ListForm /> */}
        </div>
    )
}

export default StopCard
