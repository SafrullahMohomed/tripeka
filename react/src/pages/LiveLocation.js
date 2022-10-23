import { useEffect, useState } from "react";

const LiveLocation = () => {
  const [location, setlocation] = useState(null);

  const onButtonClick = () => {
    // navigator.geolocation.getCurrentPosition((position) => {
    //   console.log(position);
    //   console.log("Latitude is :", +position.coords.latitude);
    //   console.log("Longitude is :" + position.coords.longitude);
    //   setlocation({
    //     latitude: position.coords.latitude,
    //     longitude: position.coords.longitude,
    //   });
    // });

    navigator.geolocation.watchPosition((position) => {
      console.log(position);
      console.log("Latitude is :", +position.coords.latitude);
      console.log("Longitude is :" + position.coords.longitude);
      setlocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  //   useEffect(() => {
  //     // navigator.geolocation.getCurrentPosition((position) => {
  //     //   console.log("Latitude is :", +position.coords.latitude);
  //     //   console.log("Longitude is :" + position.coords.longitude);
  //     //   setlocation({
  //     //     latitude: position.coords.latitude,
  //     //     longitude: position.coords.longitude,
  //     //   });
  //     // });
  //   }, []);

  return (
    <div>
      <button
        type="button"
        className="bg-red-500"
        onClick={() => {
          onButtonClick();
        }}
      >
        CLICK
      </button>
      <h2>{location && location.latitude}</h2>
      <h2>{location && location.longitude}</h2>
    </div>
  );
};

export default LiveLocation;
