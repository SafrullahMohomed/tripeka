package com.example.postgre.Model;


import com.example.postgre.Model.Data.Users;

import javax.persistence.*;


@Entity
public class Car {
    @Id
    @SequenceGenerator(
            name = "car_sequence",
            sequenceName = "car_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "car_sequence"
    )
    private Integer vehicle_id;
    @OneToOne(
            cascade = CascadeType.MERGE
    )
    @JoinColumn(
            name = "user_id",
            referencedColumnName = "user_id"
    )
    private Users users;
    private String driver_nic;
    private String driver_license;
    private String driver_name;
    private String driver_phone;
    private String vehicle_type;
    private String vehicle_name;
    private String vehicle_no_plate;
    private String vehicle_image;
    private Integer max_passengers;
    private String district;
    private Boolean available_status;

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Car() {
    }

    public Car(Integer vehicle_id, String driver_nic, String driver_license, String driver_name, String driver_phone, String vehicle_type, String vehicle_name, String vehicle_no_plate, String vehicle_image, Integer max_passengers, String district, Boolean available_status) {
        this.vehicle_id = vehicle_id;
        this.driver_nic = driver_nic;
        this.driver_license = driver_license;
        this.driver_name = driver_name;
        this.driver_phone = driver_phone;
        this.vehicle_type = vehicle_type;
        this.vehicle_name = vehicle_name;
        this.vehicle_no_plate = vehicle_no_plate;
        this.vehicle_image = vehicle_image;
        this.max_passengers = max_passengers;
        this.district = district;
        this.available_status = available_status;
    }

    public Integer getVehicle_id() {
        return vehicle_id;
    }

    public void setVehicle_id(Integer vehicle_id) {
        this.vehicle_id = vehicle_id;
    }

    public String getDriver_nic() {
        return driver_nic;
    }

    public void setDriver_nic(String driver_nic) {
        this.driver_nic = driver_nic;
    }

    public String getDriver_license() {
        return driver_license;
    }

    public void setDriver_license(String driver_license) {
        this.driver_license = driver_license;
    }

    public String getDriver_name() {
        return driver_name;
    }

    public void setDriver_name(String driver_name) {
        this.driver_name = driver_name;
    }

    public String getDriver_phone() {
        return driver_phone;
    }

    public void setDriver_phone(String driver_phone) {
        this.driver_phone = driver_phone;
    }

    public String getVehicle_type() {
        return vehicle_type;
    }

    public void setVehicle_type(String vehicle_type) {
        this.vehicle_type = vehicle_type;
    }

    public String getVehicle_name() {
        return vehicle_name;
    }

    public void setVehicle_name(String vehicle_name) {
        this.vehicle_name = vehicle_name;
    }

    public String getVehicle_no_plate() {
        return vehicle_no_plate;
    }

    public void setVehicle_no_plate(String vehicle_no_plate) {
        this.vehicle_no_plate = vehicle_no_plate;
    }

    public String getVehicle_image() {
        return vehicle_image;
    }

    public void setVehicle_image(String vehicle_image) {
        this.vehicle_image = vehicle_image;
    }

    public Integer getMax_passengers() {
        return max_passengers;
    }

    public void setMax_passengers(Integer max_passengers) {
        this.max_passengers = max_passengers;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public Boolean getAvailable_status() {
        return available_status;
    }

    public void setAvailable_status(Boolean available_status) {
        this.available_status = available_status;
    }

}
