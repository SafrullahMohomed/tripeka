import React, { useState, useNavigate } from "react";
import { useForm } from "react-hook-form";
// import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import jwt_decode from "jwt-decode";
import CircularProgress from "@mui/material/CircularProgress";
import CarImage from "./CarImage";

import { getCarsByCriteria } from "../../services/CarService";
import CarListingMain from "./carListing/CarListingMain";
import CarCard from "./carListing/CarCard";

const CarForm = () => {
  // get current users userId
  // var currentUserId = jwt_decode(
  //   JSON.parse(localStorage.getItem("user")).jwtToken
  // );
  // console.log(currentUserId.sub);
  // const navigate = useNavigate();

  const currentUserId = JSON.parse(localStorage.getItem("userDetails")).user_id;

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [passengers, setPassengers] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [driver_name, setDriver_name] = useState("");
  const [driver_phone, setDriver_phone] = useState("");
  const [max_passengers, setMax_passengers] = useState("");
  const [vehicle_id, setVehicle_id] = useState("");
  const [vehicle_name, setVehicle_name] = useState("");
  const [vehicle_type, setVehicle_type] = useState("");
  const [vehicle_image, setVehicle_image] = useState("");
  const [vehicle_no_plate, setVehicle_no_plate] = useState("");
  const [car_details, setCar_details] = useState([]);
  const [carList, setCarList] = useState([]);
  const [carBookingObject, setCarBookingObject] = useState({});

  // const [car_id, setCar_id] = useState("");
  // const [user_id, setUser_id] = useState("");
  // const car_id_int = 1;

  // const group_id_int = parseInt(props.group_id);
  // const user_id_int = parseInt(currentUserId.sub);
  const user_id_int = parseInt(currentUserId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const carbookingForm = async (e) => {
    const carbooking = {
      pickup,
      dropoff,
      users: { user_id: user_id_int },
      // car: { car_id: car_id_int },
      passengers,
      date,
      time,
      email,
      phone,
    };

    setCarBookingObject(carbooking);

    const district = "colombo";
    await getCarsByCriteria(district, passengers)
      .then((response) => {
        console.log("printing cars by criteria", response.data);
        setCar_details(response.data);
        // setCar_id(response.data.car_id);
      })
      .catch((err) => {
        console.log("Something Went wrong", err);
      });
    console.log("here skldfjsdlkfj", car_details);

    // define the functionality to book now button

    // const car_fulldetails = await car_details;
    if (car_details.length > 0) {
      car_details.map((car, index) => {
        car[index] = { car, carbooking };
      });
      console.log("after lsdfjj skldfjsdlkfj", car_details);
    }
  };
  return (
    <div>
      <div className="main-form-and-image flex flex-col md:flex-row">
        <div className="car-left w-full item-center flex flex-col ">
          <div className="left-title text-emerald-700 2xl:text-5xl font-semibold my-4 flex justify-center mt-12 md:text-3xl lg:text-4xl">
            {" "}
            BOOK A VEHICLE
          </div>
          <CarImage />
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              carbookingForm();
            }}
          >
            <DialogTitle
              id="expense-title"
              sx={{ width: 450, marginBottom: -1 }}
            ></DialogTitle>
            <DialogContent>
              <DialogContentText
                id="pickup"
                sx={{ marginTop: 2 }}
              ></DialogContentText>
              <TextField
                onChange={(e) => setPickup(e.target.value)}
                autoFocus
                margin="dense"
                id="pickup"
                label="Pickup Location"
                type="text"
                fullWidth
                // variant="standard"
              />

              <DialogContentText
                id="dropoff"
                sx={{ marginTop: 2 }}
              ></DialogContentText>
              <TextField
                onChange={(e) => setDropoff(e.target.value)}
                autoFocus
                margin="dense"
                id="dropoff"
                label="Dropoff Location"
                type="text"
                fullWidth
                // variant="standard"
              />

              <DialogContentText
                id="date"
                sx={{ marginTop: 2 }}
              ></DialogContentText>
              <TextField
                onChange={(e) => setDate(e.target.value)}
                autoFocus
                margin="dense"
                id="date"
                label="Date"
                type="date"
                fullWidth
                focused
                // variant="standard"
              />

              <DialogContentText
                id="time"
                sx={{ marginTop: 2 }}
              ></DialogContentText>
              <TextField
                onChange={(e) => setTime(e.target.value)}
                autoFocus
                margin="dense"
                id="time"
                label="Time"
                type="time"
                fullWidth
                focused
                // variant="standard"
              />

              <DialogContentText
                id="passengers"
                sx={{ marginTop: 2 }}
              ></DialogContentText>
              <TextField
                onChange={(e) => setPassengers(e.target.value)}
                autoFocus
                margin="dense"
                id="passengers"
                label="Number of Passengers"
                type="number"
                fullWidth
                // variant="standard"
              />

              <DialogContentText
                id="email"
                sx={{ marginTop: 2 }}
              ></DialogContentText>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                margin="dense"
                id="email"
                label="Email"
                type="email"
                fullWidth
                // variant="standard"
              />

              <DialogContentText
                id="phone"
                sx={{ marginTop: 2 }}
              ></DialogContentText>
              <TextField
                onChange={(e) => setPhone(e.target.value)}
                autoFocus
                margin="dense"
                id="phone"
                label="Mobile Number"
                type="tel"
                fullWidth
                // variant="standard"
              />
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleClose}>Cancel</Button> */}

              <div class="flex space-x-2 justify-center mr-10 pb-10 ">
                <button
                  type="submit"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block px-20 py-2.5 bg-green-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg  focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => {
                    // window.location.href = "/ms3";
                  }}
                >
                  Find a Vehicle
                </button>
              </div>
            </DialogActions>
          </form>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-center mx-auto ">
          {car_details.map((car) => {
            return (
              <CarCard
                key={car.vehicle_id}
                carId={car.vehicle_id}
                userId={user_id_int}
                carName={car.vehicle_name}
                carOwner={car.driver_name}
                carPhone={car.driver_phone}
                carType={car.vehicle_type}
                carPrice={car.price_per_km}
                carImage={car.vehicle_image}
                carStatus={car.carstatus}
                carTotalprice={car.carTotalprice}
                carAvailableSeats={car.max_passengers}
                carDistrict={car.district}
                carBooking={carBookingObject}
                carDetails={car}
                // onBook={BookNowButton}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarForm;
