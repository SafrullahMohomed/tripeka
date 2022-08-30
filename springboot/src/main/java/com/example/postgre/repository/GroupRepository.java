package com.example.postgre.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.postgre.Model.Data.Groups;

@Repository
public interface GroupRepository extends JpaRepository<Groups, Integer> {

    // @Query("SELECT g FROM groups g WHERE g.user_id = :user_id")
    // Groups findByUserId(Integer user_id);

}
