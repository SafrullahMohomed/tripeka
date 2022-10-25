package com.example.postgre.Model.Data;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;

@Entity
@Table(name = "hotelbooking")
public class HotelBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hotelbook_id")
    private long hotelBookId;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "firstname")
    private String firstName;

    @Column(name = "lastname")
    private String lastName;

    @Column(name = "address")
    private String address;

    @Column(name = "email")
    private String email;

    @Column(name = "no_of_guest")
    private Integer noOfGuest;

    @Column(name = "no_of_rooms")
    private Integer noOfRooms;

    @Column(name = "checkin_date")
    private Date checkInDate;

    @Column(name = "checkin_time")
    private Time checkInTime;

    @Column(name = "checkout_date")
    private Date checkOutDate;

    @Column(name = "checkout_time")
    private Time checkOutTime;

    @Column(name = "no_of_adults")
    private Integer noOfAdults;

    @Column(name = "no_of_children")
    private Integer noOfChildren;

    public HotelBooking(){}

    public HotelBooking(Integer userId, String firstName, String lastName, String address, String email, Integer noOfGuest, Integer noOfRooms, Date checkInDate, Time checkInTime, Date checkOutDate, Time checkOutTime, Integer noOfAdults, Integer noOfChildren) {
        super();
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.email = email;
        this.noOfGuest = noOfGuest;
        this.noOfRooms = noOfRooms;
        this.checkInDate = checkInDate;
        this.checkInTime = checkInTime;
        this.checkOutDate = checkOutDate;
        this.checkOutTime = checkOutTime;
        this.noOfAdults = noOfAdults;
        this.noOfChildren = noOfChildren;
    }

    public long getHotelBookId() {
        return hotelBookId;
    }

    public void setHotelBookId(long hotelBookId) {
        this.hotelBookId = hotelBookId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getNoOfGuest() {
        return noOfGuest;
    }

    public void setNoOfGuest(Integer noOfGuest) {
        this.noOfGuest = noOfGuest;
    }

    public Integer getNoOfRooms() {
        return noOfRooms;
    }

    public void setNoOfRooms(Integer noOfRooms) {
        this.noOfRooms = noOfRooms;
    }

    public Date getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(Date checkInDate) {
        this.checkInDate = checkInDate;
    }

    public Time getCheckInTime() {
        return checkInTime;
    }

    public void setCheckInTime(Time checkInTime) {
        this.checkInTime = checkInTime;
    }

    public Date getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(Date checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public Time getCheckOutTime() {
        return checkOutTime;
    }

    public void setCheckOutTime(Time checkOutTime) {
        this.checkOutTime = checkOutTime;
    }

    public Integer getNoOfAdults() {
        return noOfAdults;
    }

    public void setNoOfAdults(Integer noOfAdults) {
        this.noOfAdults = noOfAdults;
    }

    public Integer getNoOfChildren() {
        return noOfChildren;
    }

    public void setNoOfChildren(Integer noOfChildren) {
        this.noOfChildren = noOfChildren;
    }
}
