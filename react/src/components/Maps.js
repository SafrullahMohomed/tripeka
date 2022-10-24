import React, { useEffect, useState, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = new L.Icon({
    iconUrl: require("../assets/marker.png"),
    iconSize: [38, 38],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
});

// const position = [7.2906, 80.6337]

function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [selectPosition]);

  return null;
}

const Maps = (props) => {

    const { selectPosition, latitude, longitude } = props;
    const locationSelection = [selectPosition?.lat, selectPosition?.lon];
    const position = [latitude, longitude];

    return ( 
      <div>
        <MapContainer center={position} zoom={14} style={{ height: '590px', width: '100%' }} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              {/* {selectPosition && ( */}
              <Marker icon={icon} position={position}>
                  <Popup>
                      Your Destination!
                  </Popup>
              </Marker>
              {/* )} */}
          <ResetCenterView selectPosition={selectPosition} />
        </MapContainer>
      </div>
     );
}
 
export default Maps;
