import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate, generatePath, useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import useAuth from '../hooks/useAuth'
import api from '../api/axios'

const MapModal = ({ coordinates, county, address, setShowModal }) => {

  const center = [coordinates[0].lat, coordinates[1].lng];
  const { auth } = useAuth();

  const navigate = useNavigate();

  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          const coorArr = [
            marker.getLatLng().lat, 
            marker.getLatLng().lng
          ]
          setPosition(coorArr)
        }
      },
    }),
    [],
  )

  const [position, setPosition] = useState(center);

  useEffect(() => {
    const logPointData = () => {
      console.log(position);
      console.log(address);
      console.log(county);
    }

    logPointData()
  }, [position])

  async function postData() {
    try {
      const response = await api.post('/posts', {
        address: address,
        latLng: position,
        county: county,
        id: auth.id
      });

      if (!response?.data) { 
        console.log('no response') 
      } else {
        const path = generatePath('/dataprofile/:id/overview', {
          id: response.data.toString()
        });
        navigate(path)
      }
      } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postData()
      .then((response) => {
        if (!response) {
          console.log('no res');
        }
      })
      .catch(err => {
        console.log(err)
     });
  }
  

    
  return (
    <div className='absolute z-51 top-24 h-1/2 w-1/2 bg-white rounded border border-grey-500'>
      <div className='flex flex-row justify-between'>
        <button onClick={() => setShowModal(false)}>Close</button>
        <button onClick={handleSubmit}>Continue</button>
      </div>

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
  
    </div>

  )
}

export default MapModal