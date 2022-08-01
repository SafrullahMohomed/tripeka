package com.example.postgre.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.postgre.Model.Data.Users;

public interface UserRepository extends JpaRepository<Users, Long>{
	
	

}
