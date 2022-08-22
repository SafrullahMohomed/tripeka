package com.example.postgre.Controller;

import com.example.postgre.Model.Jwt.JwtRequest;
import com.example.postgre.Model.Jwt.JwtResponse;
import com.example.postgre.repository.UserRepository;
import com.example.postgre.service.UserService;
import com.example.postgre.utility.JWTUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
public class HomeController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private JWTUtility jwtUtility;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String home() {
        return "Welcome to Daily Code Buffer!!";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/authenticate")
    public JwtResponse authenticate(@RequestBody JwtRequest jwtRequest) throws Exception{

        System.out.println("In /authenticate");
        System.out.println(jwtRequest.getUsername());
        System.out.println(jwtRequest.getPassword());
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            jwtRequest.getUsername(),
                            jwtRequest.getPassword()
                    )
            );
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }

        final UserDetails userDetails
                = userService.loadUserByUsername(jwtRequest.getUsername());

        final String token =
                jwtUtility.generateToken(userDetails);

        String role = String.valueOf(userDetails.getAuthorities());
        System.out.println("SHAKALAKA BOOM BOOM" + role );
        role = role.substring(1, role.length() - 1);

        return  new JwtResponse(token, role);
    }

    @GetMapping("/somebody")
    public String somebody() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = userDetails.getUsername();
        return "Hello, " + username;
    }
}
