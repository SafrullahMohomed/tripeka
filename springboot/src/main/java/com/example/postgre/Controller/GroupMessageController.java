package com.example.postgre.Controller;


import com.example.postgre.Model.Data.GroupMessages;
import com.example.postgre.Model.Data.GroupMessagesId;
import com.example.postgre.Model.Data.Groups;
import com.example.postgre.Model.Data.Users;
import com.example.postgre.repository.ContactUsRepository;
import com.example.postgre.repository.GroupMessageRepository;
import com.example.postgre.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class GroupMessageController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GroupMessageRepository groupMessageRepository;


    @PostMapping("groupMessages")
    public GroupMessages addGroupMessage(@RequestBody GroupMessages req) {

        Timestamp time = new Timestamp(System.currentTimeMillis());
        Users sender = userRepository.findById(req.getUser_id()).get();
        GroupMessages var1 = new GroupMessages(req.getGroup_id(), req.getUser_id(), sender.getFirstname() + " " + sender.getLastname(),time, req.getMessage(), sender.getProfile_url());
        GroupMessages grpMsg = groupMessageRepository.save(var1);

        return grpMsg;
    }

    @GetMapping("userGroups/{email}")
    public List<Groups> getUsersGroups(@PathVariable String email){
        Users byEmail = userRepository.findByEmail(email);
        return byEmail.getGroups();
    }

    @GetMapping("groupMessages/{group_id}")
    public List<GroupMessages> getGroupMessages(@PathVariable Integer group_id){
        return groupMessageRepository.findByGroup_id(group_id);
    }


}
