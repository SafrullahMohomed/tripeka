import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";

// get all cars count
export function totalCars() {
    return axios.get(ServerBaseUrl + `/car/allcarstotal`);
}

// list the cars according to the search criteria
export function getCarsByCriteria(district, no_of_passengers) {
  return axios.get(ServerBaseUrl + "/car/getcarbyvalues?district=" +district+"&no_of_passengers="+no_of_passengers);
}

// to insert the data to carhire table
export function addCarHire(carHireObject) {
  return axios.post(ServerBaseUrl + "/car/addcarhire", carHireObject, {
    headers: authHeader(),
  });
}

// to get the carhire details by carhire user_id
export function getCarHireByUserId(user_id) {
  return axios.get(ServerBaseUrl + "/car/carbookedhire/" + user_id, {
    headers: authHeader(),
  });
}

// to get the carhire details by carhire vehicle_id
export function getCarHireByVehicleId(vehicle_id) {
  return axios.get(ServerBaseUrl + "/car/carbookedhirebyvehicle/" + vehicle_id, {
    headers: authHeader(),
  });
}

// to update the car accept status
export function updateCarAcceptStatus(acceptStatus, hire_id) {
  return axios.put(ServerBaseUrl + "/car/updateaccept/"+hire_id+"?accept_status="+acceptStatus, {
    headers: authHeader(),
  });
}

// to update the updateacceptandcancelleddriver status
export function updateAcceptAndCancelledDriverStatus(acceptStatus, hire_id) {
  return axios.put(ServerBaseUrl + "/car/updateacceptandcancelleddriver/"+hire_id+"?accepted_and_cancelled_by_driver="+acceptStatus, {
    headers: authHeader(),
  });
}

// to update the updateacceptandcancelleduser status
export function updateAcceptAndCancelledUserStatus(acceptStatus, hire_id) {
  return axios.put(ServerBaseUrl + "/car/updateacceptandcancelleduser/"+hire_id+"?accepted_and_cancelled_by_user="+acceptStatus, {
    headers: authHeader(),
  });
}

// delete the car hire by hire_id
export function deleteCarHire(hire_id) {
  return axios.delete(ServerBaseUrl + "/car/deletecarhire/" + hire_id, {
    headers: authHeader(),
  });
}




