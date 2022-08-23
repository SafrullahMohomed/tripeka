import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";

export async function register(email, username, role, password) {
  try {
    var md5 = require("md5");
    const hashedpswd = md5(password);

    const body = {
      email: email,
      userName: username,
      role: role,
      hashedPswd: hashedpswd,
    };

    var response = await axios.post(ServerBaseUrl + "/auth/register", body);
    if (response.status === 200) {
      return {
        success: response.data["isSuccess"],
        msg: response.data["msg"],
      };
    } else {
      throw "Unhandled Exception";
    }
  } catch (e) {
    return {
      success: false,
      msg: e.toString(),
    };
  }
}

export async function login(email, password) {
  try {
    var md5 = require("md5");
    const hashedpswd = md5(password);

    const body = {
      email: email,
      hashedPswd: hashedpswd,
    };
    console.log(body);

    var response = await axios.post(ServerBaseUrl + "/auth/login", body);
    console.log(response.data);
    if (response.status === 200) {
      localStorage.clear();
      if (response.data["success"]) {
        localStorage.setItem("email", response.data["email"]);
        localStorage.setItem("role", response.data["role"]);
        localStorage.setItem("token", response.data["token"]);
      }

      return {
        success: response.data["success"],
        msg: response.data["msg"],
      };
    } else {
      throw "Unhandled Exception";
    }
  } catch (e) {
    return {
      success: false,
      msg: e.toString(),
    };
  }
}

export async function logout() {
  try {
    console.log("HERE");
    const token = localStorage.getItem("token");
    var response = await axios.get(
      ServerBaseUrl + "/auth/logout?token=" + token
    );
    console.log(response.data);
  } catch (e) {
  } finally {
    localStorage.clear();
    window.location.href = "http://localhost:3000/";
  }
}

export async function getSignedRole() {
  // try {
  //   console.log("HERE");
  //   const token = localStorage.getItem("token");
  //   const role = localStorage.getItem("role");
  //   const email = localStorage.getItem("email");

  //   var response = await axios.get(
  //     ServerBaseUrl + "/auth/introspect?token=" + token
  //   );
  //   console.log(response.data);
  //   if (response.status === 200) {
  //     if (
  //       response.data["success"] &&
  //       response.data["email"] === email &&
  //       response.data["role"] === role &&
  //       response.data["token"] === token
  //     ) {
  //       console.log("Role : " + role);
  //       return role;
  //     } else {
  //       console.log("No Role");
  //       return null;
  //     }
  //     return JSON.parse(localStorage.getItem("user")).role;
  //   } else {
  //     throw "Unhandled Exception";
  //   }
  // } catch (e) {
  //   return null;
  // }

  return JSON.parse(localStorage.getItem("user")).role;
}
