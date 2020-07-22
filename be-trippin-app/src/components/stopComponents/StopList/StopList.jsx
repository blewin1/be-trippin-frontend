import React from 'react'
import StopCard from '../StopCard/StopCard'
import './stopList.scss'

const StopList = ({ trip, setTrip }) => {
    return (
        <div className="stop-list">
            {trip.stops.map((stop, i) => <StopCard stop={stop} tripId={trip._id} setTrip={setTrip} key={i} />)}
        </div>
    )
}

export default StopList
