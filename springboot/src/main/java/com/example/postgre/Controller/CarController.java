package com.example.postgre.Controller;

import com.example.postgre.Model.Car;
import com.example.postgre.repository.CarRepository;
import com.example.postgre.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/car")
@CrossOrigin(origins = "http://localhost:3000")
public class CarController {

    private final CarService carService;
    @Autowired
    CarRepository carRepository;
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

//    get car by user id
@GetMapping(path = "byuserid/{user_id}")
public List<Car> getCarByUserId(@PathVariable("user_id") Integer user_id){
    return carService.getCarByUserId(user_id);
}

    @GetMapping(path = "/getcarbyvalues")
    public List<Car> getCarByValues(@RequestParam("district") String district, @RequestParam("no_of_passengers")
    Integer no_of_passengers){
        return carService.getCarByValues(district, no_of_passengers);
    }

    @PostMapping(path = "/addcar")
    public void addCar(@RequestBody Car car){

        carService.addCar(car);

    }

    @GetMapping(path = "/allcarstotal")
    public Long allCars(){
      return carRepository.count();
    }

}
