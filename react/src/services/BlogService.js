import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";

export function getBlogs() {
  return axios.get(ServerBaseUrl + "/blogs");
}

export function createBlog(title, content, location, moderatedStatus) {
  return axios.post(ServerBaseUrl + "/blogs", { title, content, location, moderatedStatus }, { headers: authHeader() });
}