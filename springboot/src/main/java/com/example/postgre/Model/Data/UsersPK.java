package com.example.postgre.Model.Data;

import java.io.Serializable;


public class UsersPK implements Serializable {

    private Integer user_id;
    private String email;

    public UsersPK() {
    }

    public UsersPK(Integer user_id, String email) {
        this.user_id = user_id;
        this.email = email;
    }

}
