import React, { useState, useEffect } from 'react';
import { useParams, generatePath } from 'react-router-dom';
import api from '../../../../api/axios';
import Maps from './Components/Maps';
import StreetView from './Components/StreetView';

const MapsLayout = () => {

    const [coordinates, setCoordinates] = useState();
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    const coordinatePath = generatePath('/coordinates/:id', {
        id: id
    });

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const response = await api.get(coordinatePath)
                setCoordinates(response.data)
                setLoading(false)
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`)
                }
            }
        }
        fetchCoordinates()
    }, [])

    let center = {}
    !loading ? center = {
        lat: parseFloat(coordinates[0]['st_y']), 
        lng: parseFloat(coordinates[0]['st_x'])
    } : center = {};

    console.log(center);
    return (
        <div>
            {!loading
                ? <StreetView
                    center={center}
                /> : <></>}
        </div>
    )
}

export default MapsLayout