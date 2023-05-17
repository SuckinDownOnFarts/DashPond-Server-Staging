import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapModal = () => {

  const { pointData, county, address, setActiveIndex } = useOutletContext();

  setActiveIndex(1);
  
  const center = [pointData[0].lat, pointData[1].lng];
  const markerRef = useRef(null);
  const navigate = useNavigate();

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

  const [position, setPosition] = useState(center);

  // useEffect(() => {
  //   const logPointData = () => {
  //     console.log(position);
  //     console.log(address);
  //     console.log(county);
  //   }

  //   logPointData()
  // }, [position])

  const proceed = () => {
    navigate('/create/address+input/map+confirmation/image+upload')
  };
    
  return (
    <div className='absolute mt-8 h-1/2 w-1/2 rounded border border-grey-500'>


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
        
        <div className='flex flex-row justify-between'>
          {/* <button onClick={() => setShowModal(false)}>Close</button> */}
          <button onClick={proceed}>Continue</button>
        </div>
  
    </div>

  )
}

export default MapModal