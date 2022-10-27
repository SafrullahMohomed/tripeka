package com.example.postgre.Controller;

import com.example.postgre.Model.Data.Complaint;
import com.example.postgre.Model.Data.Subscribe;
import com.example.postgre.Model.Requests.ComplaintRequest;
import com.example.postgre.Model.Requests.SubscribeRequest;
import com.example.postgre.Model.Response.ComplaintResponse;
import com.example.postgre.Model.Response.SubscribeResponse;
import com.example.postgre.repository.ComplaintRepository;
import com.example.postgre.repository.SubscribeRepository;
import com.example.postgre.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/main")
public class SubscribeController {

    @Autowired
    private SubscribeRepository subscribeRepository;


    @PostMapping(value = "/subscribe")
    public ResponseEntity<SubscribeResponse> Subscribe(@RequestBody @Valid SubscribeRequest subscribeRequest) {

        try {
            Subscribe subscribe = new Subscribe(subscribeRequest.getUser(), subscribeRequest.getEmail());
            Subscribe afterSaved = subscribeRepository.save(subscribe);


//            emailService.sendMail(complaintRequest.getEmail());

            return ResponseEntity.status(HttpStatus.OK).body(new SubscribeResponse(true, "Successfully Subscribed"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.OK).body(new SubscribeResponse(false, e.toString()));

        }

    }
}