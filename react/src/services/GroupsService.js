import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";

export function getGroupsById(user_id) {
  return axios.get(ServerBaseUrl + "/groups/" + user_id);
}

export function getGroup(group_id) {
  return axios.get(ServerBaseUrl + `/trip/${group_id}`);
}

export function editTrip(group_id, name, location) {
  // console.log(group_id +" "+ name +" "+ location);
  return axios.put(ServerBaseUrl + `/trip/${group_id}`, { group_id, name, location }, { headers: authHeader() });
}

export default function createGroup(username, name, location, owner_id, url) {
  // console.log(username +" "+ name +" "+ location +" "+ url);
  return axios.post(ServerBaseUrl + "/groups/" + owner_id, { username, name, location, owner_id, url }, { headers: authHeader() });
}
export function addFriend(group_id, user_id) {
  return axios.post(ServerBaseUrl + `/trip/${group_id}`, { group_id, user_id }, { headers: authHeader() });
}

export function deleteGroup(group_id) {
  return axios.delete(ServerBaseUrl + "/groups/" + group_id);
}

