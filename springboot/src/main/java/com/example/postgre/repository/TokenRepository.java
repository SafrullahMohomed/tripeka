package com.example.postgre.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.postgre.Model.Data.Tokens;

public interface TokenRepository extends JpaRepository<Tokens, Long>{

}

