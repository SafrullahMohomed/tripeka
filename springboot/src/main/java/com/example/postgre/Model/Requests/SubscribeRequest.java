package com.example.postgre.Model.Requests;

import com.example.postgre.Model.Data.Users;

import javax.validation.constraints.NotNull;

public class SubscribeRequest {

    @NotNull
    private String email;


    private Users user;

    public SubscribeRequest( String email,Users user) {
        super();

        this.email = email;

        this.user = user;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }
}
