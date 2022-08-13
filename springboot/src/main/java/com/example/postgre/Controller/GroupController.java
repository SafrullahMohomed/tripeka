package com.example.postgre.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.postgre.Execption.ResourceNotFoundException;
import com.example.postgre.Model.Data.Groups;
import com.example.postgre.repository.GroupRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class GroupController {

    @Autowired
    private GroupRepository groupRepository;

    // get all groups
    @GetMapping("/groups")
    public List<Groups> getAllGroups() {
        return groupRepository.findAll();
    }

    // get users groups
    @GetMapping("/groups/{group_id}")
    public ResponseEntity<Groups> getGroupById(@PathVariable Integer group_id) {
        Groups groups = groupRepository.findById(group_id)
                .orElseThrow(() -> new ResourceNotFoundException("No groups created yet"));
        return ResponseEntity.ok(groups);
        // return new ResponseEntity<>(groups, HttpStatus.OK);
    }

}
