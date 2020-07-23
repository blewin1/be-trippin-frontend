import React from 'react'
import ListForm from '../../shared/ListForm/ListForm'
import axios from 'axios'
import apiUrl from '../../../apiConfig'
import './stopCard.scss'

const StopCard = ({ stop, setTrip, tripId, reorder, first, last }) => {

    const removeStop = async () => {
        try {
            const tripData = await axios.delete(`${apiUrl}/trips/${tripId}/removeStop/${stop._id}`);
            setTrip(tripData.data.trip);
        } catch (err) {
            console.error('ERROR GETTING TRIPS', err);
        }
    }
    const reorderDown = () => {

    }
    return (
        <div className='stop-card'>
            <h3 className="stop-name">{stop.name}</h3>
            <ul className="things-to-do">
                {stop.thingsToDo.map((el, i) => <span className="list-item" key={i}>{el}</span>)}
            </ul>
            <span className='remove-stop' onClick={removeStop}>X</span>
            {/* <ListForm /> */}
            {!first ? <span className="reorder-up" onClick={() => reorder('UP')}>^</span> : ''}
            {!last ? <span className="reorder-down" onClick={() => reorder('DOWN')}>v</span> : ''}
        </div>
    )
}

export default StopCard
