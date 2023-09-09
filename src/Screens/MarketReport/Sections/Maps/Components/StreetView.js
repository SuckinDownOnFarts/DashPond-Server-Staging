import { useState, useCallback } from 'react';
import { useMantineTheme } from '@mantine/core';
import { GoogleMap, useJsApiLoader, StreetViewPanorama } from '@react-google-maps/api';

const containerStyle = {
    width: '800px',
    height: '800px'
};

const StreetView = ({ center }) => {
    const theme = useMantineTheme();

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
        <div className={theme.colorScheme === 'dark' ? 'p-4 bg-[#1a1b1e] rounded-md' : 'p-4 bg-[#ffffff] rounded-md'}>
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
        </div>
    ) : <></>
}

export default StreetView