package com.example.postgre.Controller;

import com.example.postgre.Model.Data.Users;
import com.example.postgre.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UserDetailsController {

    @Autowired
    private UserRepository userRepository;

    // get users details object
    @GetMapping("/user/{email}")
    public Users getUserDetails(@PathVariable("email") String email) {
        Users user =  userRepository.findByEmail(email);
        return new Users(user.getEmail(), user.getUsername(), user.getFirstname(), user.getLastname(), null, user.getUserrole());
    }
}
