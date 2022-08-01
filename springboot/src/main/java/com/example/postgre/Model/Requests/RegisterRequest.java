package com.example.postgre.Model.Requests;

import javax.validation.constraints.NotNull;

public class RegisterRequest {
	
	@NotNull
	private String email;
	@NotNull
	private String userName;
	@NotNull
	private String role;
	@NotNull
	private String hashedPswd;
	
	public RegisterRequest(String email, String userName, String role, String hashedPswd) {
		super();
		this.email = email;
		this.userName = userName;
		this.role = role;
		this.hashedPswd = hashedPswd;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
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
