package com.example.postgre.repository;

import com.example.postgre.Model.Data.GroupMessages;
import com.example.postgre.Model.Data.GroupMessagesId;
import com.example.postgre.Model.Data.Groups;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroupMessageRepository extends JpaRepository<GroupMessages, Integer> {

    @Query(value = "from GroupMessages where group_id = ?1")
    List<GroupMessages> findByGroup_id(Integer group_id);

}