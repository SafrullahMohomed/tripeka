import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";

export async function complaint(name, email, message, user_id) {
    try {
      const body = {
        name : name,
        email : email,
        message : message,
        user : user_id,
      };
  
      var response = await axios.post(ServerBaseUrl + "/main/complaint", body);
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