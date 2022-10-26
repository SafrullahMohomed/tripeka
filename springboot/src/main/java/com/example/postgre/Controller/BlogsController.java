package com.example.postgre.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.postgre.Model.Data.Blogs;
import com.example.postgre.repository.BlogRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class BlogsController {

    @Autowired
    private BlogRepository blogRepository;

    @GetMapping("/blogs")
    public List<Blogs> getAllGroups() {
        return blogRepository.findAll();
    }

    @PostMapping("/blogs")
    public Blogs createBlogs(@RequestBody Blogs blogs) {
        return blogRepository.save(blogs);
    }

}
