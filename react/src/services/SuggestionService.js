import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";

export function getSuggestionById(location) {
    return axios.get(ServerBaseUrl + "/suggestion/" + location);
}