import React, { useEffect, useRef, useMemo } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet'
import { Button, Group, LoadingOverlay } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import './Styles/LeafletStyles/Leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapModal = () => {
    const { pointData, position, setPosition, center, submitForm, opened, visible } = useOutletContext();

    const navigate = useNavigate();
    const markerRef = useRef(null);


    useEffect(() => {
        const redirectIfPointDataEmpty = () => {
            if (!pointData[0].lat || !pointData[1].lng) {
                navigate('/property+search/address+input')
            }
        }
        redirectIfPointDataEmpty()
    }, [])

    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current;
                if (marker != null) {
                    const coorArr = [
                        marker.getLatLng().lat,
                        marker.getLatLng().lng
                    ]
                    setPosition(coorArr);
                };
            },
        }),
        [],
    );

    const back = () => {
        navigate('/property+search/address+input');
    };

    return (
        <div> 
            <LoadingOverlay visible={visible} overlayBlur={2} />
            <div className={visible ? 'hidden' : 'relative h-[600px] md:w-[800px] sm:w-[500px] xs:w-[360px] md:h-[600px] sm:h-[500px]'}>
                {center && position && opened === false ?
                    <MapContainer center={center} zoom={13} maxZoom={18}>
                        <TileLayer
                            attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                            url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG9tZXplcm8xIiwiYSI6ImNsb2Rscm51YTA3bWoybHFlNjEyZnVlb3oifQ.tQ7Z2oW2hz4j0bslTtAC3A'
                        />

                        <Marker
                            draggable={true}
                            eventHandlers={eventHandlers}
                            position={position}
                            ref={markerRef}
                        />
                    </MapContainer>
                    : <></>}
                <Group position="center" mt="xl">
                    <Button variant="default" onClick={back}>Back</Button>
                    <Button onClick={submitForm}>Submit</Button>
                </Group>
            </div>
        </div>
    )
}

export default MapModal