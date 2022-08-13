package com.example.postgre.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.postgre.Model.Data.Groups;

@Repository
public interface GroupRepository extends JpaRepository<Groups, Integer> {

}
