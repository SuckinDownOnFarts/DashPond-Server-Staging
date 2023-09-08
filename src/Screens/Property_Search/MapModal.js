import React, { useEffect, useRef, useMemo } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Button, Group } from '@mantine/core';

const MapModal = () => {
    const { pointData, position, setPosition, center, submitForm, opened } = useOutletContext();

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
        <div className='relative h-[600px] md:w-[800px] sm:w-[500px] xs:w-[360px] md:h-[600px] sm:h-[500px]'>
            {center && position && opened === false ?
                <MapContainer center={center} zoom={13}>
                    <TileLayer
                        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                        url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
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
    )
}

export default MapModal