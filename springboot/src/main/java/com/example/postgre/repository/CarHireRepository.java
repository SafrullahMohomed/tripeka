package com.example.postgre.repository;


import com.example.postgre.Model.CarHire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CarHireRepository extends JpaRepository<CarHire, Integer> {

    //    update the accept status in database
    @Modifying
    @Query(value = "update CarHire c set c.accepted = ?2 where c.hire_id=?1")
    void updateCarAccept(@Param(value = "hire_id") Integer hire_id, @Param(value = "accept_status")
    Boolean accept_status);

    //    update the acceptAndCancelledByUser state
    @Modifying
    @Query(value = "update CarHire c set c.accepted_and_cancelled_by_user = ?2 where c.hire_id=?1")
    void updateCarAcceptedAndCancelledByUser(@Param(value = "hire_id") Integer hire_id,
                                             @Param(value = "accepted_and_cancelled_by_user")
                                             Boolean accepted_and_cancelled_by_user);

    //    update the acceptAndCancelledByUser state
    @Modifying
    @Query(value = "update CarHire c set c.accepted_and_cancelled_by_driver = ?2 where c.hire_id=?1")
    void updateCarAcceptedAndCancelledByDriver(@Param(value = "hire_id") Integer hire_id,
                                             @Param(value = "accepted_and_cancelled_by_driver")
                                             Boolean accepted_and_cancelled_by_driver);

//    select queries
    @Query(value = "from CarHire where user.user_id = ?1")
    List<CarHire> findByUserId(@Param(value = "user_id") Integer user_id);

    @Query(value = "from CarHire where car.users.user_id = ?1")
    List<CarHire> getCarHireByVehicleId(@Param(value = "vehicle_id") Integer vehicle_id);


}
