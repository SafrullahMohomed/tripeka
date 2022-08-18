import axios from 'axios';
import { ServerBaseUrl } from "../constants/Server";

export function getGroups(){
    return axios.get(ServerBaseUrl + '/groups');
}

export function getGroupsById(group_id){
    return axios.get(ServerBaseUrl + '/' + group_id);
}
