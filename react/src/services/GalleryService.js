import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";

export function geturls(user_id) {
    return axios.get(ServerBaseUrl + "/gallery/" + user_id);
}

export function addurl(user_id, url) {
    return axios.post(ServerBaseUrl + "/gallery/" + user_id, { user_id, url }, { headers: authHeader() });
}