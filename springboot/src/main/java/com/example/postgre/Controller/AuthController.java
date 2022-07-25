package com.example.postgre.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.yaml.snakeyaml.util.EnumUtils;

import com.example.postgre.Constants.RegisterableRoles;
import com.example.postgre.Model.Data.Tokens;
import com.example.postgre.Model.Data.Users;
import com.example.postgre.Model.Requests.LoginRequest;
import com.example.postgre.Model.Requests.RegisterRequest;
import com.example.postgre.Model.Response.IntrospectResponse;
import com.example.postgre.Model.Response.LoginResponse;
import com.example.postgre.Model.Response.RegisterResponse;
import com.example.postgre.repository.TokenRepository;
import com.example.postgre.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/v1/auth")
public class AuthController {

	@Autowired
	UserRepository userRepository;

	@Autowired
	TokenRepository tokenRepository;

	@PostMapping(value = "/register")
	public ResponseEntity<RegisterResponse> registerUser(@RequestBody @Valid RegisterRequest registerRequest) {

		try {
			// CHECK USER EXIST
			List<Users> registeredUsers = userRepository.findAll();
			for (Users users : registeredUsers) {
				if (users.getEmail().equals(registerRequest.getEmail())) {
					return ResponseEntity.status(HttpStatus.OK)
							.body(new RegisterResponse(null, null, false, "User Already Exists"));
				}
			}

			// CHECK ROLE
			RegisterableRoles[] allowedRoles = RegisterableRoles.values();
			boolean isValidRole = false;
			for (RegisterableRoles registerableRoles : allowedRoles) {
				if (registerableRoles.toString().equals(registerRequest.getRole())) {
					isValidRole = true;
					break;
				}
			}
			if (!isValidRole) {
				return ResponseEntity.status(HttpStatus.OK)
						.body(new RegisterResponse(null, null, false, "Invalid Role"));
			}

			// SAVE USER
			Users newUser = new Users(registerRequest.getEmail(), registerRequest.getUserName(),
					registerRequest.getHashedPswd(), registerRequest.getRole());
			Users afterSaved = userRepository.save(newUser);

			// RETURN RESPONSE
			return ResponseEntity.status(HttpStatus.OK).body(new RegisterResponse(afterSaved.getEmail(),
					afterSaved.getUserrole(), true, "Registration Success"));

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(new RegisterResponse(null, null, false, e.toString()));
		}
	}

	@PostMapping(value = "/login")
	public ResponseEntity<LoginResponse> loginUser(@RequestBody @Valid LoginRequest loginRequest) {

		try {
			// USER EXISTS
			List<Users> registeredUsers = userRepository.findAll();
			Users user = null;
			for (Users users : registeredUsers) {
				if (users.getEmail().equals(loginRequest.getEmail())) {
					user = users;
					break;
				}
			}
			if (user == null) {
				return ResponseEntity.status(HttpStatus.OK)
						.body(new LoginResponse(null, null, null, false, "User Not Exists"));
			}

			// USER PASWD MATCH
			if (!user.getHashedpswd().equals(loginRequest.getHashedPswd())) {
				return ResponseEntity.status(HttpStatus.OK)
						.body(new LoginResponse(null, null, null, false, "Wrong Password"));
			}

			// TOKEN GENERATE
			String token = UUID.randomUUID().toString();

			// TOKEN SAVE
			Tokens tokentosave = new Tokens(token, user.getEmail());
			Tokens aftersave = tokenRepository.save(tokentosave);

			// RETURN
			LoginResponse resp = new LoginResponse(aftersave.getEmail(), user.getUserrole(),aftersave.getToken(), true,
					"Login Success");
			return ResponseEntity.status(HttpStatus.OK).body(resp);

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(new LoginResponse(null, null, null, false, e.toString()));
		}

	}

	@GetMapping(value = "/logout")
	public ResponseEntity<Boolean> logout(@NotNull @RequestParam(name = "token") String token) {
		try {
			List<Tokens> tokens = tokenRepository.findAll();
			System.out.println(token);
			for (Tokens tokensInDB : tokens) {
				if (tokensInDB.getToken().equals(token)) {
					tokenRepository.delete(tokensInDB);
				}
			}
			return ResponseEntity.status(HttpStatus.OK).body(true);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK).body(false);
		}
	}
	
	@GetMapping(value = "/introspect")
	public ResponseEntity<IntrospectResponse> introspect(@NotNull @RequestParam(name = "token") String token) {
		try {
			Tokens tokenInDB=null;
			List<Tokens> tokens = tokenRepository.findAll();
			for (Tokens tokensInDB : tokens) {
				if (tokensInDB.getToken().equals(token)) {
					tokenInDB=tokensInDB;
					break;
				}
			}
			
			if (tokenInDB==null) {
				return ResponseEntity.status(HttpStatus.OK).body(new IntrospectResponse(null, null, null, false, "No Such Token"));	
			}
			
			String email=tokenInDB.getEmail();
			List<Users> registeredUsers = userRepository.findAll();
			Users user = null;
			for (Users users : registeredUsers) {
				if (users.getEmail().equals(email)) {
					user = users;
					break;
				}
			}		
				
			if (user==null) {
				return ResponseEntity.status(HttpStatus.OK).body(new IntrospectResponse(null, null, null, false, "No Such User"));	
			}
			
			return ResponseEntity.status(HttpStatus.OK).body(new IntrospectResponse(user.getEmail(), user.getUserrole(), tokenInDB.getToken(), true, "Token Valid"));
			
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK).body(new IntrospectResponse(null, null, null, false, e.toString()));
		}
	}

}
