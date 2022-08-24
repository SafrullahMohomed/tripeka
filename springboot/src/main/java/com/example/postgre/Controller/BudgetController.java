package com.example.postgre.Controller;

import com.example.postgre.Model.Budget;
import com.example.postgre.Service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/budget")
public class BudgetController {

    private final BudgetService budgetService;

    @Autowired
    public BudgetController(BudgetService budgetService){
        this.budgetService = budgetService;
    }

    @GetMapping
    public List<Budget> getBudgets(){
        return budgetService.getBudgets();
    }


}
