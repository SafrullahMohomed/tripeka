package com.example.postgre.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.postgre.Model.Data.Suggestions;

@Repository
public interface SuggestionsRepository extends JpaRepository<Suggestions, String> {

    // @Query(value = "from Suggestions where location = ?1")
    // Suggestions getDetailsById(String location);

}
