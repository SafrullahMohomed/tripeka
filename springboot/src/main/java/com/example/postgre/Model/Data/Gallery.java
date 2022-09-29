package com.example.postgre.Model.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Gallery {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer photo_id;
    private Integer group_id;
    private String url;

    public Gallery() {
    }

    public Gallery(Integer photo_id, Integer group_id, String url) {
        this.photo_id = photo_id;
        this.group_id = group_id;
        this.url = url;
    }

    public Integer getPhoto_id() {
        return photo_id;
    }

    public void setPhoto_id(Integer photo_id) {
        this.photo_id = photo_id;
    }

    public Integer getGroup_id() {
        return group_id;
    }

    public void setGroup_id(Integer group_id) {
        this.group_id = group_id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}
