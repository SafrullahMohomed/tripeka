package com.example.postgre.service;

import com.example.postgre.Model.CarHire;
import com.example.postgre.repository.CarHireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class CarHireService {

    @Autowired
    private CarHireRepository carHireRepository;

    public CarHireService(CarHireRepository carHireRepository) {
        this.carHireRepository = carHireRepository;
    }

    //    get car hire details
    public List<CarHire> getAllCarHires(){
        return carHireRepository.findAll();
    }


    public void addCarHire(CarHire carHire){
        carHireRepository.save(carHire);
    }

    public Optional<CarHire> getCarById(Integer hire_id) {
        return carHireRepository.findById(hire_id);
    }

    public List<CarHire> getCarHireByUserId(Integer user_id) {
        return carHireRepository.findByUserId(user_id);
    }

    public List<CarHire> getCarHireByVehicleId(Integer vehicle_id) {
        return carHireRepository.getCarHireByVehicleId(vehicle_id);
    }

    @Transactional
    public void updateCarAccept(Integer hire_id, Boolean accept_status) {
        carHireRepository.updateCarAccept(hire_id, accept_status);

    }

    @Transactional
    public void updateCarAcceptedAndCancelledByDriver(Integer hire_id, Boolean accepted_and_cancelled_by_driver) {
        carHireRepository.updateCarAcceptedAndCancelledByDriver(hire_id, accepted_and_cancelled_by_driver);

    }

    @Transactional
    public void updateCarAcceptedAndCancelledByUser(Integer hire_id, Boolean accepted_and_cancelled_by_user) {
        carHireRepository.updateCarAcceptedAndCancelledByUser(hire_id, accepted_and_cancelled_by_user);

    }


//delete the car hire
    public String deleteCarHire(Integer hire_id) {

        Boolean exist = carHireRepository.existsById(hire_id);

        String message;
        if (!exist) {
            message =  "Hire of " + hire_id + " cannot be deleted";
            throw new IllegalStateException("Hire with " + hire_id + "does not exist");
        } else {
            message = "Hire of " + hire_id + " is deleted successfully";
            carHireRepository.deleteById(hire_id);
        }
        return message;

    }

}
