package com.example.postgre.Model.Requests;
import com.example.postgre.Model.Data.Users;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

public class ComplaintRequest {
    @NotNull
    private String name;
    @NotNull
    private String email;
    @NotNull
    private String message;

    private Users user;


    public ComplaintRequest(String name, String email, String message,Users user) {
        super();
        this.name = name;
        this.email = email;
        this.message = message;
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }
}
