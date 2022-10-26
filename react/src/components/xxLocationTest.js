import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import useGeoLocation from "../hooks/useGeoLocation";
import authHeader from "../jwtAuthServices/auth-header";

var stompClient = null;
var subscription = null;
var myInterval = null;

const markerIcon = new L.Icon({
  iconUrl: require("../assets/marker.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const LocationTest = () => {

    const user_id_from_localStorage = JSON.parse(localStorage.getItem("userDetails")).user_id;

    const userFullName =
    JSON.parse(localStorage.getItem("userDetails")).firstname +
    " " +
    JSON.parse(localStorage.getItem("userDetails")).lastname;

    // const [livelocations, setlivelocations] = useState([{
    //   fullName: "John Doe",
    //   user_id: 4,
    //   latitude: 43.11,
    //   longitude: 54.66
    // }]);

    const [livelocations, setlivelocations] = useState([]);

    const [center, setCenter] = useState({ lat: 6.90213, lng: 79.86114 });
    const mapRef = useRef();

    // Get location using hook
    const location = useGeoLocation();

    useEffect(() => {
        console.log("useEffect Ran....");
        connect();
        onConnected();
      }, [location.coordinates.lng]);

    const connect = () => {
        let Sock = new SockJS("http://localhost:8080/ws");
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    };

    const onConnected = () => {
      console.log("Connected to socket.");

      // subscribe to the group_id which is in the url
      subscription = stompClient.subscribe("/receive-live-location/1",onRecieveMessage);
        

      // simulate a random value as lat & lon and send periodically through the socket
      const randomLat = location.coordinates.lat;
      const randomLng = location.coordinates.lng;
      
      sendMessage(randomLat, randomLng);
        
      // myInterval = setInterval(() => {
      //   let randomLat = Math.random() * 100;
      //   let randomLon = Math.random() * 100;

      //   sendMessage(randomLat, randomLon);

      //   // console.log("Interval function ran....\n With Lat: " + randomLat + " & Lon: " + randomLon + " \n")

      // }, 10000);

      // console.log("Interval function ran....\n With Lat: " + randomLat + " & Lon: " + randomLon + " \n")

    };
    
    const onError = (err) => {
        console.log(err);
    };

    const onSubscribe = (payload) => {
        console.log("Subscribed to new group...");
        console.log(payload);
    };

    const onRecieveMessage = (payload) => {
        console.log("Message received....")
        // console.log(payload);
        var payloadData = JSON.parse(payload.body);
        // console.table(payloadData);

        // setlivelocations((livelocations) => [
        //   ...livelocations,
          // {
          //   fullName: payloadData.fullName,
          //   user_id: payloadData.user_id,
          //   latitude: payloadData.latitude,
          //   longitude: payloadData.longitude
          // },
        // ]);

        // let tmp = livelocations.map((livelocation) => {
        //   if(livelocation.user_id === payloadData.user_id){
        //       return {...livelocation, latitude: payloadData.latitude, longitude: payloadData.longitude}
        //   }
        //   return livelocation
        //  })
        // console.log(tmp)


        // setlivelocations((livelocations) => {
        //     livelocations.map((livelocation) => {
        //         if(livelocation.user_id === payloadData.user_id){
        //             return {...livelocation, latitude: payloadData.latitude, longitude: payloadData.longitude}
        //         }
        //         return livelocation
        //     })
        //   });
    

        // check if already exists
        // console.log(livelocations)

        // // let isExists = livelocations.map((livelocation) =>  livelocation.user_id === payloadData.user_id).reduce((x,y) => x || y)


        // console.log("+++++++++++")
        // console.log(livelocations.map((livelocation) =>  livelocation.user_id === payloadData.user_id))
        // // console.log(livelocations.map((livelocation) =>  livelocation.user_id === payloadData.user_id).reduce(((x,y) => x || y)))
        // console.log("+++++++++++")

        // if(isExists){
          // console.log("IF RAN.....")
          setlivelocations((livelocations) => {
            if(livelocations.length === 0){
              return [
                {
                  fullName: payloadData.fullName,
                  user_id: payloadData.user_id,
                  latitude: payloadData.latitude,
                  longitude: payloadData.longitude
                }
              ]
            }
            else if(livelocations.map((livelocation) =>  livelocation.user_id === payloadData.user_id).reduce((x,y) => x || y)){
              return livelocations.map((livelocation) => {
                if(livelocation.user_id === payloadData.user_id){
                    return {...livelocation, latitude: payloadData.latitude, longitude: payloadData.longitude}
                }
                return livelocation
              })
            }
            else{
              return [
                    ...livelocations,
                    {
                      fullName: payloadData.fullName,
                      user_id: payloadData.user_id,
                      latitude: payloadData.latitude,
                      longitude: payloadData.longitude
                    }
                  ]
            }
              
          });
        // }else{
        //   console.log("ELSE RAN.....")
        //   setlivelocations((livelocations) => [
        //     ...livelocations,
        //     {
        //       fullName: payloadData.fullName,
        //       user_id: payloadData.user_id,
        //       latitude: payloadData.latitude,
        //       longitude: payloadData.longitude
        //     }
        //   ])
        // }
      };
      
    const sendMessage = (lat, lon) => {
        console.log("Sending.....");
        if (stompClient) {
          stompClient.send(
            "/chat-app/send-live-location/" + "1" + "/sendLocation",
            {},
            JSON.stringify({
              fullName: userFullName,
              user_id: user_id_from_localStorage,
              latitude: lat,
              longitude: lon
            })
          );
        }
    };

    return ( 
      <div>


        <h1>Welcome to Live Location Portal</h1> 
        <div>
          { 
            livelocations.map((livelocation) => (
              <div key={livelocation.user_id}>
              <p> {livelocation.fullName} || {livelocation.latitude} || {livelocation.longitude}</p>
              </div>
            ))
          }
        </div>
        <div>
            <MapContainer center={center} zoom={15} style={{ height: '500px', width: '100wh' }} ref={mapRef}>
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              /> 
                {livelocations.map((livelocation, index) => (
                    <Marker
                        position={[livelocation.latitude, livelocation.longitude]}
                        icon={markerIcon}
                        key={index}
                    >
                        <Popup>
                            <b>{livelocation.fullName}</b>
                        </Popup>
                    </Marker>
                ))}  
            </MapContainer>
        </div>
      </div>
    );
}
 
export default LocationTest;