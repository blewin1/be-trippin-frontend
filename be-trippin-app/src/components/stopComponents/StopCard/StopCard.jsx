import React from 'react'
import ListForm from '../../shared/ListForm/ListForm'
import axios from 'axios'
import apiUrl from '../../../apiConfig'
import './stopCard.scss'
import EditableText from '../../shared/EditableText/EditableText'

const StopCard = ({ stop, setTrip, refreshTrip, tripId, reorder, first, last }) => {

    const removeStop = async () => {
        try {
            const tripData = await axios.delete(`${apiUrl}/trips/${tripId}/removeStop/${stop._id}`);
            setTrip(tripData.data.trip);
        } catch (err) {
            console.error('ERROR GETTING TRIPS', err);
        }
    }
    const updateStopName = async (name) => {
        try {
            const tripData = await axios.put(`${apiUrl}/stops/${stop._id}/`, { name: name });
            refreshTrip();
        } catch (err) {
            console.error('ERROR UPDATING STOP NAME', err);
        }
    }

    return (
        <div className='stop-card'>
            <EditableText value={stop.name} className='stop-name' handleSubmit={updateStopName} />
            {/* <h3 className="stop-name">{stop.name}</h3> */}
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
