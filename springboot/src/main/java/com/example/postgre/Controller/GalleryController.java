package com.example.postgre.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.postgre.Model.Data.Gallery;
import com.example.postgre.repository.GalleryRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class GalleryController {

    @Autowired
    private GalleryRepository galleryRepository;

    @GetMapping("/gallery/{user_id}")
    public List<Gallery> getGroupsById(@PathVariable("user_id") Integer user_id) {
        return galleryRepository.findGalleryByUserId(user_id);
    }

    @PostMapping("/gallery/{user_id}")
    public Gallery createGroup(@RequestBody Gallery gallery, @PathVariable Integer user_id) {
        return galleryRepository.save(gallery);
    }

    @DeleteMapping("/gallery/{photo_id}")
    public ResponseEntity<HttpStatus> deletePhoto(@PathVariable Integer photo_id) {
        galleryRepository.deleteById(photo_id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
