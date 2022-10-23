package com.example.postgre.Controller;

import com.example.postgre.Model.CarHire;
import com.example.postgre.service.CarHireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/car")
@CrossOrigin(origins = "*")
public class CarHireController {

    @Autowired
    private CarHireService carHireService;

    @Autowired
    public CarHireController(CarHireService carHireService) {
        this.carHireService = carHireService;
    }

    //    get all car hires
    @GetMapping(path = "/allcarhires")
    public List <CarHire> getAllCarHires(){
        return carHireService.getAllCarHires();
    }

    @GetMapping(path = "/carhire/{hire_id}")
    public Optional<CarHire> getCarHireById(@PathVariable("hire_id") Integer hire_id){
        return carHireService.getCarById(hire_id);
    }


//    add the car hire data
    @PostMapping(path = "/addcarhire")
    public void addCarHire(@RequestBody CarHire carHire){
        carHireService.addCarHire(carHire);
    }

//    update the accepted status
    @PutMapping(path = "/updateaccept/{hire_id}")
    public void updateCarAccept(@PathVariable("hire_id") Integer hire_id, @RequestParam(required = false) Boolean accept_status)
    {
        carHireService.updateCarAccept(hire_id, accept_status);
    }

    //    update the accepted_and_cancelled_by_user status
    @PutMapping(path = "/updateacceptandcancelleduser/{hire_id}")
    public void updateCarAcceptedAndCancelledByUser(@PathVariable("hire_id") Integer hire_id, @RequestParam(required = false) Boolean accepted_and_cancelled_by_user)
    {
        carHireService.updateCarAcceptedAndCancelledByUser(hire_id, accepted_and_cancelled_by_user);
    }

    //    update the accepted_and_cancelled_by_driver status
    @PutMapping(path = "/updateacceptandcancelleddriver/{hire_id}")
    public void updateCarAcceptedAndCancelledByDriver(@PathVariable("hire_id") Integer hire_id, @RequestParam(required = false) Boolean accepted_and_cancelled_by_driver)
    {
        carHireService.updateCarAcceptedAndCancelledByDriver(hire_id, accepted_and_cancelled_by_driver);
    }

//    delete the ride
    @DeleteMapping(path = "/deletecarhire/{hire_id}")
    public String deleteCarHire(@PathVariable("hire_id") Integer hire_id)
    {
       return carHireService.deleteCarHire(hire_id);
    }

}
