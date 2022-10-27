import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";

export function getGroupsById(user_id) {
  return axios.get(ServerBaseUrl + "/groups/" + user_id);
}

export function getGroup(group_id) {
  return axios.get(ServerBaseUrl + `/trip/${group_id}`);
}

export function editTrip(group_id, name) {
  // console.log(group_id +" "+ name +" "+ location);
  return axios.put(ServerBaseUrl + `/trip/${group_id}`, { group_id, name }, { headers: authHeader() });
}

export function createGroup(owner, name, location, owner_id, url, start_date, end_date, lat, lon) {
  // console.log(username +" "+ name +" "+ location +" "+ url);
  return axios.post(ServerBaseUrl + "/groups/" + owner_id, { owner, name, location, owner_id, url, start_date, end_date, lat, lon }, { headers: authHeader() });
}

export function addFriend(group_id, user_id) {
  return axios.post(ServerBaseUrl + `/trip/${group_id}`, { group_id, user_id }, { headers: authHeader() });
}

export function removeFriend(group_id, user_id) {
  return axios.delete(ServerBaseUrl + `/trip/${group_id}/${user_id}`);
}

export function deleteGroup(group_id) {
  return axios.delete(ServerBaseUrl + "/groups/" + group_id);
}

export function getTotalNumberofGroups() {
  return axios.get(ServerBaseUrl + "/allgroups");
}

