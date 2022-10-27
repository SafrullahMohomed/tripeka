package com.example.postgre.Model.Requests;

import javax.validation.constraints.NotNull;


public class BlogRequest {

    @NotNull
    private  long userId;
    @NotNull
    private int blogId;
    @NotNull
    private String title;
    @NotNull
    private  String description;

    @NotNull
    private  boolean status = false;

    public  BlogRequest( long userId,String title,String description,boolean status){
      super();
      this.userId = userId;
      this.title = title;
      this.description = description;
      this.status =status;

    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public int getBlogId() {
        return blogId;
    }

    public void setBlogId(int blogId) {
        this.blogId = blogId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
    
}
