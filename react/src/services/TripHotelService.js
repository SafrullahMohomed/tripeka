import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";


export async function getAllHotelsAvailableByFilters(params) {
  var response = await axios.get(ServerBaseUrl + "/trip-hotel/search", { params });
  return response;
}




