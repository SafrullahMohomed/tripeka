package com.example.postgre.Model;

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
    private Integer group_id;
    private Integer user_id;
    private LocalDate date;
    private LocalTime time;
    private String title;
    private String description;
    private Double amount;

    public Budget(Integer budget_id, Integer group_id, Integer user_id, LocalDate date, LocalTime time, String title, String description, Double amount) {
        this.budget_id = budget_id;
        this.group_id = group_id;
        this.user_id = user_id;
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

