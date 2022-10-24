import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
// import osm from "../constants/osm-providers";
import { useState, useRef, useEffect } from "react";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import useGeoLocation from "../hooks/useGeoLocation";
import Header from "./Header";
import Footer from "./Footer";

import MyLocationIcon from '@mui/icons-material/MyLocation';
import Button from '@mui/material/Button';

const markerIcon = new L.Icon({
    iconUrl: require("../assets/marker.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  });

const Location = () => {
    const [center, setCenter] = useState({ lat: 6.90213, lng: 79.86114 });
    const ZOOM_LEVEL = 15;
    const mapRef = useRef();

    // Get location using hook
    const location = useGeoLocation();

    function ResetCenterView() {
        console.log("HI");
        
    }

    // const handleFlytoLocation = () => {
    //     if (location.loaded && !location.error) {
    //         map.setView(
    //             L.latLng(selectPosition?.lat, selectPosition?.lon),
    //             map.getZoom(),
    //             {
    //               animate: true
    //             }
    //           )
    //     }
    // };

    return ( 
        <>
        <Header />
        
        <div className='flex flex-col items-center'>
            {console.log("lat : "+location.coordinates.lat+" lng : "+location.coordinates.lng)}
            <div className='w-4/6 p-4'>

                <MapContainer center={center} zoom={15} style={{ height: '500px', width: '100wh' }} ref={mapRef}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
                        
                    {/* locations of multiple users */}
                    {/* {cities.map((city, index) => (
                    <Marker
                        position={[city.lat, city.lng]}
                        icon={markerIcon}
                        key={index}
                    >
                        <Popup>
                            <b>
                            {city.name}
                            </b>
                        </Popup>
                    </Marker>
                    ))} */}
                </MapContainer>
            </div>
            <div className=''>
                <Button onClick={ResetCenterView} disableElevation variant="outlined" startIcon={<MyLocationIcon />}>
                    Locate Me
                </Button>
            </div>            
        </div>
        <Footer />
        </>
     );
}
 
export default Location;