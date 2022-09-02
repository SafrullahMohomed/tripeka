package com.example.postgre.Model.Data;

import java.sql.Time;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "hotel_owner")
public class Hotel_owner {
    @Id
    @SequenceGenerator(
            name = "hotel_owner_sequence",
            sequenceName = "hotel_owner_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "hotel_owner_sequence"
    )
    private Integer hotel_id;
    private String name;
    private Time check_in;
    private Time check_out;
    private String description;
    private String location;
    
    public Integer getHotel_id() {
        return hotel_id;
    }
    public void setHotel_id(Integer hotel_id) {
        this.hotel_id = hotel_id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Time getCheck_in() {
        return check_in;
    }
    public void setCheck_in(Time check_in) {
        this.check_in = check_in;
    }
    public Time getCheck_out() {
        return check_out;
    }
    public void setCheck_out(Time check_out) {
        this.check_out = check_out;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    
}
