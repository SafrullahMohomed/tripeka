package com.example.postgre.Model.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "hotel_images")
public class Hotel_images {
    @Id
    @SequenceGenerator(
            name = "hotel_images_sequence",
            sequenceName = "hotel_images_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "hotel_images_sequence"
    )
    private Integer hotel_id;
    private String hotel_image_url;

    public Integer getHotel_id() {
        return hotel_id;
    }
    public void setHotel_id(Integer hotel_id) {
        this.hotel_id = hotel_id;
    }
    public String getHotel_image_url() {
        return hotel_image_url;
    }
    public void setHotel_image_url(String hotel_image_url) {
        this.hotel_image_url = hotel_image_url;
    }

    
}
