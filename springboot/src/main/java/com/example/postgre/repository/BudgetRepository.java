package com.example.postgre.repository;

import com.example.postgre.Model.Budget;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BudgetRepository extends JpaRepository<Budget, Integer> {

    //    to get the budget from the group id
    @Query(value = "from Budget where group_id = ?1")
    List<Budget> findAllByGroupIds(@Param("group_id") Integer group_id);

    // to get the budget from the group id and user id
    @Query(value = "from Budget where group_id = ?1 and user_id = ?2")
    List<Budget> findAllByGroupIdAndUserId(@Param("group_id") Integer group_id, @Param("user_id") Integer user_id);


    //get the total expenses for a trip
    @Query("select sum(cast(amount as double)) from Budget where group_id = ?1")
    Double getTotalAmount(@Param("group_id") Integer group_id);

    //    get the individual total of a user
    @Query("select sum(cast(amount as double)) from Budget where group_id = ?1 and user_id = ?2")
    Double getIndividualTotalAmount(@Param("group_id") Integer group_id, @Param("user_id") Integer user_id);

    //get the average amount for the trip
    @Query("select avg(cast(amount as double) ) from Budget where group_id = ?1")
    Double getAverageAmount(@Param("group_id") Integer group_id);
}

