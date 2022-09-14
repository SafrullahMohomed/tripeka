import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";
import jwt_decode from "jwt-decode";
var decoded = jwt_decode(JSON.parse(localStorage.getItem("user")).jwtToken);
const user_id = decoded.sub;


// export function getGroups() {
//   return axios.get(ServerBaseUrl + "/groups");
// }

export function getGroupsById(user_id) {
  return axios.get(ServerBaseUrl + "/groups/" + user_id);
}

export function getGroup(group_id) {
  return axios.get(ServerBaseUrl + `/trip/${group_id}`);
}

export function editTrip(group_id, name, location, description) {
  console.log(group_id +" "+ name +" "+ location + " " + description);
  return axios.put(ServerBaseUrl + `/trip/${group_id}`, { group_id, name, location, description }, { headers: authHeader() });
}

export default function createGroup(owner, name, location, url) {
  console.log(owner +" "+ name +" "+ location +" "+ url);
  return axios.post(ServerBaseUrl + "/groups/" + user_id, { owner, name, location, url }, { headers: authHeader() });
}

export function deleteGroup(group_id) {
  return axios.delete(ServerBaseUrl + "/groups/" + group_id);
}

