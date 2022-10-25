// import { useEffect, useState } from "react";
// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
// } from "@material-tailwind/react";
// import CarCardInnerDetails from "./carListing/CarCardInnerDetails";

// const CarUserBookedCard = (props) => {
//   const [carAcceptedStatus, setCarAcceptedStatus] = useState(null);
//   const [
//     carAcceptedAndCancelledByDriverStatus,
//     setCarAcceptedAndCancelledByDriverStatus,
//   ] = useState(false);
//   const [
//     carAcceptedAndCancelledByUserStatus,
//     setCarAcceptedAndCancelledByUserStatus,
//   ] = useState(false);

//   useEffect(() => {
//     if (props.carAcceptedStatus === true) {
//       setCarAcceptedStatus(true);
//     } else {
//       setCarAcceptedStatus(false);
//     }

//     if (props.carAcceptedAndCancelledByDriverStatus === true) {
//       setCarAcceptedAndCancelledByDriverStatus(true);
//     }
//   }, [props.carAcceptedStatus, props.carAcceptedAndCancelledByDriverStatus]);

//   const x = carAcceptedStatus;
//   console.log(x);
//   if (
//     carAcceptedStatus === true &&
//     carAcceptedAndCancelledByDriverStatus === false
//   ) {
//     return (
//       <Card className="w-96 grid-center my-4 mx-auto ">
//         <CardHeader color="blue" className="relative h-56">
//           <img
//             src={props.carImage}
//             alt="img-blur-shadow"
//             className="h-full w-full"
//           />
//         </CardHeader>
//         <CardBody className="text-center">
//           <Typography variant="h5" className="mb-2">
//             {props.carName}
//           </Typography>
//           <Typography>
//             <CarCardInnerDetails
//               key={props.carId}
//               carType={props.carType}
//               carOwner={props.carOwner}
//               carPhone={props.carPhone}
//               // carStatus = {props.carStatus}
//               carTotalprice={props.carTotalprice}
//               carAvailableSeats={props.carAvailableSeats}
//             />
//           </Typography>
//         </CardBody>
//         <CardFooter divider className="flex items-center justify-between py-3">
//           <Typography variant="small">
//             <div class="flex space-x-2 justify-center mr-10 pb-2">
//               <button
//                 type="button"
//                 data-mdb-ripple="true"
//                 data-mdb-ripple-color="light"
//                 class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-lg leading-tight uppercase
//                rounded shadow-md hover:bg-red-700 hover:shadow-lg  focus:ring-0  active:shadow-lg transition 
//                duration-150 ease-in-out"
//               >
//                 Cancel
//               </button>
//             </div>
//           </Typography>
//           <Typography variant="small" color="gray" className="flex gap-1">
//             <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
//             <span className="font-medium text-green-700">
//               Accepted the request
//             </span>
//           </Typography>
//         </CardFooter>
//       </Card>
//     );
//   } else if (
//     carAcceptedStatus === false &&
//     carAcceptedAndCancelledByDriverStatus === false
//   ) {
//     return (
//       <Card className="w-96 grid-center my-4 mx-auto">
//         <CardHeader color="blue" className="relative h-56">
//           <img
//             src={props.carImage}
//             alt="img-blur-shadow"
//             className="h-full w-full"
//           />
//         </CardHeader>
//         <CardBody className="text-center">
//           <Typography variant="h5" className="mb-2">
//             {props.carName}
//           </Typography>
//           <Typography>
//             <CarCardInnerDetails
//               key={props.carId}
//               carType={props.carType}
//               carOwner={props.carOwner}
//               carPhone={props.carPhone}
//               // carStatus = {props.carStatus}
//               carTotalprice={props.carTotalprice}
//               carAvailableSeats={props.carAvailableSeats}
//             />
//           </Typography>
//         </CardBody>
//         <CardFooter divider className="flex items-center justify-between py-3">
//           <Typography variant="small">
//             <div class="flex space-x-2 justify-center mr-10 pb-2">
//               <button
//                 type="button"
//                 data-mdb-ripple="true"
//                 data-mdb-ripple-color="light"
//                 class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-lg leading-tight uppercase
//            rounded shadow-md hover:bg-red-700 hover:shadow-lg  focus:ring-0  active:shadow-lg transition 
//            duration-150 ease-in-out"
//               >
//                 Cancel
//               </button>
//             </div>
//           </Typography>
//           <Typography variant="small" color="gray" className="flex gap-1">
//             <i className="fas fa-map-marker-alt fa-sm mt-[3px] " />
//             <span className="font-medium text-blue-700">Not Accepted yet</span>
//           </Typography>
//         </CardFooter>
//       </Card>
//     );
//   } else if (
//     carAcceptedStatus === true &&
//     carAcceptedAndCancelledByDriverStatus === true
//   ) {
//     return (
//       <Card className="w-96 grid-center my-4 mx-auto bg-red-100">
//         <CardHeader color="blue" className="relative h-56">
//           <img
//             src={props.carImage}
//             alt="img-blur-shadow"
//             className="h-full w-full"
//           />
//         </CardHeader>
//         <CardBody className="text-center">
//           <Typography variant="h5" className="mb-2">
//             {props.carName}
//           </Typography>
//           <Typography>
//             <CarCardInnerDetails
//               key={props.carId}
//               carType={props.carType}
//               carOwner={props.carOwner}
//               carPhone={props.carPhone}
//               // carStatus = {props.carStatus}
//               carTotalprice={props.carTotalprice}
//               carAvailableSeats={props.carAvailableSeats}
//             />
//           </Typography>
//         </CardBody>
//         <CardFooter divider className="flex items-center justify-between py-3">
//           <Typography variant="small">
//             <div class="flex space-x-2 justify-center mr-10 pb-2">
//               <button
//                 type="button"
//                 data-mdb-ripple="true"
//                 data-mdb-ripple-color="light"
//                 class="inline-block px-2 py-2.5 bg-red-600 text-white font-medium text-lg leading-tight uppercase
//              rounded shadow-md hover:bg-red-700 hover:shadow-lg  focus:ring-0  active:shadow-lg transition 
//              duration-150 ease-in-out"
//               >
//                 Delete trip
//               </button>
//             </div>
//           </Typography>
//           <Typography variant="small" color="gray" className="flex gap-1">
//             <i className="fas fa-map-marker-alt fa-sm mt-[3px] " />
//             <span className="font-medium text-red-700">Cancelled by driver</span>
//           </Typography>
//         </CardFooter>
//       </Card>
//     );
//   }
// };

// export default CarUserBookedCard;
