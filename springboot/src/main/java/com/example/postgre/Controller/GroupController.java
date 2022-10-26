package com.example.postgre.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.postgre.Execption.ResourceNotFoundException;
import com.example.postgre.Model.Data.Groups;
import com.example.postgre.Model.Data.Users;
import com.example.postgre.repository.GroupRepository;
import com.example.postgre.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class GroupController {

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private UserRepository userRepository;

    // *** testing ***
    @GetMapping("/groups")
    public List<Groups> getAllGroups() {
        return groupRepository.findAll();
    }

    // Get users' groups
    @GetMapping("/groups/{user_id}")
    public Users getGroupsById(@PathVariable("user_id") Integer user_id) {
        return groupRepository.findGroupsByUserId(user_id);
    }

    // Get group details
    @GetMapping("/trip/{group_id}")
    public Optional<Groups> getGroup(@PathVariable("group_id") Integer group_id) {
        return groupRepository.findById(group_id);
    }

    // Create group
    @PostMapping("/groups/{user_id}")
    public ResponseEntity<Groups> addGroup(@PathVariable("user_id") Integer user_id,
            @RequestBody Groups groupRequest) {
        Groups groups = userRepository.findById(user_id).map(user -> {
            user.addGroup(groupRequest);
            return groupRepository.save(groupRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found User with id = " + user_id));

        return new ResponseEntity<>(groups, HttpStatus.CREATED);
    }

    // Edit group
    @PutMapping("/trip/{group_id}")
    public Groups updateGroup(@RequestBody Groups groups, @PathVariable Integer group_id) {
        return groupRepository.findById(group_id)
                .map(group -> {
                    group.setName(groups.getName());
                    // group.setLocation(groups.getLocation());
                    return groupRepository.save(group);
                })
                .orElseGet(() -> {
                    return groupRepository.save(groups);
                });
    }

    // Delete group
    @DeleteMapping("/groups/{group_id}")
    public ResponseEntity<HttpStatus> deleteGroupById(@PathVariable Integer group_id) {
        groupRepository.deleteById(group_id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Add user to group
    // @PostMapping("/trip/{group_id}")
    // public ResponseEntity<Users> addUser(@RequestBody Users userRequestEmail,
    // @PathVariable Integer group_id) {
    // Users user = groupRepository.findById(group_id)
    // .map(group -> {
    // // Integer userId = userRequestId.getUser_id();
    // String email = userRequestEmail.getEmail();

    // // TODO : If user existed already or Not Found
    // if (email != null) {
    // Users _user = userRepository.findByEmail(email);
    // group.addUser(_user);
    // groupRepository.save(group);
    // return _user;
    // }
    // group.addUser(userRequestEmail);
    // return userRepository.save(userRequestEmail);
    // })
    // .orElseThrow(() -> new ResourceNotFoundException("Not found User"));
    // return new ResponseEntity<>(user, HttpStatus.CREATED);
    // }

    @PostMapping("/trip/{group_id}")
    public ResponseEntity<Users> addUser(@RequestBody Users userRequestId,
            @PathVariable Integer group_id) {
        Users user = groupRepository.findById(group_id)
                .map(group -> {
                    Integer userId = userRequestId.getUser_id();
                    // String email = userRequestEmail.getEmail();

                    // TODO : If user existed already or Not Found
                    if (userId != null) {
                        Users _user = userRepository.findById(userId)
                                .orElseThrow(() -> new ResourceNotFoundException("Not found"));
                        group.addUser(_user);
                        groupRepository.save(group);
                        return _user;
                    }
                    group.addUser(userRequestId);
                    return userRepository.save(userRequestId);
                })
                .orElseThrow(() -> new ResourceNotFoundException("Not found User"));
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    // Delete user from group
    @DeleteMapping("/trip/{group_id}/{user_id}")
    public ResponseEntity<HttpStatus> deleteUserFromGroup(@PathVariable(value = "group_id") Integer group_id,
            @PathVariable(value = "user_id") Integer user_id) {
        Groups group = groupRepository.findById(group_id)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Tutorial with id = " + group_id));

        group.removeUser(user_id);
        groupRepository.save(group);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // @PostMapping("/groups/{user_id}")
    // public Groups createGroup(@RequestBody Groups groups, @RequestBody Users
    // users, @PathVariable Integer user_id) {
    // return groupRepository.save(groups);
    // }

    // @GetMapping("/trip/{group_id}/users")
    // public ResponseEntity<Users> getUsersByGroupId(@PathVariable("group_id")
    // Integer group_id) {
    // Users users = userRepository.findUsersByGroupId(group_id);
    // return new ResponseEntity<>(users, HttpStatus.OK);
    // }

}
