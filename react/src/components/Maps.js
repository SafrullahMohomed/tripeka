import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import osm from "../constants/osm-providers";
import L from "leaflet";

const icon = new L.Icon({
    iconUrl: require("../assets/marker.png"),
    iconSize: [38, 38],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
});

const position = [51.505, -0.09]

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

    const { selectPosition } = props;
    const locationSelection = [selectPosition?.lat, selectPosition?.lon];
    // const [center, setCenter] = useState({ lat: 6.9270786, lng: 79.861243 });
    
    return ( 
      <div>
          <MapContainer center={position} zoom={21} style={{ height: '500px', width: '100wh' }}>
              <TileLayer
                  url={osm.maptiler.url}
                  attribution={osm.maptiler.attribution}
              />
                  {selectPosition && (
                  <Marker icon={icon} position={position}>
                      <Popup>
                          You are Here!
                      </Popup>
                  </Marker>
                  )}
             <ResetCenterView selectPosition={selectPosition} />
          </MapContainer>
      </div>
     );
}
 
export default Maps;
