package com.example.postgre.repository;

import com.example.postgre.Model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Integer> {

    @Query(value = "from Car where lower(district) = lower(?1) and max_passengers >= ?2")
    List<Car> getCarByValues(String district, Integer no_of_passengers);

    @Query(value = "from Car where users.user_id = ?1")
    List<Car> getCarByUserId(@Param("user_id") Integer user_id);
}
