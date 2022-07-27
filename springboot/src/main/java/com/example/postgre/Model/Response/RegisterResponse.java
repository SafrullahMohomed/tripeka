package com.example.postgre.Model.Response;

public class RegisterResponse {
	
	private String email;
	private String role;
	private boolean isSuccess;
	private String msg;
	
	public RegisterResponse(String email, String role, boolean isSuccess, String msg) {
		super();
		this.email = email;
		this.role = role;
		this.isSuccess = isSuccess;
		this.msg = msg;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public boolean getIsSuccess() {
		return isSuccess;
	}

	public void setIsSuccess(boolean isSuccess) {
		this.isSuccess = isSuccess;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	
	

}
