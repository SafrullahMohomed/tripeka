package com.example.postgre.Model.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "locations")
public class Locations {
    private String name;
    private String location;
    private String image_url;
    private String description;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getImage_url() {
        return image_url;
    }
    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
}
