import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";

export function getGroups() {
  return axios.get(ServerBaseUrl + "/groups");
}

export function getGroupsById(user_id) {
  return axios.get(ServerBaseUrl + "/groups/" + user_id);
}

export function getGroup(group_id) {
  return axios.get(ServerBaseUrl + `/trip/${group_id}`);
}

// { headers: authHeader() }

export default function createGroup(user_id, name, location) {
  console.log(user_id +" "+ name +" "+ location);
  return axios.post(ServerBaseUrl + "/groups/" + user_id, { user_id, name, location }, { headers: authHeader() });
}

export function deleteGroup(group_id) {
  return axios.delete(ServerBaseUrl + "/groups/" + group_id);
}

