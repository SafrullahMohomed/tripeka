package com.example.postgre.Controller;


import com.example.postgre.Model.Data.Blogs;
import com.example.postgre.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/moderator")
@CrossOrigin(origins = "*")
public class ModeratorController {


////    need to inject blog repository
    @Autowired
    private BlogRepository blogRepository;

    //    need to create GET /moderator/all
    @GetMapping(path = "/all")
    public List<Blogs> getAllBlogs() {
        return blogRepository.findAll();
    }

    //    need to create GET /moderator/unchecked
    @GetMapping(path = "/unchecked")
    public List<Blogs> getUncheckedBlogs() {
    return null;
}

//    need to create GET /moderator/accepted
    @GetMapping(path = "/accepted")
    public List<Blogs> getAcceptedBlogs() {
        return null;
    }

//    need to create GET /moderator/rejected
    @GetMapping(path = "/rejected")
    public List<Blogs> getRejectedBlogs() {
    return null;
}

//    need to create POST /moderator/accept/{blog_id}
    @PostMapping(path = "/accept/{blog_id}")
    public Blogs acceptBlog(@PathVariable("blog_id") Integer blog_id) {
        Blogs acceptedBlog = blogRepository.findById(blog_id).get();
        acceptedBlog.setModeratedStatus(1);
        return blogRepository.save(acceptedBlog);

    }

//    need to create POST /moderator/reject/{blog_id}
    @PostMapping(path = "/reject/{blog_id}")
    public Blogs rejectBlog(@PathVariable("blog_id") Integer blog_id) {
        Blogs acceptedBlog = blogRepository.findById(blog_id).get();
        acceptedBlog.setModeratedStatus(2);
        return blogRepository.save(acceptedBlog);
    }

}
