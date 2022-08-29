import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";

// get all users budget in a specific group
export function getAllUserBudgetByGroupId(group_id = 1) {
  return axios.get(ServerBaseUrl + "/budget/user/" + group_id);
}

// get a specific user budget in a specific group

export function getUserBudgetByGroupId(group_id = 1, user_id = 1) {
  return axios.get(ServerBaseUrl + "/budget/user/" + group_id + "/" + user_id);
}

//    to get total amount which the group is spended

export function getTotalamountSpendedByGroupId(group_id = 1) {
  return axios.get(ServerBaseUrl + "/budget/totalamount/" + group_id);
}

// to get average amount which the group is spended
export function getAverageamountSpendedByGroupId(group_id = 1) {
  return axios.get(ServerBaseUrl + "/budget/averageamount/" + group_id);
}

//    individual amount total which each user spent
export function getIndividualamountSpendedByGroupIdUserId(group_id = 1, user_id = 1) {
  return axios.get(
    ServerBaseUrl + "/budget/individualamount/" + group_id + "/" + user_id
  );
}

//   to get due amount for each user
export function getDueamountSpendedByGroupIdUserId(group_id = 1, user_id = 1) {
    return axios.get(
        ServerBaseUrl + "/budget/dueamount/" + group_id + "/" + user_id
    );
}


