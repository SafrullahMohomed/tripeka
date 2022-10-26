package com.example.postgre.Model;

import com.example.postgre.Model.Data.Users;
import org.springframework.data.geo.Point;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;



@Entity
public class CarHire {

    @Id
    @SequenceGenerator(name = "carHire_sequence", sequenceName = "carHire_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "carHire_sequence")
    private Integer hire_id;
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private Users user;
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "vehicle_id", referencedColumnName = "vehicle_id")
    private Car car;
    private String requested_user_phone;
    private Integer total_people;
    private Point pickup;
    private Point drop;
    private Double distance;
    private Double total_price;
    private Boolean booked;
    private Boolean accepted;
    private LocalDate date;
    private LocalTime time;
    private Boolean accepted_and_cancelled_by_user;
    private Boolean accepted_and_cancelled_by_driver;

    private Boolean completed;

    public CarHire() {
    }

    public CarHire(Integer hire_id, Users user, Car car, String requested_user_phone, Integer total_people,
                   Point pickup, Point drop, Double distance, Double total_price, Boolean booked, Boolean accepted,
                   LocalDate date, LocalTime time, Boolean accepted_and_cancelled_by_user,
                   Boolean accepted_and_cancelled_by_driver, Boolean completed) {
        this.hire_id = hire_id;
        this.user = user;
        this.car = car;
        this.requested_user_phone = requested_user_phone;
        this.total_people = total_people;
        this.pickup = pickup;
        this.drop = drop;
        this.distance = distance;
        this.total_price = total_price;
        this.booked = booked;
        this.accepted = accepted;
        this.date = date;
        this.time = time;
        this.accepted_and_cancelled_by_user = accepted_and_cancelled_by_user;
        this.accepted_and_cancelled_by_driver = accepted_and_cancelled_by_driver;
        this.completed = completed;
    }

    public CarHire(Users user, Car car, String requested_user_phone, Integer total_people, Point pickup, Point drop,
                   Double distance, Double total_price, Boolean booked, Boolean accepted, LocalDate date, LocalTime time,
                   Boolean accepted_and_cancelled_by_user, Boolean accepted_and_cancelled_by_driver, Boolean completed) {
        this.user = user;
        this.car = car;
        this.requested_user_phone = requested_user_phone;
        this.total_people = total_people;
        this.pickup = pickup;
        this.drop = drop;
        this.distance = distance;
        this.total_price = total_price;
        this.booked = booked;
        this.accepted = accepted;
        this.date = date;
        this.time = time;
        this.accepted_and_cancelled_by_user = accepted_and_cancelled_by_user;
        this.accepted_and_cancelled_by_driver = accepted_and_cancelled_by_driver;
        this.completed = completed;
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

    public String getRequested_user_phone() {
        return requested_user_phone;
    }

    public void setRequested_user_phone(String requested_user_phone) {
        this.requested_user_phone = requested_user_phone;
    }

    public Integer getTotal_people() {
        return total_people;
    }

    public void setTotal_people(Integer total_people) {
        this.total_people = total_people;
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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public Boolean getAccepted_and_cancelled_by_user() {
        return accepted_and_cancelled_by_user;
    }

    public void setAccepted_and_cancelled_by_user(Boolean accepted_and_cancelled_by_user) {
        this.accepted_and_cancelled_by_user = accepted_and_cancelled_by_user;
    }

    public Boolean getAccepted_and_cancelled_by_driver() {
        return accepted_and_cancelled_by_driver;
    }

    public void setAccepted_and_cancelled_by_driver(Boolean accepted_and_cancelled_by_driver) {
        this.accepted_and_cancelled_by_driver = accepted_and_cancelled_by_driver;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }
}
