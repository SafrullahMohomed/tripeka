import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import osm from "../constants/osm-providers";
import { useState, useRef } from "react";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import useGeoLocation from "../hooks/useGeoLocation";

import MyLocationIcon from '@mui/icons-material/MyLocation';
import Button from '@mui/material/Button';

const markerIcon = new L.Icon({
    iconUrl: require("../assets/marker.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  });

const Location = () => {
    const [center, setCenter] = useState({ lat: 6.9270786, lng: 79.861243 });
    const ZOOM_LEVEL = 13;
    const mapRef = useRef();

    // Get location using hook
    const location = useGeoLocation();

    // 
    const handleLocation = () => {
        console.log("Clicked");
        if (location.loaded && !location.error) {
          mapRef.current.leafletElement.flyTo(
            [location.coordinates.lat, location.coordinates.lng],
            ZOOM_LEVEL,
            { animate: true }
          );
        }
         else {
          alert(location.error.message);
        }
      };

    return ( 
        <div className='flex flex-col items-center'>
            {console.log("lat : "+location.coordinates.lat+" lng : "+location.coordinates.lng)}
            <div className='w-4/6 p-4'>
                <MapContainer center={center} zoom={13} style={{ height: '500px', width: '100wh' }} scrollWheelZoom={false} ref={mapRef}>
                    <TileLayer
                        url={osm.maptiler.url}
                        attribution={osm.maptiler.attribution}
                    />
                    {location.loaded && !location.error && (
                    <Marker icon={markerIcon} position={[
                        location.coordinates.lat, 
                        location.coordinates.lng,
                        ]}>
                        <Popup>
                            You are Here!
                        </Popup>
                    </Marker>
                     )}
                </MapContainer>
            </div>
            <div className=''>
                <Button onClick={handleLocation} disableElevation variant="outlined" startIcon={<MyLocationIcon />}>
                    Locate Me
                </Button>
            </div>
            
        </div>
     );
}
 
export default Location;