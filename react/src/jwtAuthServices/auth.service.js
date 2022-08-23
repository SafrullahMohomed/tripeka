import axios from "axios";

const API_URL = "http://localhost:8080/";

class AuthService {
  login(username, password) {
    console.log("KAKKA BARAI");
    return axios
      .post(API_URL + "authenticate", {
        username,
        password,
      })
      .then((response) => {
        console.log("111111111111111");
        if (JSON.stringify(response.data).jwtToken !== null) {
          console.log("THIS IS THE RESPINSE DATA");
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        console.log("2222222222222222");
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  getRole() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
