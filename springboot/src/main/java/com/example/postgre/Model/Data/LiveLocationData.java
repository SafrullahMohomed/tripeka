package com.example.postgre.Model.Data;

import java.sql.Timestamp;

public class LiveLocationData {

    String fullName;
    Integer user_id;
    double latitude;
    double longitude;

    public LiveLocationData(String fullName, Integer user_id, double latitude, double longitude) {
        this.fullName = fullName;
        this.user_id = user_id;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    @Override
    public String toString() {
        return "LiveLocationData{" +
                "fullName='" + fullName + '\'' +
                ", user_id=" + user_id +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                '}';
    }
}
