package com.example.postgre.Model.Requests;

import javax.validation.constraints.NotNull;

public class RegisterRequest {
	
	@NotNull
	private String email;


	@NotNull
	private String firstname;
	@NotNull
	private String lastname;

	@NotNull
	private String role;
	@NotNull
	private String hashedPswd;
	
	public RegisterRequest(String email, String role, String hashedPswd, String firstname, String lastname) {
		super();
		this.email = email;
		this.role = role;
		this.hashedPswd = hashedPswd;
		this.firstname = firstname;
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getHashedPswd() {
		return hashedPswd;
	}

	public void setHashedPswd(String hashedPswd) {
		this.hashedPswd = hashedPswd;
	}
	
	

}
