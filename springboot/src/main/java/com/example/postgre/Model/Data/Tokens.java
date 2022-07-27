package com.example.postgre.Model.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tokens")
public class Tokens {
	
	@Id
	@Column(name = "token")
	private String token;
	
	@Column(name = "email")
	private String email;
	
	
	public Tokens() {}


	public Tokens(String token, String email) {
		super();
		this.token = token;
		this.email = email;
	}


	public String getToken() {
		return token;
	}


	public void setToken(String token) {
		this.token = token;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}

	
}

