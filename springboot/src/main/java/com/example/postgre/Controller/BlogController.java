package com.example.postgre.Controller;
import com.example.postgre.Model.Data.Blog;
import com.example.postgre.Model.Response.BlogResponse;
import com.example.postgre.Model.Requests.BlogRequest;
import com.example.postgre.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/main")
public class BlogController {

    @Autowired
    private BlogRepository blogRepository;

    @PostMapping(value = "/Blog")
    public ResponseEntity<BlogResponse> Blog(@RequestBody @Valid BlogRequest blogRequest){
        try {
            Blog blog = new Blog(blogRequest.getUserId(),blogRequest.getTitle(),blogRequest.getDescription(),true);


            return ResponseEntity.status(HttpStatus.OK).body(new BlogResponse(true,"Blog posted successflly"));
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.OK).body(new BlogResponse(true,e.toString()));
        }
    }
    @GetMapping(value="/writeBlog")
    public Blog createBlog(@RequestBody Blog blog){return blogRepository.save(blog);

    }
}
