import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";

export function getBlogs() {
  return axios.get(ServerBaseUrl + "/blogs");
}

export function createBlog(title, content, location) {
  return axios.post(ServerBaseUrl + "/blogs", { title, content, location }, { headers: authHeader() });
}