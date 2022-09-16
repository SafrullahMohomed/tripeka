package com.example.postgre.Model.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.ManyToMany;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
// @IdClass(UsersPK.class)
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "user_id")
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer user_id;

	@Column(name = "email")
	private String email;

	@Column(name = "firstname")
	private String firstname;

	@Column(name = "lastname")
	private String lastname;
	@Column(name = "hashedpswd")
	private String hashedpswd;
	@Column(name = "userrole")
	private String userrole;

	@ManyToMany(fetch = FetchType.LAZY, cascade = {
			CascadeType.PERSIST,
			CascadeType.MERGE
	}, mappedBy = "users")

	private List<Groups> groups = new ArrayList<>();

	public Users() {
	}

	public Users(String email, String firstname, String lastname, String hashedpswd, String userrole) {
		super();
		this.email = email;
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

	public List<Groups> getGroups() {
		return groups;
	}

	public void setGroups(List<Groups> groups) {
		this.groups = groups;
	}

	public void addGroup(Groups group) {
		this.groups.add(group);
		group.getUsers().add(this);
	}

}
