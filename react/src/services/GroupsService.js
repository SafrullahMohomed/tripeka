import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";
import jwt_decode from "jwt-decode";

// user-email from token
// var decoded = jwt_decode(JSON.parse(localStorage.getItem("user")).jwtToken);
// const user_id = decoded.sub;
// console.log(user_id);

export function getGroups() {
  return axios.get(ServerBaseUrl + "/groups");
}

export function getGroupsById(user_id) {
  return axios.get(ServerBaseUrl + "/groups/" + user_id);
}

// { headers: authHeader() }

export default function createGroup(name, location) {
  console.log(name + location);

  return axios.post(
    ServerBaseUrl + "/groups",
    { name, location },
    { headers: authHeader() }
  );

  // return axios.post(ServerBaseUrl + '/' + group_id);
  // return axios.post(ServerBaseUrl + '/', 
  // { name, location },
  // { headers: authHeader() }
  // );
}

// return axios.get(ServerBaseUrl + "somebody", { headers: authHeader() });
