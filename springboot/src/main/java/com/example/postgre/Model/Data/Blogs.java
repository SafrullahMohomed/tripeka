package com.example.postgre.Model.Data;

import javax.persistence.Table;

@Entity
@Table(name = "blogs")
public class Blogs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer blog_id;
    private String title;
    private String subtitle;
    private String location;
    private String content;
    private Integer user_id;
    
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
    
}
