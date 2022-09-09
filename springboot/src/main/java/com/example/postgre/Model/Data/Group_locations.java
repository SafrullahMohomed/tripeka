package com.example.postgre.Model.Data;

import java.text.DecimalFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "group_locations")
public class Group_locations {
    @Id
    @SequenceGenerator(
            name = "group_locations_sequence",
            sequenceName = "group_locations_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "group_locations_sequence"
    )
    private Integer group_id;
    private DecimalFormat location_cordinate;
    private String location_name;
    
    public Integer getGroup_id() {
        return group_id;
    }
    public void setGroup_id(Integer group_id) {
        this.group_id = group_id;
    }
    public DecimalFormat getLocation_cordinate() {
        return location_cordinate;
    }
    public void setLocation_cordinate(DecimalFormat location_cordinate) {
        this.location_cordinate = location_cordinate;
    }
    public String getLocation_name() {
        return location_name;
    }
    public void setLocation_name(String location_name) {
        this.location_name = location_name;
    }
}
