package com.example.postgre.Model;

import com.example.postgre.Model.Data.Users;
import org.springframework.data.geo.Point;

import javax.persistence.*;

public class CarHire {

    @Id
    @SequenceGenerator(
            name = "carHire_sequence",
            sequenceName = "carHire_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "carHire_sequence"
    )
    private Integer hire_id;
    @OneToOne(
            cascade = CascadeType.MERGE
    )
    @JoinColumn(
            name = "user_id",
            referencedColumnName = "user_id"
    )
    private Users user;
    @OneToOne(
            cascade = CascadeType.MERGE
    )
    @JoinColumn(
            name = "vehicle_id",
            referencedColumnName = "vehicle_id"
    )
    private Car car;
    private Point pickup;
    private Point drop;
    private Double distance;
    private Double total_price;
    private Boolean booked;
    private Boolean accepted;
    private String current_status;

    public CarHire() {
    }

    public CarHire(Integer hire_id, Users user, Car car, Point pickup, Point drop, Double distance, Double total_price,
                   Boolean booked, Boolean accepted, String current_status) {
        this.hire_id = hire_id;
        this.user = user;
        this.car = car;
        this.pickup = pickup;
        this.drop = drop;
        this.distance = distance;
        this.total_price = total_price;
        this.booked = booked;
        this.accepted = accepted;
        this.current_status = current_status;
    }

    public CarHire(Users user, Car car, Point pickup, Point drop, Double distance, Double total_price, Boolean booked,
                   Boolean accepted, String current_status) {
        this.user = user;
        this.car = car;
        this.pickup = pickup;
        this.drop = drop;
        this.distance = distance;
        this.total_price = total_price;
        this.booked = booked;
        this.accepted = accepted;
        this.current_status = current_status;
    }

    public Integer getHire_id() {
        return hire_id;
    }

    public void setHire_id(Integer hire_id) {
        this.hire_id = hire_id;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public Point getPickup() {
        return pickup;
    }

    public void setPickup(Point pickup) {
        this.pickup = pickup;
    }

    public Point getDrop() {
        return drop;
    }

    public void setDrop(Point drop) {
        this.drop = drop;
    }

    public Double getDistance() {
        return distance;
    }

    public void setDistance(Double distance) {
        this.distance = distance;
    }

    public Double getTotal_price() {
        return total_price;
    }

    public void setTotal_price(Double total_price) {
        this.total_price = total_price;
    }

    public Boolean getBooked() {
        return booked;
    }

    public void setBooked(Boolean booked) {
        this.booked = booked;
    }

    public Boolean getAccepted() {
        return accepted;
    }

    public void setAccepted(Boolean accepted) {
        this.accepted = accepted;
    }

    public String getCurrent_status() {
        return current_status;
    }

    public void setCurrent_status(String current_status) {
        this.current_status = current_status;
    }
}
