import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";

export function getGroups() {
  return axios.get(ServerBaseUrl + "/groups");
}

export function getGroupsById(group_id) {
  return axios.get(ServerBaseUrl + "/" + group_id);
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
