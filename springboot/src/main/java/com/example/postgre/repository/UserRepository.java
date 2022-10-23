package com.example.postgre.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.postgre.Model.Data.Groups;
import com.example.postgre.Model.Data.Users;
import org.springframework.data.repository.query.Param;

import javax.persistence.criteria.CriteriaBuilder;

public interface UserRepository extends JpaRepository<Users, Integer> {

	Users findByEmail(String email);

//	get all users from a group
//	@Query(value = "from Users where group_id = ?1")
//	List<Users> findAllByGroupId(@Param("group_id") Integer group_id);


	// Users findUsersByGroupId(Integer group_id);


}
