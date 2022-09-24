import axios from "axios";

const API_URL = "http://localhost:8080/";

class AuthService {
  login(username, password) {
    console.log("got the user details");
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
    // .then((responseData) => {
    //   // axios
    //   //   .get(API_URL + "api/v1/" + "user/" + username)
    //   //   .then((response) => {
    //   //     console.log(response.data);
    //   //     localStorage.setItem("userDetails", JSON.stringify(response.data));
    //   //   })
    //   //   .then(() => {
    //   //     return responseData;
    //   //   });
    //   // return responseData;
    // });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("userDetails");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  getRole() {
    return JSON.parse(localStorage.getItem("user"));
  }

  isSignedIn() {
    if (JSON.parse(localStorage.getItem("user")) !== null) {
      return true;
    } else {
      return false;
    }
  }
}

export default new AuthService();
