package com.example.postgre.Model.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "users")
// @IdClass(UsersPK.class)
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer user_id;

	@Column(name = "email")
	private String email;
	@Column(name = "username")
	private String username;
	@Column(name = "hashedpswd")
	private String hashedpswd;
	@Column(name = "userrole")
	private String userrole;

	// @ManyToMany(cascade = CascadeType.ALL)
	// @JoinColumn(name = "user_id", referencedColumnName = "user_id")
	// private Groups groups;

	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "user_groups", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "group_id"))
	Set<Groups> groups;

	public Users() {
	}

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

	public Integer getUser_id() {
		return user_id;
	}

	public void setUser_id(Integer user_id) {
		this.user_id = user_id;
	}

	public Set<Groups> getGroups() {
		return groups;
	}

	public void setGroups(Set<Groups> groups) {
		this.groups = groups;
	}

}
