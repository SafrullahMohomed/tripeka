package com.example.postgre.Model.Requests;

import javax.validation.constraints.NotNull;

public class LoginRequest {

	@NotNull
	private String email;
	@NotNull
	private String hashedPswd;
	
	public LoginRequest(String email, String hashedPswd) {
		super();
		this.email = email;
		this.hashedPswd = hashedPswd;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getHashedPswd() {
		return hashedPswd;
	}
	public void setHashedPswd(String hashedPswd) {
		this.hashedPswd = hashedPswd;
	}
	
	
}
