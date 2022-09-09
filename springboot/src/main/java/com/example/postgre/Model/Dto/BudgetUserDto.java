package com.example.postgre.Model.Dto;

import lombok.Data;

@Data
public class BudgetUserDto {
    private Integer user_id;
    private String lastname;
    private Double amount;

    public BudgetUserDto(Integer user_id, String lastname, Double amount) {

        this.user_id = user_id;
        this.lastname = lastname;
        this.amount = amount;
    }

    public BudgetUserDto() {

    }


    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
}
