import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
// import osm from "../constants/osm-providers";
import { useState, useRef, useEffect } from "react";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

const markerIcon = new L.Icon({
    iconUrl: require("../assets/marker.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
});

const MarkLocationTest = () => {
    return ( 
        <div>
           <MapContainer
                style={{ height: '500px', width: '100wh' }}
                center={{ lat: 51.505, lng: -0.09 }}
                zoom={13}
                scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </MapContainer>
        </div>
     );
}
 
export default MarkLocationTest;