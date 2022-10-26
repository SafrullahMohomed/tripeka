package com.example.postgre.service;

import com.example.postgre.Model.Car;
import com.example.postgre.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class CarService {
    private final CarRepository carRepository;


    @Autowired
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> getAllCar() {
        return carRepository.findAll();
    }

    public List<Car> getCarById(Integer vehicle_id) {
        return carRepository.findAllById(Collections.singleton(vehicle_id));
    }


//    insert car data
    public void addCar(Car car) {
        carRepository.save(car);
    }

    public List<Car> getCarByValues(String district, Integer no_of_passengers) {
        return carRepository.getCarByValues(district, no_of_passengers);
    }

    public List<Car> getCarByUserId(Integer user_id) {
        return carRepository.getCarByUserId(user_id);
    }
}
