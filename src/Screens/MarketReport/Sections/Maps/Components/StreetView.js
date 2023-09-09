import { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, StreetViewPanorama } from '@react-google-maps/api';

const containerStyle = {
    width: '800px',
    height: '800px'
};

console.log(process.env.REACT_APP_MAPS_KEY);

const StreetView = ({ center }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_MAPS_KEY
    })

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <StreetViewPanorama 
                mapContainerStyle={containerStyle}
                position={center}
                visible={true}
            />
        </GoogleMap>
    ) : <></>
}

export default StreetView