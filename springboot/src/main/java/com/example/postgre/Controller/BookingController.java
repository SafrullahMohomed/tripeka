package com.example.postgre.Controller;

import com.example.postgre.Model.Data.HotelBooking;
import com.example.postgre.Model.Requests.BookingRequest;
import com.example.postgre.repository.HotelBookingRepository;
import com.example.postgre.service.PaymentGatewayService;
import com.stripe.model.Charge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.sql.Date;
import java.sql.Time;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/booking")
public class BookingController {

    @Autowired
    private PaymentGatewayService paymentService;

    @Autowired
    private HotelBookingRepository hotelBookingRepository;

    @PostMapping(value = "/hotel")
    public ResponseEntity<String> bookNewHotel(@RequestBody @Valid BookingRequest bookingRequest){

        try{
            Charge charge = paymentService.chargeNewCard(bookingRequest.getToken(), bookingRequest.getAmount());
            if (charge != null) {
                //add to booking table
                HotelBooking hotelBooking = new HotelBooking(
                        bookingRequest.getUserId(),
                        bookingRequest.getFirstName(),
                        bookingRequest.getLastName(),
                        bookingRequest.getAddress(),
                        bookingRequest.getEmail(),
                        bookingRequest.getNoOfGuests(),
                        bookingRequest.getNoOfRooms(),
                        Date.valueOf(bookingRequest.getCheckInDate()),
                        Time.valueOf(bookingRequest.getCheckInTime()),
                        Date.valueOf(bookingRequest.getCheckOutDate()),
                        Time.valueOf(bookingRequest.getCheckOutTime()),
                        bookingRequest.getNoOfAdults(),
                        bookingRequest.getNoOfChildren()
                );

                HotelBooking afterSaved = hotelBookingRepository.save(hotelBooking);
                return new ResponseEntity<String>(charge.getId(), HttpStatus.OK);
            } else {
                return new ResponseEntity<String>("Please check card details", HttpStatus.BAD_REQUEST);
            }
        }catch (Exception e){
            return new ResponseEntity<String>(e.toString(), HttpStatus.BAD_REQUEST);

        }

    }
}
