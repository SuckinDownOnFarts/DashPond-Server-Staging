import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Maps = ({ center }) => {

    return (
        <div className='h-[800px] w-[800px]'>
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
        </div>
    )
}

export default Maps