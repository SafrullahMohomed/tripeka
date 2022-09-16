package com.example.postgre.Controller;

import com.example.postgre.Model.Budget;
import com.example.postgre.Model.Data.Users;
import com.example.postgre.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/budget")
@CrossOrigin(origins = "http://localhost:3000")
public class BudgetController {

    private final BudgetService budgetService;

    @Autowired
    public BudgetController(BudgetService budgetService) {
        this.budgetService = budgetService;
    }

    // get all budget in all groups
    @GetMapping(path = "/users")
    public List<Budget> getBudgets() {
        return budgetService.getBudgets();
    }

    // get all budget in a specific group by group_id
    @GetMapping(path = "/user/{group_id}")
    public List<Budget> getBudgetForAGroup(@PathVariable("group_id") Integer group_id) {
        return budgetService.getBudgetForAGroup(group_id);
    }

    // to get a specific users budget from the group_id and user_id
    @GetMapping(path = "/user/{group_id}/{user_id}")
    public List<Budget> getBudgetForAUser(@PathVariable("group_id") Integer group_id,
            @PathVariable("user_id") Integer user_id) {
        return budgetService.getBudgetForAUser(group_id, user_id);
    }

    // to add a new budget
    @PostMapping(path = "/addbudget")
    public void addBudgetTo(@RequestBody Budget budget) {
        budgetService.addBudgetTo(budget);
    }

    // to get total amount which the group is spended
    @GetMapping(path = "/totalamount/{group_id}")
    public Double getTotalAmount(@PathVariable("group_id") Integer group_id) {
        return budgetService.getTotalAmount(group_id);
    }

    // to get average amount which the group is spended
    @GetMapping(path = "/averageamount/{group_id}")
    public Double getAverageAmount(@PathVariable("group_id") Integer group_id) {
        return budgetService.getAverageAmount(group_id);
    }

    // individual amount total which each user spent
    @GetMapping(path = "/individualamount/{group_id}/{user_id}")

    public Double getIndividualTotalAmount(@PathVariable("group_id") Integer group_id,
            @PathVariable("user_id") Integer user_id) {
        return budgetService.getIndividualTotalAmount(group_id, user_id);
    }

    @GetMapping(path = "/dueamount/{group_id}/{user_id}")

    public Double getYourDueAmount(@PathVariable("group_id") Integer group_id,
            @PathVariable("user_id") Integer user_id) {
        Double due_amount = budgetService.getIndividualTotalAmount(group_id, user_id)
                - budgetService.getAverageAmount(group_id);
        return due_amount;
    }

//    delete budget
    @DeleteMapping(path = "/deletebudget/{budget_id}")
    public String deleteBudget(@PathVariable("budget_id") Integer budget_id){
       return budgetService.deleteBudget(budget_id);

    }

//    update the budget
    @PutMapping(path = "/updatebudget/{budget_id}")
    public void updateBudget(
            @PathVariable("budget_id") Integer budget_id,
            @RequestParam(required = false) String title,
            @RequestParam(required = false) Double amount,
            @RequestParam(required = false) String description
            ){
        budgetService.updateBudget(budget_id, title, amount, description);

    }

}
