package com.example.postgre.repository;

import com.example.postgre.Model.Data.Blogs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<Blogs, Integer> {


}
