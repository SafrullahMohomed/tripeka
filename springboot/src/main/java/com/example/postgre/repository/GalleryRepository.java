package com.example.postgre.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.postgre.Model.Data.Gallery;

@Repository
public interface GalleryRepository extends JpaRepository<Gallery, Integer> {

    // @Query(value = "from Gallery where user_id = ?1")
    // Gallery findGalleryByUserId(@Param("user_id") Integer user_id);

    @Query(value = "from Gallery where user_id = ?1")
    List<Gallery> findGalleryByUserId(@Param("user_id") Integer user_id);

}
