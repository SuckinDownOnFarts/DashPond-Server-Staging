import React, { useEffect, useRef, useMemo } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Button, Group } from '@mantine/core';

const MapModal = () => {
    const { pointData, position, setPosition, center, submitForm } = useOutletContext();

    const navigate = useNavigate();
    const markerRef = useRef(null);

    useEffect(() => {
        const redirectIfPointDataEmpty = () => {
            if (!pointData[0].lat && !pointData[1].lng) {
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
        <div className='absolute mt-48 h-1/2 w-1/2  xs:h3/4 xs:w-3/4 inset-y-0 m-auto rounded border border-grey-500'>
            {center && position ?
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
                    >
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>

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