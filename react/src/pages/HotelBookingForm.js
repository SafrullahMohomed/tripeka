import { React, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate, useLocation } from "react-router-dom";
import { bookHotel } from "../services/BookingService";
import moment from 'moment';

const HotelBookingForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const publishableKey = 'pk_test_51LtEyLIFsTvZxqKPuarxbURt3dUsDF94y7jgNzTgk71Ccp5IEywhhyyXoNiG4tfz0AkMttO41ZPK4l6KbhVTlu5U00Mw1ynYSm';
    const [hotelData, sethotelData] = useState(location.state.hotelData);
    const [totalPrice, setTotalPrice] = useState(hotelData.roomprice);
    const [bookedDays, setBookedDays] = useState(1);
    const [inputs, setInputs] = useState({});
    const additionalCharge = hotelData.roomprice * 0.10;

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name == 'room') {
            setTotalPrice(additionalCharge + hotelData.roomprice * value * bookedDays);  
        } else if (name == 'checkindate' && inputs.checkoutdate && inputs.room) {
            var startDate = moment(value);
            var endDate = moment(inputs.checkoutdate);
            var days = endDate.diff(startDate, 'days');
            setBookedDays(days);
            setTotalPrice(additionalCharge + hotelData.roomprice * inputs.room * days);

        } else if (name == 'checkoutdate' && inputs.checkindate && inputs.room) {
            var startDate = moment(inputs.checkindate);
            var endDate = moment(value);
            var days = endDate.diff(startDate, 'days');
            setBookedDays(days);
            setTotalPrice(additionalCharge + hotelData.roomprice * inputs.room * days);
        }
        setInputs(values => ({...values, [name]: value}));
        
    }

    
    async function handleToken(token) {
        console.log(token);
        bookHotel(token.id, totalPrice, inputs)
        .then((response) => {
            navigate("/triphotel");
        })
        .catch((err) => {
            alert("Something went wrong");
        });
    }

    return (
    <div>
        
        <Navbar/>
        <br/>
        <br/>
        <br/>

        <div class="flex items-center justify-center p-12">

            <div class="mx-auto w-full max-w-[550px]">
            <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 ml-8 text-emerald-600 text-center">Hotel Reservation</h1>
            <br/>
            <br/>
                <form>
                    <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                for="fName"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                First Name
                                </label>
                                <input
                                type="text"
                                name="fName"
                                id="fName"
                                onChange={handleChange}
                                placeholder="First Name"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                for="lName"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                Last Name
                                </label>
                                <input
                                type="text"
                                name="lName"
                                id="lName"
                                onChange={handleChange}
                                placeholder="Last Name"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-5">
                        <label
                        for="address"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Permanent Address
                        </label>
                        <input
                        type="text"
                        name="address"
                        id="address"
                        onChange={handleChange}
                        placeholder="203, School lane, Colombo"
                        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                for="Email"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                Email Address
                                </label>
                                <input
                                type="text"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                placeholder="abc@email.com"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                for="phone"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                Phone Number
                                </label>
                                <input
                                type="number"
                                name="phone"
                                id="phone"
                                onChange={handleChange}
                                placeholder="0711234567"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="mb-5">
                        <label
                        for="guest"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        How many guest are you bringing?
                        </label>
                        <input
                        type="number"
                        name="guest"
                        id="guest"
                        onChange={handleChange}
                        placeholder="5"
                        min="0"
                        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div class="mb-5">
                        <label
                        for="guest"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        How many rooms do you like to book?
                        </label>
                        <input
                        type="number"
                        name="room"
                        id="room"
                        onChange={handleChange}
                        placeholder="1"
                        min="1"
                        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                for="date"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                Check-in Date
                                </label>
                                <input
                                type="date"
                                name="checkindate"
                                id="checkindate"
                                onChange={handleChange}
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                for="time"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                Check-in Time
                                </label>
                                <input
                                type="time"
                                name="checkintime"
                                id="checkintime"
                                onChange={handleChange}
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                for="cdate"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                Check-out Date
                                </label>
                                <input
                                type="date"
                                name="checkoutdate"
                                id="checkoutdate"
                                onChange={handleChange}
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                for="ctime"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                Check-out Time
                                </label>
                                <input
                                type="time"
                                name="checkouttime"
                                id="checkouttime"
                                onChange={handleChange}
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                for="Email"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                No of Children
                                </label>
                                <input
                                type="number"
                                name="child"
                                id="child"
                                onChange={handleChange}
                                min="0"
                                
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                for="phone"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                No of Adults
                                </label>
                                <input
                                type="number"
                                name="adult"
                                id="adult"
                                onChange={handleChange}
                                min="0"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* <button
                        class=" hover:shadow-form rounded-md bg-[#05b277] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                        Proceed to Payment
                        </button> */}
                    </div>
                </form>
                <StripeCheckout
                    amount = {totalPrice * 100}
                    label = {'Pay Now Rs.' + totalPrice}
                    name = 'TripEka'
                    description = {'Your Total Price is Rs.' + totalPrice}
                    panelLabel = 'Pay Now'
                    token = {handleToken}
                    stripeKey = {publishableKey}
                    currency = 'LKR' 
                />
            </div>
        </div>
        <br/>
        <br/>
        <Footer/>
    </div>
    )
}

export default HotelBookingForm