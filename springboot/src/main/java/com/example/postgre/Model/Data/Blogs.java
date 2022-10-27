package com.example.postgre.Model.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Blogs {
    @Id
    @SequenceGenerator(name = "blogs_sequence", sequenceName = "blogs_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "blogs_sequence")
    private Integer blog_id;
    private String title;
    private String subtitle;
    private String location;
    private String content;
    private Integer user_id;
    private String image_url;

    private Integer moderatedStatus;

    public Blogs() {
    }

    public Blogs(Integer blog_id, String title, String subtitle, String location, String content, Integer user_id,
            String image_url, Integer moderatedStatus) {
        this.blog_id = blog_id;
        this.title = title;
        this.subtitle = subtitle;
        this.location = location;
        this.content = content;
        this.user_id = user_id;
        this.image_url = image_url;
        this.moderatedStatus = moderatedStatus;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public Integer getBlog_id() {
        return blog_id;
    }

    public void setBlog_id(Integer blog_id) {
        this.blog_id = blog_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public Integer getModeratedStatus() {
        return moderatedStatus;
    }

    public void setModeratedStatus(Integer moderatedStatus) {
        this.moderatedStatus = moderatedStatus;
    }
}
