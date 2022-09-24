package com.example.postgre.Model.Dto;

import lombok.Data;

@Data
public class BudgetCardDetails {
    private Double mytotal;
    private Double alltotal;
    private Double average;
    private Double due;

    public BudgetCardDetails(Double mytotal, Double alltotal, Double average, Double due) {
        this.mytotal = mytotal;
        this.alltotal = alltotal;
        this.average = average;
        this.due = due;
    }

    public BudgetCardDetails() {
    }

    public Double getMytotal() {
        return mytotal;
    }

    public void setMytotal(Double mytotal) {
        this.mytotal = mytotal;
    }

    public Double getAlltotal() {
        return alltotal;
    }

    public void setAlltotal(Double alltotal) {
        this.alltotal = alltotal;
    }

    public Double getAverage() {
        return average;
    }

    public void setAverage(Double average) {
        this.average = average;
    }

    public Double getDue() {
        return due;
    }

    public void setDue(Double due) {
        this.due = due;
    }
}
