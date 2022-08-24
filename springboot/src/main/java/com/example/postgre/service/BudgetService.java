package com.example.postgre.Service;

import com.example.postgre.Model.Budget;
import com.example.postgre.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BudgetService {
    private final BudgetRepository budgetRepository;

    @Autowired
    public BudgetService(BudgetRepository budgetRepository){
        this.budgetRepository = budgetRepository;
    }

    public List<Budget> getBudgets(){
        return budgetRepository.findAll();
    }
}
