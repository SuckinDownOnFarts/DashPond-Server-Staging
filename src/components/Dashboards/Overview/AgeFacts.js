import {useEffect, useState} from 'react';
import { generatePath, useParams } from 'react-router-dom'; 
import api from '../../../api/axios';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { Card, Text, Block, Metric, Flex, Icon, ColGrid, Col, Toggle, ToggleItem, Divider, BarChart, Title, ListItem, List, Subtitle} from "@tremor/react";

const AgeFacts = () => {

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
  // console.log(center);

  return (
    <ColGrid numColsSm={ 1 } numColsMd={ 1 } numColsLg={ 1 } marginTop="mt-8" gapX="gap-x-6" gapY="gap-y-6">
      <Card>
        {!loading ? 
        <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
          />
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        : <></> }
      </Card>
    </ColGrid>
  )
}

export default AgeFacts