/* global google */
import React, { useEffect, useState } from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    DirectionsRenderer,
    directionsService
} from "react-google-maps";

function MyDirectionsRenderer(props) {
    const [directions, setDirections] = useState(null);
    const { origin, destination, travelMode } = props;

    useEffect(() => {
        const directionsService = new google.maps.DirectionsService();
        directionsService.route(
            {
                origin: new google.maps.LatLng(origin.lat, origin.lng),
                destination: new google.maps.LatLng(destination.lat, destination.lng),
                travelMode: travelMode
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    setDirections(result);
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
    }, [directions]);

    return (
        <React.Fragment>
            {directions && <DirectionsRenderer directions={directions} />}
        </React.Fragment>
    );
}

const MapWithAMarker = withGoogleMap(props => {


    return (
        <GoogleMap
            defaultZoom={3}
            defaultCenter={{ lat: 42, lng: -97 }}
        >
            {props.stops.map((el, i) => <Marker key={i} position={el} />)}
            {/* <Marker position={props.stop} /> */}
            {props.stops.length >= 2 ?
                <MyDirectionsRenderer
                    origin={props.stops[0]}
                    destination={props.stops[props.stops.length - 1]}
                    travelMode={google.maps.TravelMode.DRIVING}
                />
                : ''
            }

        </GoogleMap>
    )
}
);


export default MapWithAMarker;
