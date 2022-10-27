package com.example.postgre.Controller;

import java.util.List;

import com.example.postgre.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.postgre.Model.Data.Users;
import com.example.postgre.repository.GroupRepository;
import com.example.postgre.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GroupRepository groupRepository;


    // get users
    @GetMapping("/users")
    public List<Users> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping(path = "/totalusers")
    public Long totalUser(){
        return userRepository.count();
    }



}
