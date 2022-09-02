package com.example.postgre.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.postgre.Model.Data.Users;

public interface UserRepository extends JpaRepository<Users, Integer> {

	Users findByEmail(String email);

	// @Query(value = "from Groups where group_id = ?1")
	// List<Users> findByGroupId(Integer group_id);
}
