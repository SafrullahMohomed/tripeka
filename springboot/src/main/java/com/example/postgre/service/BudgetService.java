package com.example.postgre.service;

import com.example.postgre.Model.Budget;
import com.example.postgre.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Objects;


@Service
public class BudgetService {
    private final BudgetRepository budgetRepository;

    @Autowired
    public BudgetService(BudgetRepository budgetRepository) {
        this.budgetRepository = budgetRepository;
    }

    // to get all data from the budget table
    public List<Budget> getBudgets() {
        return budgetRepository.findAll();
    }

    // to get the users from a particular group
    public List<Budget> getBudgetForAGroup(Integer group_id) {
        return budgetRepository.findAllByGroupIds(group_id);
    }

    //
    public void addBudgetTo(Budget budget) {

        budgetRepository.save(budget);
    }

    public Double getTotalAmount(Integer group_id) {
        return budgetRepository.getTotalAmount(group_id);
    }

    public Double getAverageAmount(Integer group_id) {
        return budgetRepository.getAverageAmount(group_id);
    }

    // get individual amount for a user
    public Double getIndividualTotalAmount(Integer group_id, Integer user_id) {
        return budgetRepository.getIndividualTotalAmount(group_id, user_id);
    }

    // get a budget
    public List<Budget> getBudgetForAUser(Integer group_id, Integer user_id) {
        return budgetRepository.findAllByGroupIdAndUserId(group_id, user_id);
    }

    //    delete budgets
    public String deleteBudget(Integer budget_id) {
        Boolean exist = budgetRepository.existsById(budget_id);
        String message;
        if (!exist) {
            message =  "budget of " + budget_id + " cannot be deleted";
            throw new IllegalStateException("budget with " + budget_id + "does not exist");
        } else {
            message =  "budget of " + budget_id + " is deleted successfully";
            budgetRepository.deleteById(budget_id);
        }
        return message;
    }

    @Transactional
    public void updateBudget(Integer budget_id, String title, Double amount, String description) {
        Budget budget = budgetRepository.findById(budget_id)
                .orElseThrow(() -> new IllegalStateException("Budget with the id " +budget_id+ " is not found"));

        if(title != null &&
            title.length() > 0 &&
                !Objects.equals(budget.getTitle(), title)
        ){
            budget.setTitle(title);
        }

        if(amount != null &&
                !Objects.equals(budget.getAmount(), amount)
        ){
            budget.setAmount(amount);
        }

        if(description != null &&
                description.length() > 0 &&
                !Objects.equals(budget.getDescription(), description)
        ){
            budget.setDescription(description);
        }

    }
}
