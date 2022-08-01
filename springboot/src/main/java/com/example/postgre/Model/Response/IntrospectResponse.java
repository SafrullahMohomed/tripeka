package com.example.postgre.Model.Response;

public class IntrospectResponse {
	
	private String email;
	private String role;
	private String token;
	private boolean isValid;
	private String msg;
	
	public IntrospectResponse(String email, String role, String token, boolean isValid, String msg) {
		super();
		this.email = email;
		this.role = role;
		this.token = token;
		this.isValid = isValid;
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
		return isValid;
	}
	public void setSuccess(boolean isSuccess) {
		this.isValid = isSuccess;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	
	
}
