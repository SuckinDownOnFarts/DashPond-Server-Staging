import { useEffect, useState } from 'react';
import { generatePath, useParams } from 'react-router-dom';
import api from '../../../../../api/axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card } from '@mantine/core';
// import { Card, Grid } from "@tremor/react";

const Maps = () => {

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

    let center = []
    !loading ? center = [parseFloat(coordinates[0]['st_y']), parseFloat(coordinates[0]['st_x'])] : center = [];

    return (
        // <Grid numColsSm={1} numColsMd={1} numColsLg={1} className="mt-8 gap-x-6 gap-y-6">
            <div className='h-[800px] w-[800px]'>
                {!loading ?
                    <MapContainer center={center} zoom={13} scrollWheelZoom={false} maxZoom={16} className='h-[750px]'>
                        <TileLayer
                            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                            url='https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}'
                        />
                        <Marker position={center}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                    : <></>}
            </div>
        // </Grid>
    )
}

export default Maps