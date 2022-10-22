package com.example.postgre.Controller;


import com.example.postgre.Model.Data.Complaint;
import com.example.postgre.Model.Data.ContactUs;
import com.example.postgre.Model.Requests.ComplaintRequest;
import com.example.postgre.Model.Requests.ContactUsRequest;
import com.example.postgre.Model.Response.ComplaintResponse;
import com.example.postgre.Model.Response.ContactUsResponse;
import com.example.postgre.repository.ComplaintRepository;
import com.example.postgre.repository.ContactUsRepository;
import com.example.postgre.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/main")
public class ComplaintController {

    @Autowired
    private ComplaintRepository complaintRepository;

    @Autowired
    private EmailSenderService emailService;

    @PostMapping(value = "/complaint")
    public ResponseEntity<ComplaintResponse> Complaint(@RequestBody @Valid ComplaintRequest complaintRequest){

        try{
            Complaint complaint = new Complaint(complaintRequest.getUser(),complaintRequest.getName(),complaintRequest.getEmail(),complaintRequest.getMessage());
            Complaint afterSaved = complaintRepository.save(complaint);



//            emailService.sendMail(complaintRequest.getEmail());

            return ResponseEntity.status(HttpStatus.OK).body(new ComplaintResponse(true,"Message have been sent Successfully"));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.OK).body(new ComplaintResponse(false, e.toString()));

        }

    }
}
