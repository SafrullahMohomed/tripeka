package com.example.postgre.Controller;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.postgre.Model.Data.Groups;
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

    // get users of a group
    // @GetMapping("/asd/{email}")
    // public Set<Groups> getGroupMembers(@PathVariable("email") String email) {
    // return userRepository.findByEmail(email).getGroups();
    // }

    // get users of a group
    // @GetMapping("/trip/{group_id}")
    // public Users getGroupMembers(@PathVariable("group_id") Integer group_id) {
    // return userRepository.findUsersByGroupId(group_id).get;
    // }
}
