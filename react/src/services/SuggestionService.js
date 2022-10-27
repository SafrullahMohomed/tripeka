import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";

export function getSuggestionById(location) {
    return axios.get(ServerBaseUrl + "/suggestion/" + location);
}

export function getSuggestions() {
    return axios.get(ServerBaseUrl + "/suggestions");
}

export function createSuggestion(location, description) {
    return axios.post(ServerBaseUrl + "/suggestions" , { location, description }, { headers: authHeader() });
}