package com.example.postgre.repository;

import com.example.postgre.Model.Data.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface HotelRepository extends JpaRepository <Hotel,Long> {

    // to get all hotels based on common filters
    @Query(value = "from Hotel where LOWER(district) = ?1 and fromDate <= ?2 and toDate >= ?3 and " +
            "noOfAdults >= ?4 and noOfChildren >= ?5 and rooms >= ?6 and priceRoom >= ?7")
    List<Hotel> findAllHotelsAvailableByFilters(
                String district, Date fromDate, Date toDate, Integer noOfAdults,
                Integer noOfChildren, Integer rooms, Integer minPrice
            );

    // to get all hotels with max price and common filters
    @Query(value = "from Hotel where LOWER(district) = ?1 and fromDate <= ?2 and toDate >= ?3 and " +
            "noOfAdults >= ?4 and noOfChildren >= ?5 and rooms >= ?6 and priceRoom >= ?7 and priceRoom <= ?8")
    List<Hotel> findAllHotelsAvailableWithPriceRangeFilters(
            String district, Date fromDate, Date toDate, Integer noOfAdults,
            Integer noOfChildren, Integer rooms, Integer minPrice, Integer maxPrice
    );
}
