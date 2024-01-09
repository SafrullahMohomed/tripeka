import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";

export function getUsers() {
    return axios.get(ServerBaseUrl + `/users`);

}

export function totalUser() {
    return axios.get(ServerBaseUrl + `/totalusers`);
}

// export function getUsersByEmail(email) {
//     return axios.get(ServerBaseUrl + `/user`);
// }