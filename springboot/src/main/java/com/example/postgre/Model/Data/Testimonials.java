package com.example.postgre.Model.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "testimonials")
public class Testimonials {
    @Id
    @SequenceGenerator(
            name = "testimonials_sequence",
            sequenceName = "testimonials_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "testimonials_sequence"
    )
    private Integer user_id;
    private String userimage_url;
    private String content;
    
    public Integer getUser_id() {
        return user_id;
    }
    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }
    public String getUserimage_url() {
        return userimage_url;
    }
    public void setUserimage_url(String userimage_url) {
        this.userimage_url = userimage_url;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    
    
}
