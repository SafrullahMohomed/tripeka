import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import moment from 'moment';


export async function bookHotel(token, amount, formData) {

    const body = {
        token : token,
        amount: amount * 100,
        userId: JSON.parse(localStorage.getItem("userDetails")).user_id,
        firstName: formData.fName,
        lastName: formData.lName,
        address: formData.address,
        email: formData.email,
        noOfGuests: formData.guest,
        noOfRooms: formData.room,
        checkInDate: moment(formData.checkindate).format("YYYY-MM-DD"),
        checkInTime: moment(formData.checkintime, "HH:mm:ss").format("HH:mm:SS"),
        checkOutDate: moment(formData.checkoutdate).format("YYYY-MM-DD"),
        checkOutTime: moment(formData.checkouttime, "HH:mm:ss").format("HH:mm:SS"),
        noOfAdults: formData.adult,
        noOfChildren: formData.child
    }

    var response = await axios.post(ServerBaseUrl + "/booking/hotel", body);
    return response;
}