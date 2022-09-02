package com.example.postgre.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.postgre.Model.Data.Groups;

@Repository
public interface GroupRepository extends JpaRepository<Groups, Integer> {

    @Query(value = "from Groups where user_id = ?1")
    List<Groups> findByUserId(Integer user_id);

}
