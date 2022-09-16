import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";
// import jwt_decode from "jwt-decode";
// var decoded = jwt_decode(JSON.parse(localStorage.getItem("user")).jwtToken);
// const user_id = decoded.sub;

export function getGroupsById(user_id) {
  return axios.get(ServerBaseUrl + "/groups/" + user_id);
}

export function getGroup(group_id) {
  return axios.get(ServerBaseUrl + `/trip/${group_id}`);
}

export function editTrip(group_id, name, location, description) {
  // console.log(group_id +" "+ name +" "+ location + " " + description);
  return axios.put(ServerBaseUrl + `/trip/${group_id}`, { group_id, name, location, description }, { headers: authHeader() });
}

export default function createGroup(username, name, location, owner_id, url) {
  // console.log(username +" "+ name +" "+ location +" "+ url);
  return axios.post(ServerBaseUrl + "/groups/" + owner_id, { username, name, location, owner_id, url }, { headers: authHeader() });
}
// TODO : add user_id and group_id in groups_user + check if hes existing also
// export function addFriend(friend) {
//   return axios.post(ServerBaseUrl + `/trip/${group_id}`, { user_id, group_id neda??? }, { headers: authHeader() });
// }

export function deleteGroup(group_id) {
  return axios.delete(ServerBaseUrl + "/groups/" + group_id);
}

