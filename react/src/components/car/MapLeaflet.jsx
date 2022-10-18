// import React from 'react';
// import { MapContainer, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import {useState, useEffect} from 'react';

// const MapLeaflet = () => {
//     // const [map, setMap] = useState(null);
//     // const [marker, setMarker] = useState(null);
//     // const [position, setPosition] = useState(null);
    
//     // useEffect(() => {
//     //     if (map) {
//     //     map.locate();
//     //     map.on("locationfound", (e) => {
//     //         setPosition(e.latlng);
//     //         // setMarker(L.marker(e.latlng).addTo(map));
//     //     });
//     //     }
//     // }, [map]);
    
//     // useEffect(() => {
//     //     if (marker && position) {
//     //     marker.setLatLng(position);
//     //     }
//     // }, [position]);
    
//     return (
//         <MapContainer
//         center={[51.505, -0.09]}
//         zoom={13}
//         // whenCreated={setMap}
//         style={{ height: "100vh" }}
//         >
//         <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         </MapContainer>
//     );
//     };

// export default MapLeaflet;

import React, { useState } from "react";
// import Header from "components/Header";

import { MapContainer, TileLayer } from "react-leaflet";
import osm from "./osm-provider";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
// import ExternalInfo from "components/ExternalInfo";

const MapLeaflet = () => {
    const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();

    return (
        <>
            {/* <Header title="React Leaflet Map Example" /> */}

            {/* <ExternalInfo page="leafletBasic" /> */}

            <div className="row">
                <div className="col text-center">
                    <h2>React-leaflet - Basic Openstreet Maps</h2>
                    <p>Loading basic map using layer from maptiler</p>
                    <div className="col">
                        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                            <TileLayer
                                url={osm.maptiler.url}
                                attribution={osm.maptiler.attribution}
                            />
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MapLeaflet;