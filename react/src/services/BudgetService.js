import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import authHeader from "../jwtAuthServices/auth-header";
import jwt_decode from "jwt-decode";

// get all users budget in a specific group

  // var decoded = jwt_decode(JSON.parse(localStorage.getItem("user")).jwtToken);
  // const currentUserId = decoded.sub;
  // console.log(decoded.sub);


export function getAllUserBudgetByGroupId(group_id) {
  return axios.get(ServerBaseUrl + "/budget/user/" + group_id);
}

// get a specific user budget in a specific group

export function getUserBudgetByGroupIdAndUserId(group_id, user_id) {
  return axios.get(ServerBaseUrl + "/budget/user/" + group_id + "/" + user_id);
}

//    to get total amount which the group is spended

export function getTotalamountSpendedByGroupId(group_id) {
  return axios.get(ServerBaseUrl + "/budget/totalamount/" + group_id);
}

// to get average amount which the group is spended
export function getAverageamountSpendedByGroupId(group_id) {
  return axios.get(ServerBaseUrl + "/budget/averageamount/" + group_id);
}

//    individual amount total which each user spent
export function getIndividualamountSpendedByGroupIdUserId(group_id, user_id) {
  return axios.get(
    ServerBaseUrl + "/budget/individualamount/" + group_id + "/" + user_id
  );
}

//   to get due amount for each user
export function getDueamountSpendedByGroupIdUserId(group_id, user_id) {
    return axios.get(
        ServerBaseUrl + "/budget/dueamount/" + group_id + "/" + user_id
    );
}

// add budget to the database
export function addBudget(budget) {
  console.log(budget)
  return axios.post(
    ServerBaseUrl + "/budget/addbudget",
    budget,
    { headers: authHeader() }
  );
}

// delete budget from the list
export function deleteBudget(budget_id){
  return axios.delete(
    ServerBaseUrl + "/budget/deletebudget/" + budget_id,
    { headers: authHeader() }
  );
}

// update budget
export function updateBudget(budget_id, budget){
  return axios.put(
    ServerBaseUrl + "/budget/updatebudget/" + budget_id,
    budget,
    { headers: authHeader() }
  );
}


