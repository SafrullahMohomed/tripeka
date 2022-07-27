package com.example.postgre.Model.Response;

public class LoginResponse {
	
	private String email;
	private String role;
	private String token;
	private boolean isSuccess;
	private String msg;
	
	public LoginResponse(String email, String role, String token, boolean isSuccess, String msg) {
		super();
		this.email = email;
		this.role = role;
		this.token = token;
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
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public boolean isSuccess() {
		return isSuccess;
	}
	public void setSuccess(boolean isSuccess) {
		this.isSuccess = isSuccess;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	
	
}
