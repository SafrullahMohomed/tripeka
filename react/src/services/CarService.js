import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";

// list the cars according to the search criteria
export function getCarsByCriteria(district, no_of_passengers) {
  return axios.get(ServerBaseUrl + "/car/getcarbyvalues?district=" +district+"&no_of_passengers="+no_of_passengers);
}