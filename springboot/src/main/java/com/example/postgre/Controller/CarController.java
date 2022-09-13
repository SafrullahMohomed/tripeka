package com.example.postgre.Controller;

import com.example.postgre.Model.Car;
import com.example.postgre.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/car")
@CrossOrigin(origins = "http://localhost:3000")
public class CarController {

    private final CarService carService;

    @Autowired
    public CarController(CarService carService) {
        this.carService = carService;
    }


    //    get all car details from car table
    @GetMapping(path = "/allcars")
    public List<Car> getAllCar(){
        return carService.getAllCar();
    }

    @GetMapping(path = "/{vehicle_id}")
    public List<Car> getCarById(@PathVariable("vehicle_id") Integer vehicle_id){
        return carService.getCarById(vehicle_id);
    }

    @PostMapping(path = "/addcar")
    public void addCar(@RequestBody Car car){

        carService.addCar(car);

    }
}
