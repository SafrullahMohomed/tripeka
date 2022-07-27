package com.example.postgre.Model.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class Users {

	@Id
	@Column(name = "email")
	private String email;
	@Column(name = "username")
	private String username;
	@Column(name = "hashedpswd")
	private String hashedpswd;
	@Column(name = "userrole")
	private String userrole;
	
	public Users() {}
	
	public Users(String email, String username, String hashedpswd, String userrole) {
		super();
		this.email = email;
		this.username = username;
		this.hashedpswd = hashedpswd;
		this.userrole = userrole;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getHashedpswd() {
		return hashedpswd;
	}

	public void setHashedpswd(String hashedpswd) {
		this.hashedpswd = hashedpswd;
	}

	public String getUserrole() {
		return userrole;
	}

	public void setUserrole(String userrole) {
		this.userrole = userrole;
	}
	
	
	
	
}
