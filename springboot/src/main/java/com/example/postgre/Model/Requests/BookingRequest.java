package com.example.postgre.Model.Requests;

import javax.validation.constraints.NotNull;

public class BookingRequest {

    @NotNull
    private String token;
    @NotNull
    private Integer amount;
    @NotNull
    private Integer userId;
    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    @NotNull
    private String address;
    @NotNull
    private String email;
    @NotNull
    private Integer noOfGuests;
    @NotNull
    private Integer noOfRooms;
    @NotNull
    private String checkInDate;
    @NotNull
    private String checkInTime;
    @NotNull
    private String checkOutDate;
    @NotNull
    private String checkOutTime;
    @NotNull
    private Integer noOfAdults;
    @NotNull
    private Integer noOfChildren;

    // for deserialization
    public BookingRequest(){}

    public BookingRequest(String token, Integer amount, Integer userId, String firstName, String lastName, String address, String email, Integer noOfGuests, Integer noOfRooms, String checkInDate, String checkInTime, String checkOutDate, String checkOutTime, Integer noOfAdults, Integer noOfChildren) {
        super();
        this.token = token;
        this.amount = amount;
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.email = email;
        this.noOfGuests = noOfGuests;
        this.noOfRooms = noOfRooms;
        this.checkInDate = checkInDate;
        this.checkInTime = checkInTime;
        this.checkOutDate = checkOutDate;
        this.checkOutTime = checkOutTime;
        this.noOfAdults = noOfAdults;
        this.noOfChildren = noOfChildren;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Integer getAmount() {
        return amount;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
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

    public Integer getNoOfGuests() {
        return noOfGuests;
    }

    public void setNoOfGuests(Integer noOfGuests) {
        this.noOfGuests = noOfGuests;
    }

    public Integer getNoOfRooms() {
        return noOfRooms;
    }

    public void setNoOfRooms(Integer noOfRooms) {
        this.noOfRooms = noOfRooms;
    }

    public String getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(String checkInDate) {
        this.checkInDate = checkInDate;
    }

    public String getCheckInTime() {
        return checkInTime;
    }

    public void setCheckInTime(String checkInTime) {
        this.checkInTime = checkInTime;
    }

    public String getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(String checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public String getCheckOutTime() {
        return checkOutTime;
    }

    public void setCheckOutTime(String checkOutTime) {
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
