//package com.example.postgre.Model;
//
//
//import com.example.postgre.Model.Data.Users;
//
//import javax.persistence.*;
//import java.sql.Time;
//import java.util.Date;
//
//@Entity
//public class CarBooking {
//    @Id
//    @SequenceGenerator(
//            name = "carbooking_sequence",
//            sequenceName = "carbooking_sequence",
//            allocationSize = 1
//    )
//    @GeneratedValue(
//            strategy = GenerationType.SEQUENCE,
//            generator = "carbooking_sequence"
//    )
//    private Integer car_booking_id;
//    @OneToOne(
//            cascade = CascadeType.MERGE
//    )
//    @JoinColumn(
//            name = "vehicle_id",
//            referencedColumnName = "vehicle_id"
//    )
//    private Car car;
//    @OneToOne(
//            cascade = CascadeType.MERGE
//    )
//    @JoinColumn(
//            name = "user_id",
//            referencedColumnName = "user_id"
//    )
//    private Users user;
//    private Date date;
//    private Time time;
//    private String pickup_location;
//    private String drop_location;
//    private String email;
//    private String phone;
//    private Integer passenger;
//
//    public CarBooking(Integer car_booking_id, Car car, Users user, Date date, Time time, String pickup_location, String drop_location, String email, String phone, Integer passenger) {
//        this.car_booking_id = car_booking_id;
//        this.car = car;
//        this.user = user;
//        this.date = date;
//        this.time = time;
//        this.pickup_location = pickup_location;
//        this.drop_location = drop_location;
//        this.email = email;
//        this.phone = phone;
//        this.passenger = passenger;
//    }
//
//    public CarBooking() {
//    }
//
//    public Integer getCar_booking_id() {
//        return car_booking_id;
//    }
//
//    public void setCar_booking_id(Integer car_booking_id) {
//        this.car_booking_id = car_booking_id;
//    }
//
//    public Car getCar() {
//        return car;
//    }
//
//    public void setCar(Car car) {
//        this.car = car;
//    }
//
//    public Users getUser() {
//        return user;
//    }
//
//    public void setUser(Users user) {
//        this.user = user;
//    }
//
//    public Date getDate() {
//        return date;
//    }
//
//    public void setDate(Date date) {
//        this.date = date;
//    }
//
//    public Time getTime() {
//        return time;
//    }
//
//    public void setTime(Time time) {
//        this.time = time;
//    }
//
//    public String getPickup_location() {
//        return pickup_location;
//    }
//
//    public void setPickup_location(String pickup_location) {
//        this.pickup_location = pickup_location;
//    }
//
//    public String getDrop_location() {
//        return drop_location;
//    }
//
//    public void setDrop_location(String drop_location) {
//        this.drop_location = drop_location;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPhone() {
//        return phone;
//    }
//
//    public void setPhone(String phone) {
//        this.phone = phone;
//    }
//
//    public Integer getPassenger() {
//        return passenger;
//    }
//
//    public void setPassenger(Integer passenger) {
//        this.passenger = passenger;
//    }
//}
