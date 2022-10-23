package com.example.postgre.Model.Data;


import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Objects;

@Embeddable
public class GroupMessagesId implements Serializable {


    @OneToOne
    @JoinColumn(name = "groupId")
    private Groups group;
    @OneToOne
    @JoinColumn(name = "userId", referencedColumnName = "user_id")
    private Users user;

    private Timestamp time;

    public GroupMessagesId(Groups group, Users user, Timestamp time) {
        this.group = group;
        this.user = user;
        this.time = time;
    }

    public GroupMessagesId() {

    }

    public Groups getGroup() {
        return group;
    }

    public void setGroup(Groups group) {
        this.group = group;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Timestamp getTime() {
        return time;
    }

    public void setTime(Timestamp time) {
        this.time = time;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GroupMessagesId that = (GroupMessagesId) o;
        return Objects.equals(group, that.group) && Objects.equals(user, that.user) && Objects.equals(time, that.time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(group, user, time);
    }
}
