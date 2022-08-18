package com.example.postgre.Controller;

import com.example.postgre.Model.Data.ContactUs;
import com.example.postgre.Model.Requests.ContactUsRequest;
import com.example.postgre.Model.Response.ContactUsResponse;
import com.example.postgre.Model.Response.RegisterResponse;
import com.example.postgre.repository.ContactUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/main")
public class ContactUsController {

    @Autowired
    private ContactUsRepository contactUsRepository;

    @PostMapping(value = "/contactus")
    public ResponseEntity<ContactUsResponse> ContactUs(@RequestBody @Valid ContactUsRequest contactUsRequest){

        try{
            ContactUs contactUs = new ContactUs(contactUsRequest.getName(),contactUsRequest.getEmail(), contactUsRequest.getMessage());
            ContactUs afterSaved = contactUsRepository.save(contactUs);
            return ResponseEntity.status(HttpStatus.OK).body(new ContactUsResponse(true,"Message have been sent Successfully"));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.OK).body(new ContactUsResponse(false, e.toString()));

        }

    }
}
