package com.example.postgre.Model.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "groups_users")
public class Groups_users {
    @Id
    @SequenceGenerator(
            name = "groups_users_sequence",
            sequenceName = "groups_users_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "groups_users_sequence"
    )
    private Integer group_id;
    private Integer user_id;

    public Integer getGroup_id() {
        return group_id;
    }
    public void setGroup_id(Integer group_id) {
        this.group_id = group_id;
    }
    public Integer getUser_id() {
        return user_id;
    }
    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }
    
}
