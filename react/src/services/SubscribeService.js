import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";

export async function subscribe(email, user_id) {
    try {
      const body = {
        email : email,
        user : user_id,
      };
  
      var response = await axios.post(ServerBaseUrl + "/main/subscribe", body);
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