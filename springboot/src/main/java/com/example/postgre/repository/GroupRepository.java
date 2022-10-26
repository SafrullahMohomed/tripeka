package com.example.postgre.repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.postgre.Model.Data.Groups;
import com.example.postgre.Model.Data.Users;

import javax.persistence.criteria.CriteriaBuilder;

@Repository
public interface GroupRepository extends JpaRepository<Groups, Integer> {

    @Query(value = "from Users where user_id = ?1")
    Users findGroupsByUserId(Integer user_id);

    // Groups findUsersByGroupId(Integer group_id);
//    @Query(value = "FROM Groups WHERE group_id =?1")
//    Optional<Groups> findUsersInAGroup(@Param("group_id") Integer group_id);
    
    // @Query(value = "FROM Groups WHERE group_id =?1")
    // Optional<Groups> findUsersInAGroup(@Param("group_id") Integer group_id);
}
