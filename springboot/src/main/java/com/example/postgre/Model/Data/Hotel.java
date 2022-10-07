package com.example.postgre.Model.Data;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name = "hotel")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hotel_id")
    private long hotelId;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "bedroom")
    private String bedroom;

    @Column(name = "rooms")
    private Integer rooms;

    @Column(name = "grade")
    private String grade;

    @Column(name = "district")
    private String district;

    @Column(name = "priceroom")
    private Integer priceRoom;

    @Column(name = "facilities")
    private String facilities;

    @Column(name = "short_description")
    private String shortDescription;

    @Column(name = "no_of_children_per_room")
    private Integer noOfChildren;

    @Column(name = "no_of_adults_per_room")
    private Integer noOfAdults;

    @Column(name = "hotel_rating")
    private Integer hotelRating;

    @Column(name = "servicerate")
    private Integer serviceRate;

    @Column(name = "fromdate")
    private Date fromDate;

    @Column(name = "todate")
    private Date toDate;

    public Hotel(){}

    public Hotel(String name, String bedroom, String address, Integer rooms, String grade, String district, Integer priceRoom, String facilities, String shortDescription, Integer noOfChildren, Integer noOfAdults, Integer hotelRating, Integer serviceRate, Date fromDate, Date toDate) {
        super();
        this.name = name;
        this.bedroom = bedroom;
        this.address = address;
        this.rooms = rooms;
        this.grade = grade;
        this.district = district;
        this.priceRoom = priceRoom;
        this.facilities = facilities;
        this.shortDescription = shortDescription;
        this.noOfChildren = noOfChildren;
        this.noOfAdults = noOfAdults;
        this.hotelRating = hotelRating;
        this.serviceRate = serviceRate;
        this.fromDate = fromDate;
        this.toDate = toDate;
    }

    public long getHotelId() {
        return this.hotelId;
    }

    public void setHotelId(long hotelId) {
        this.hotelId = hotelId;
    }

    public String getBedroom() {
        return this.bedroom;
    }

    public void setBedroom(String bedroom) {
        this.bedroom = bedroom;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getRooms() {
        return this.rooms;
    }

    public void setRooms(Integer rooms) {
        this.rooms = rooms;
    }

    public String getGrade() {
        return this.grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getDistrict() {
        return this.district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public Integer getPriceRoom() {
        return this.priceRoom;
    }

    public void setPriceRoom(Integer priceRoom) {
        this.priceRoom = priceRoom;
    }

    public String getFacilities() {
        return this.facilities;
    }

    public void setFacilities(String facilities) {
        this.facilities = facilities;
    }

    public String getShortDescription() {
        return this.shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public Integer getNoOfChildren() {
        return this.noOfChildren;
    }

    public void setNoOfChildren(Integer noOfChildren) {
        this.noOfChildren = noOfChildren;
    }

    public Integer getNoOfAdults() {
        return this.noOfAdults;
    }

    public void setNoOfAdults(Integer noOfAdults) {
        this.noOfAdults = noOfAdults;
    }

    public Integer getHotelRating() {
        return this.hotelRating;
    }

    public void setHotelRating(Integer hotelRating) {
        this.hotelRating = hotelRating;
    }

    public Integer getServiceRate() {
        return this.serviceRate;
    }

    public void setServiceRate(Integer serviceRate) {
        this.serviceRate = serviceRate;
    }

    public Date getFromDate() {
        return this.fromDate;
    }

    public void setFromDate(Date fromDate) {
        this.fromDate = fromDate;
    }

    public Date getToDate() {
        return this.toDate;
    }

    public void setToDate(Date toDate) {
        this.toDate = toDate;
    }
}
