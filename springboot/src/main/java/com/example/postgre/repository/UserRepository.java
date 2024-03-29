package com.example.postgre.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.postgre.Model.Data.Groups;
import com.example.postgre.Model.Data.Users;
import org.springframework.data.repository.query.Param;

import javax.persistence.criteria.CriteriaBuilder;

public interface UserRepository extends JpaRepository<Users, Integer> {

	@Query(value = "from Users where email = ?1")
	Users findByEmail(String email);

    @Query(value = "select lastname from Users where user_id = ?1")
    String GetUserNameByUserId(@Param("user_id") Integer user_id);

//    @Query(value = "select user_id from Users where user_id = 2 ")
//    Integer totalUser();

//	get all users from a group
//	@Query(value = "from Users where group_id = ?1")
//	List<Users> findAllByGroupId(@Param("group_id") Integer group_id);

	// get all users from a group
	// @Query(value = "from Users where group_id = ?1")
	// List<Users> findAllByGroupId(@Param("group_id") Integer group_id);

	// Users findUsersByGroupId(Integer group_id);

}
