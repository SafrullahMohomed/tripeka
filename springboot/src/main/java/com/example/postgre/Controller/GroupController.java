package com.example.postgre.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.postgre.Model.Groups;
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

}
