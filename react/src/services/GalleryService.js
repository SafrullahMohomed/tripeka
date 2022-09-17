import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";

export function geturls(group_id) {
    return axios.get(ServerBaseUrl + "/gallery/" + group_id);
}

export function addurl(group_id, url) {
    return axios.post(ServerBaseUrl + "/gallery/" + group_id, { group_id, url }, { headers: authHeader() });
}