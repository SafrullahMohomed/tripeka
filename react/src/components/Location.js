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

var points = [
  ["Abdul", 6.8973937250273, 79.86847548182611],
  ["Haathim", 6.902597009650253, 79.86471596857102],
  ["Ashfaq", 6.902179020550703, 79.8611052260926],
  ["Mohomed", 6.900785720886359, 79.86046728572539],
  ["Shanika", 6.900590741089961, 79.86270730021589],
  ["Dhinujaya", 6.90347866793894, 79.85605996145371]
];

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
        
        <div className='flex flex-col items-center mb-8'>
            {console.log("lat : "+location.coordinates.lat+" lng : "+location.coordinates.lng)}
            <div className='w-4/6 p-4'>

                <MapContainer center={center} zoom={15} style={{ height: '500px', width: '100wh' }} ref={mapRef}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />  
                        {/* browser live location */}
                        {/* {location.loaded && !location.error && (
                        <Marker icon={markerIcon} position={[
                            location.coordinates.lat, 
                            location.coordinates.lng,
                            ]}>
                            <Popup>
                                You are Here!
                            </Popup>
                        </Marker>
                        )} */}
                        
                        {/* {points.map((point, index) => (
                        <Marker
                            position={[point.lat, point.lng]}
                            icon={markerIcon}
                            key={index}
                        >
                            <Popup>
                                <b>{point.name}</b>
                            </Popup>
                        </Marker>
                        ))} */}

                        {points.map((point, index) => (
                            <Marker
                                position={[point[1], point[2]]}
                                icon={markerIcon}
                                key={index}
                            >
                                <Popup>
                                    <b>{point[0]}</b>
                                </Popup>
                            </Marker>
                        ))}
                        
                </MapContainer>
            </div>
            {/* <div className=''>
                <Button onClick={ResetCenterView} disableElevation variant="outlined" startIcon={<MyLocationIcon />}>
                    Locate Me
                </Button>
            </div>             */}
        </div>
        <Footer />
        </>
     );
}
 
export default Location;