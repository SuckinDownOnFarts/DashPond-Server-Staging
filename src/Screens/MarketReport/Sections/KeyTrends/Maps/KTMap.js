import React, { useRef, useState, useEffect } from 'react';
import { generatePath, useParams } from 'react-router-dom';
import api from '../../../../../api/axios';
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

const KTMap = ({ coordinates }) => {
    const { id } = useParams();

    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom, setZoom] = useState(10);

    const [isos, setIsos] = useState(null);


    useEffect(() => {
        const getMapInfo = async () => {
            try {
                const mapPath = generatePath('/mapinfo/:id', {
                    id: id
                })
                const response = await api.get(mapPath);
                setIsos(response.data)
                // console.log(response.data);
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
        getMapInfo();
    }, [])

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [parseFloat(coordinates[0]['st_x']), parseFloat(coordinates[0]['st_y'])],
            zoom: zoom
        });
        const marker = new mapboxgl.Marker({
            color: '#314ccd'
        }).setLngLat([parseFloat(coordinates[0]['st_x']), parseFloat(coordinates[0]['st_y'])]).addTo(map.current)
    });

    useEffect(() => {
        if (isos) {
            map.current.on('load', () => {
                // When the map loads, add the source and layer
                map.current.addSource('five_min', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'geometry': {
                            'type': JSON.parse(isos[0][0].st_asgeojson).type,
                            'coordinates': JSON.parse(isos[0][0].st_asgeojson).coordinates,
                        }

                    }
                });
                map.current.addSource('ten_min', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'geometry': {
                            'type': JSON.parse(isos[1][0].st_asgeojson).type,
                            'coordinates': JSON.parse(isos[1][0].st_asgeojson).coordinates,
                        }

                    }
                });
                map.current.addSource('fifteen_min', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'geometry': {
                            'type': JSON.parse(isos[2][0].st_asgeojson).type,
                            'coordinates': JSON.parse(isos[2][0].st_asgeojson).coordinates,
                        }

                    }
                });
                map.current.addLayer(
                    {
                        id: 'five_min',
                        type: 'fill',
                        // Use "iso" as the data source for this layer
                        source: 'five_min',
                        layout: {},
                        paint: {
                            // The fill color for the layer is set to a light purple
                            'fill-color': '#564138',
                            'fill-opacity': 0.3
                        }
                    },
                    'poi-label'
                );
                map.current.addLayer(
                    {
                        id: 'ten_min',
                        type: 'fill',
                        // Use "iso" as the data source for this layer
                        source: 'ten_min',
                        layout: {},
                        paint: {
                            // The fill color for the layer is set to a light purple
                            'fill-color': '#2E86AB',
                            'fill-opacity': 0.3
                        }
                    },
                    'poi-label'
                );
                map.current.addLayer(
                    {
                        id: 'fifteen_min',
                        type: 'fill',
                        // Use "iso" as the data source for this layer
                        source: 'fifteen_min',
                        layout: {},
                        paint: {
                            // The fill color for the layer is set to a light purple
                            'fill-color': '#F76707',
                            'fill-opacity': 0.3
                        }
                    },
                    'poi-label'
                );
            })
        }
    }, [isos])



    return (
        <div>
            <div ref={mapContainer} className="h-[600px]" />
        </div>
    )
}

export default KTMap

