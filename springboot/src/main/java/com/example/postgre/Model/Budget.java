package com.example.postgre.Model;

import com.example.postgre.Model.Data.Groups;
import com.example.postgre.Model.Data.Users;
import org.apache.catalina.User;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = {"group_id", "user_id", "date", "time"})
})
//@IdClass(BudgetPK.class)
public class Budget{
    @Id
    @SequenceGenerator(
            name = "budget_sequence",
            sequenceName = "budget_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "budget_sequence"
    )
    private Integer budget_id;
    @ManyToOne(
            cascade = CascadeType.MERGE
    )
    @JoinColumn(
            name = "group_id",
            referencedColumnName = "group_id"
    )
    private Groups groups;
    @ManyToOne(
            cascade = CascadeType.MERGE
    )

    @JoinColumn(
            name = "user_id",
            referencedColumnName = "user_id"
    )

    private Users users;
    private LocalDate date;
    private LocalTime time;
    private String title;
    private String description;
    private Double amount;

    public Budget(Integer budget_id, Groups groups, Users users, LocalDate date, LocalTime time, String title, String description, Double amount) {
        this.budget_id = budget_id;
        this.groups = groups;
        this.users = users;
        this.date = date;
        this.time = time;
        this.title = title;
        this.description = description;
        this.amount = amount;
    }

    public Budget() {
    }

    public Integer getBudget_id() {
        return budget_id;
    }

    public void setBudget_id(Integer budget_id) {
        this.budget_id = budget_id;
    }

    public Groups getGroups() {
        return groups;
    }

    public void setGroups(Groups groups) {
        this.groups = groups;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
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

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
}

