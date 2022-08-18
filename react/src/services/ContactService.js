import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";

export async function contact(name, email, message) {
    try {
      const body = {
        name : name,
        email : email,
        message : message,
      };
  
      var response = await axios.post(ServerBaseUrl + "/main/contactus", body);
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