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
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

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

	@Column(name = "firstname")
	private String firstname;

	@Column(name = "lastname")
	private String lastname;
	@Column(name = "hashedpswd")
	private String hashedpswd;
	@Column(name = "userrole")
	private String userrole;

	// @ManyToMany(cascade = CascadeType.ALL)
	// @JoinTable(name = "user_groups", joinColumns = @JoinColumn(name = "user_id"),
	// inverseJoinColumns = @JoinColumn(name = "group_id"))
	// Set<Groups> groups;

	@ManyToMany(fetch = FetchType.LAZY, cascade = {
			CascadeType.PERSIST,
			CascadeType.MERGE
	})
	@JoinTable(name = "user_groups", joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = {
			@JoinColumn(name = "group_id") })
	Set<Groups> groups = new HashSet<>();

	public Users() {
	}

	public Users(String email, String username, String firstname, String lastname, String hashedpswd, String userrole) {
		super();
		this.email = email;
		this.username = username;
		this.hashedpswd = hashedpswd;
		this.userrole = userrole;
		this.firstname = firstname;
		this.lastname = lastname;
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

	public void addGroup(Groups group) {
		groups.add(group);
	}

}
