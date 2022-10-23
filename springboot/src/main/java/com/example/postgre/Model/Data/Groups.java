package com.example.postgre.Model.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "group_id")
public class Groups {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer group_id;
    private Integer owner_id;

    private String name;
    private String location;
    private String description;
    private String owner;
    private LocalDate start_date;
    private LocalDate end_date;
    private String url;
    private String lat;
    private String lon;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })

    private List<Users> users = new ArrayList<>();

    // @ManyToMany(cascade = { CascadeType.ALL }, mappedBy = "groups")
    // @JsonIgnore
    // private Set<Users> users = new HashSet<>();

    public Groups() {

    }

    public Groups(Integer group_id, Integer owner_id, String name, String location, String description, String owner,
            LocalDate start_date, LocalDate end_date, String url, String lat, String lon, List<Users> users) {
        this.group_id = group_id;
        this.owner_id = owner_id;
        this.name = name;
        this.location = location;
        this.description = description;
        this.owner = owner;
        this.start_date = start_date;
        this.end_date = end_date;
        this.url = url;
        this.lat = lat;
        this.lon = lon;
        this.users = users;
    }

    public Integer getGroup_id() {
        return group_id;
    }

    public void setGroup_id(Integer group_id) {
        this.group_id = group_id;
    }

    public Integer getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(Integer owner_id) {
        this.owner_id = owner_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public LocalDate getStart_date() {
        return start_date;
    }

    public void setStart_date(LocalDate start_date) {
        this.start_date = start_date;
    }

    public LocalDate getEnd_date() {
        return end_date;
    }

    public void setEnd_date(LocalDate end_date) {
        this.end_date = end_date;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLon() {
        return lon;
    }

    public void setLon(String lon) {
        this.lon = lon;
    }

    public List<Users> getUsers() {
        return users;
    }

    public void setUsers(List<Users> users) {
        this.users = users;
    }

    public void addUser(Users user) {
        this.users.add(user);
        user.getGroups().add(this);
    }

    public void removeUser(Integer user_id) {
        Users user = this.users.stream().filter(t -> t.getUser_id() == user_id).findFirst().orElse(null);
        if (user != null) {
            this.users.remove(user);
            user.getGroups().remove(this);
        }
    }
}
