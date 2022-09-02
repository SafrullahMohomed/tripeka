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

//import com.example.postgre.Execption.ResourceNotFoundException;
import com.example.postgre.Model.Data.Groups;
import com.example.postgre.repository.GroupRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class GroupController {

    @Autowired
    private GroupRepository groupRepository;

    // get all groups for testing
    @GetMapping("/groups")
    public List<Groups> getAllGroups() {
        return groupRepository.findAll();
    }

    // get users groups
    @GetMapping("/groups/{user_id}")
    public List<Groups> getGroupsById(@PathVariable("user_id") Integer user_id) {
        return groupRepository.findByUserId(user_id);
    }

    // get group
    @GetMapping("/trip/{group_id}")
    public Optional<Groups> getGroup(@PathVariable("group_id") Integer group_id) {
        return groupRepository.findById(group_id);
    }

    @PostMapping("/groups/{user_id}")
    public Groups createGroup(@RequestBody Groups groups, @PathVariable Integer user_id) {
        return groupRepository.save(groups);
    }

    @PutMapping("/groups/{group_id}")
    public Groups updateGroup(@RequestBody Groups groups) {
        return groupRepository.save(groups);
    }

    @DeleteMapping("/groups/{group_id}")
    public ResponseEntity<HttpStatus> deleteGroupById(@PathVariable Integer group_id) {
        groupRepository.deleteById(group_id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /*
     * @GetMapping("/groups/{user_id}")
     * public ResponseEntity<Groups> getGroupById(@PathVariable Integer user_id) {
     * Groups groups = groupRepository.findById(user_id)
     * .orElseThrow(() -> new ResourceNotFoundException("No groups created yet"));
     * return ResponseEntity.ok(groups);
     * // return new ResponseEntity<>(groups, HttpStatus.OK);
     * }
     */

}
