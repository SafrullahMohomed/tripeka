package com.example.postgre.Controller;

import com.example.postgre.Model.Data.Hotel;
import com.example.postgre.repository.HotelRepository;
import com.example.postgre.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/trip-hotel")
public class TripHotelController {

    @Autowired
    HotelRepository hotelRepository;

    @GetMapping(value = "/search")
    public List<Hotel> searchHotels(@RequestParam Map<String, String> allParams){

        if (Integer.parseInt(allParams.get("maxPrice")) > 0) {
            return hotelRepository.findAllHotelsAvailableWithPriceRangeFilters(
                    allParams.get("district").toLowerCase(),
                    Date.valueOf(allParams.get("fromDate")),
                    Date.valueOf(allParams.get("toDate")),
                    Integer.parseInt(allParams.get("noOfAdults")),
                    Integer.parseInt(allParams.get("noOfChildren")),
                    Integer.parseInt(allParams.get("rooms")),
                    Integer.parseInt(allParams.get("minPrice")),
                    Integer.parseInt(allParams.get("maxPrice"))
            );
        } else {
            return hotelRepository.findAllHotelsAvailableByFilters(
                    allParams.get("district").toLowerCase(),
                    Date.valueOf(allParams.get("fromDate")),
                    Date.valueOf(allParams.get("toDate")),
                    Integer.parseInt(allParams.get("noOfAdults")),
                    Integer.parseInt(allParams.get("noOfChildren")),
                    Integer.parseInt(allParams.get("rooms")),
                    Integer.parseInt(allParams.get("minPrice"))
            );
        }
    }
}
