import React, { useState } from "react";
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

const CarForm = () => {
  // get current users userId
  var currentUserId = jwt_decode(
    JSON.parse(localStorage.getItem("user")).jwtToken
  );
  console.log(currentUserId.sub);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [passengers, setPassengers] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [car_id, setCar_id] = useState("");
  // const [user_id, setUser_id] = useState("");
  const car_id_int = 1;

  // const group_id_int = parseInt(props.group_id);
  const user_id_int = parseInt(currentUserId.sub);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const carbookingForm = (e) => {
    e.preventDefault();

    const carbooking = {
      pickup,
      dropoff,
      users: { user_id: user_id_int },
      car: { car_id: car_id_int },
      passengers,
      date,
      time,
      email,
      phone,
    };
    console.log(carbooking);
    // addCarbooking(budget)
    //   .then((response) => {
    //     console.log("Printing car booking data", response.data);
    //     init();
    //   })
    //   .catch((err) => {
    //     console.log("Something went wrong", err);
    //   });
  };

  return (
    <form onSubmit={carbookingForm}>
      <DialogTitle id="expense-title" sx={{ width: 450, marginBottom: -1 }}>
      
      </DialogTitle>
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

        <DialogContentText id="date" sx={{ marginTop: 2 }}></DialogContentText>
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

        <DialogContentText id="time" sx={{ marginTop: 2 }}></DialogContentText>
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

        <DialogContentText id="email" sx={{ marginTop: 2 }}></DialogContentText>
        <TextField
          onChange={(e) => setPassengers(e.target.value)}
          autoFocus
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          // variant="standard"
        />

        <DialogContentText id="phone" sx={{ marginTop: 2 }}></DialogContentText>
        <TextField
          onChange={(e) => setPassengers(e.target.value)}
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

        <div class="flex space-x-2 justify-center ">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg  focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
          >
            Book
          </button>
        </div>
      </DialogActions>
    </form>
  );
};

export default CarForm;
