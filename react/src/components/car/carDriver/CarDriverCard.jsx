import React from "react";
import { useState, useEffect } from "react";
import CarDriverInnerDetails from "./CarDriverInnerDetails";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const CarDriverCard = (props) => {
  const [carAcceptedStatus, setCarAcceptedStatus] = useState(false);
  const [
    carAcceptedAndCancelledByDriverStatus,
    setCarAcceptedAndCancelledByDriverStatus,
  ] = useState(false);
  const [
    carAcceptedAndCancelledByUserStatus,
    setCarAcceptedAndCancelledByUserStatus,
  ] = useState(false);

  useEffect(() => {
    if (props.carAcceptedStatus === true) {
      setCarAcceptedStatus(true);
    } else {
      setCarAcceptedStatus(false);
    }

    if (props.carAcceptedAndCancelledByUserStatus === true) {
      setCarAcceptedAndCancelledByUserStatus(true);
    }
  }, [props.carAcceptedStatus, props.carAcceptedAndCancelledByDriverStatus]);

  if (
    carAcceptedStatus === false &&
    carAcceptedAndCancelledByUserStatus === false
  ) {
    return (
      <Card className="w-96 grid-center my-4 mx-auto ">
        <CardBody className="text-center">
          <Typography>
          <div className="userRequest flex items-start"><span className='text-blue-600'>{props.carRequestedUserName} </span>&nbsp;is requesting for a ride </div>
            <CarDriverInnerDetails
              carRequestedUserName={props.carRequestedUserName}
              carRequestedUserPhone={props.carRequestedUserPhone}
              carPickupLocation={props.carPickupLocation}
              carDropLocation={props.carDropLocation}
              noOfPeople={props.noOfPeople}
              carTotalprice={props.carTotalprice}
            />
          </Typography>
          <Typography>
            <div className="CurrentAcceptedStatus">
              <span className="text-red-700">You still not accepted the ride</span>
            </div>
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">
            <div class="flex space-x-2 justify-center mr-10 pb-5">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-lg leading-tight uppercase
                   rounded shadow-md hover:bg-red-700 hover:shadow-lg  focus:ring-0  active:shadow-lg transition 
                   duration-150 ease-in-out"
              >
                Cancel
              </button>
            </div>
          </Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            <div class="flex space-x-2 justify-center pb-5">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-lg leading-tight uppercase
                   rounded shadow-md hover:bg-green-700 hover:shadow-lg  focus:ring-0  active:shadow-lg transition 
                   duration-150 ease-in-out"
              >
                Accept
              </button>
            </div>
          </Typography>
        </CardFooter>
      </Card>
    );
  } else if (
    carAcceptedStatus === true &&
    carAcceptedAndCancelledByUserStatus === false
  ) {
    return (
      <Card className="w-96 grid-center my-4 mx-auto ">
        <CardBody className="text-center">
         
          <Typography>
          <div className="userRequest flex items-start"><span className='text-blue-600'>{props.carRequestedUserName}</span> &nbsp;is requesting for a ride </div>
            <CarDriverInnerDetails
              carRequestedUserName={props.carRequestedUserName}
              carRequestedUserPhone={props.carRequestedUserPhone}
              carPickupLocation={props.carPickupLocation}
              carDropLocation={props.carDropLocation}
              noOfPeople={props.noOfPeople}
              carTotalprice={props.carTotalprice}
            />
          </Typography>
          <Typography>
            <div className="CurrentAcceptedStatus">
              <span className="text-green-600">You accepted the ride</span>
            </div>
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">
            <div class="flex space-x-2 justify-center mr-10 pb-5">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-lg leading-tight uppercase
                           rounded shadow-md hover:bg-red-700 hover:shadow-lg  focus:ring-0  active:shadow-lg transition 
                           duration-150 ease-in-out"
              >
                Cancel the ride
              </button>
            </div>
          </Typography>
        </CardFooter>
      </Card>
    );
  } else if (
    carAcceptedStatus === true &&
    carAcceptedAndCancelledByUserStatus === true
  ) {
    return (
      <Card className="w-96 grid-center my-4 mx-auto bg-red-100 ">
        <CardBody className="text-center">
          
          <Typography>
          <div className="userRequest flex items-start"><span className='text-blue-600'>{props.carRequestedUserName}</span>&nbsp; was requested for a ride </div>
            <CarDriverInnerDetails
              carRequestedUserName={props.carRequestedUserName}
              carRequestedUserPhone={props.carRequestedUserPhone}
              carPickupLocation={props.carPickupLocation}
              carDropLocation={props.carDropLocation}
              noOfPeople={props.noOfPeople}
              carTotalprice={props.carTotalprice}
            />
          </Typography>
          <Typography>
            <div className="CurrentAcceptedStatus">
              <span className="text-red-700 font-medium ">Cancelled the ride by user</span>
            </div>
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">
            <div class="flex space-x-2 justify-center mr-10 pb-5">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-lg leading-tight uppercase
                           rounded shadow-md hover:bg-red-700 hover:shadow-lg  focus:ring-0  active:shadow-lg transition 
                           duration-150 ease-in-out"
              >
                Delete
              </button>
            </div>
          </Typography>
        </CardFooter>
      </Card>
    );
  }
};

export default CarDriverCard;
