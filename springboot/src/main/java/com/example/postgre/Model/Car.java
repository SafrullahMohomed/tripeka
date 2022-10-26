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
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "user_id",
            referencedColumnName = "user_id"
    )
    private Users users;
    private String driver_phone;
    private String vehicle_type;
    private String vehicle_name;
    private Integer max_passengers;
    private Double price_per_km;
    private String district;

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Car() {
    }

    public Car(Integer vehicle_id, Users users, String driver_phone, String vehicle_type, String vehicle_name,
               Integer max_passengers, Double price_per_km, String district) {
        this.vehicle_id = vehicle_id;
        this.users = users;
        this.driver_phone = driver_phone;
        this.vehicle_type = vehicle_type;
        this.vehicle_name = vehicle_name;
        this.max_passengers = max_passengers;
        this.price_per_km = price_per_km;
        this.district = district;
    }

    public Car(Users users, String driver_phone, String vehicle_type, String vehicle_name, Integer max_passengers,
               Double price_per_km, String district) {
        this.users = users;
        this.driver_phone = driver_phone;
        this.vehicle_type = vehicle_type;
        this.vehicle_name = vehicle_name;
        this.max_passengers = max_passengers;
        this.price_per_km = price_per_km;
        this.district = district;
    }

    public Integer getVehicle_id() {
        return vehicle_id;
    }

    public void setVehicle_id(Integer vehicle_id) {
        this.vehicle_id = vehicle_id;
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

    public Integer getMax_passengers() {
        return max_passengers;
    }

    public void setMax_passengers(Integer max_passengers) {
        this.max_passengers = max_passengers;
    }

    public Double getPrice_per_km() {
        return price_per_km;
    }

    public void setPrice_per_km(Double price_per_km) {
        this.price_per_km = price_per_km;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }


}
