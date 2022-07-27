import { getSignedRole } from "../services/AuthAPIService";
import React, { useState } from "react";

const TempDashBoard = () => {
  const [roleString, setroleString] = useState('');

  getSignedRole()
    .then((role) => {
      if (role == null) {
        window.location.href = "http://localhost:3000/";
      } else if (role === "ADMIN") {
        setroleString(role);
      }else if (role === "TRIP_GUIDER") {
        setroleString(role);
      } else if (role === "LODGE_PROVIDER") {
        setroleString(role);
      } else if (role === "VEHICLE_OWNER") {
        setroleString(role);
      } else if (role === "TRAVELLER") {
        setroleString(role);
      } else {
        window.location.href = "http://localhost:3000/";
      }
    })
    .catch(() => {
      window.location.href = "http://localhost:3000/";
    });
  console.log("DASHBOARD : " + roleString);
  return <div>{ roleString }</div>;
};

export default TempDashBoard;
