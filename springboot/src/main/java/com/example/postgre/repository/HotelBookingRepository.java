package com.example.postgre.repository;

import com.example.postgre.Model.Data.HotelBooking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelBookingRepository extends JpaRepository<HotelBooking,Long> {
}
