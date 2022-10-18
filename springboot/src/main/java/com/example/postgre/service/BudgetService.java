package com.example.postgre.service;

import com.example.postgre.Model.Budget;
import com.example.postgre.Model.Data.Groups;
import com.example.postgre.Model.Data.Users;
import com.example.postgre.Model.Dto.BudgetCardDetails;
import com.example.postgre.Model.Dto.BudgetUserDto;
import com.example.postgre.repository.BudgetRepository;
import com.example.postgre.repository.GroupRepository;
import com.example.postgre.repository.UserRepository;
import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonArrayFormatVisitor;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;
import java.util.*;

@Service
public class BudgetService {

    @Autowired
    private final BudgetRepository budgetRepository;
    @Autowired
    private final GroupRepository groupRepository;

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    public BudgetService(BudgetRepository budgetRepository, GroupRepository groupRepository, UserRepository userRepository) {
        this.budgetRepository = budgetRepository;
        this.groupRepository = groupRepository;
        this.userRepository = userRepository;
    }

//    get all users in a specific group
//    public List<Users> getUsersInAGroup(Integer group_id){
//
//        return userRepository.findAllByGroupId(group_id);
//    }


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


    // get the card details in a specific group
    public BudgetCardDetails getBudgetCardDetails(Integer group_id, Integer user_id) {

//        defining budgetCardDetails Dto object
        BudgetCardDetails budgetCardDetails = new BudgetCardDetails();

//        all total budgets

        Double AllExpenses;
        if (budgetRepository.getTotalAmount(group_id) == null) {
            budgetCardDetails.setAlltotal(0.00);
            AllExpenses = 0.00;
        } else {
            AllExpenses = budgetRepository.getTotalAmount(group_id);
        }
        budgetCardDetails.setAlltotal(AllExpenses);

//        my total budgets
        Double MyExpenses;
        if (budgetRepository.getIndividualTotalAmount(group_id, user_id) == null) {
            budgetCardDetails.setMytotal(0.00);
            MyExpenses = 0.00;
        } else {
            MyExpenses = budgetRepository.getIndividualTotalAmount(group_id, user_id);
        }


        budgetCardDetails.setMytotal(MyExpenses);

//        individual average for a user
//        TODO: need to implement the logic to get exact users in a group

        Optional<Groups> groups = groupRepository.findById(group_id);


        ArrayList<Integer> userArray = new ArrayList<>();
        userArray.add(78);
        userArray.add(79);
        userArray.add(80);


        Integer user_count = userArray.size();

        Double Average = (Double) AllExpenses / user_count;

        budgetCardDetails.setAverage(Average);

        Double DueAmount = MyExpenses - Average;

        budgetCardDetails.setDue(DueAmount);

        return budgetCardDetails;
    }


//    public Double getAverageAmount(Integer group_id) {
//        if(budgetRepository.getAverageAmount(group_id) == null){
//            return 0.00;
//        }
//        return budgetRepository.getAverageAmount(group_id);
//    }

    // get individual amount for a user
    public Double getIndividualTotalAmount(Integer group_id, Integer user_id) {
        if (budgetRepository.getIndividualTotalAmount(group_id, user_id) == null) {
            return 0.00;
        }
        return budgetRepository.getIndividualTotalAmount(group_id, user_id);
    }


    //    get all individual budgets for a group
    public List<BudgetUserDto> getAllIndividualAmount(Integer group_id) {

//        to calculate average amount
        Double AllExpenses;
        if (budgetRepository.getTotalAmount(group_id) == null) {

            AllExpenses = 0.00;
        } else {
            AllExpenses = budgetRepository.getTotalAmount(group_id);
        }


        List<Budget> budget_array = budgetRepository.findAllByGroupIds(group_id);
//        return budget_array;
//        Optional<Groups> groups = groupRepository.findById(group_id);

//        TODO: need to get the real array in the from the database

        ArrayList<Integer> userArray = new ArrayList<>();
        userArray.add(78);
        userArray.add(79);
        userArray.add(80);

//      get user ids for each budget group

//
//        ArrayList<Integer> arrayList = new ArrayList<Integer>();
//        for(Budget budget: budget_array){
//
//            arrayList.add(budget.getUsers().getUser_id());
//
//        }

        Set<Integer> users_set = new HashSet<Integer>(userArray);

//      calculating the average amount
        Integer user_count = users_set.size();
        Double Average = (Double) AllExpenses / user_count;


//        define budget user to object array list
        ArrayList<BudgetUserDto> budgetDtoList = new ArrayList<BudgetUserDto>();

//       get users amount summation
        for (Integer userId : users_set) {
            BudgetUserDto budgetUserDto = new BudgetUserDto();

            Double total_amount = 0.00;

            for (Budget budget : budget_array) {
                if (budget.getUsers().getUser_id() == userId) {
                    total_amount += budget.getAmount();
                    budgetUserDto.setLastname(budget.getUsers().getLastname());
                }
            }

//            initialize objects
            Double dueamount = total_amount - Average;
            budgetUserDto.setAmount(dueamount);
            budgetUserDto.setUser_id(userId);

//            add objects to the array list
            budgetDtoList.add(budgetUserDto);

        }
        return budgetDtoList;
    }

    // get a budget
    public List<Budget> getBudgetForAUser(Integer group_id, Integer user_id) {
        return budgetRepository.findAllByGroupIdAndUserId(group_id, user_id);
    }


    //    delete budgets
    public void deleteBudget(Integer budget_id) {
//        Boolean exist = budgetRepository.existsById(budget_id);
//        String message;
//        if (!exist) {
//            message =  "budget of " + budget_id + " cannot be deleted";
//            throw new IllegalStateException("budget with " + budget_id + "does not exist");
//        } else {
//        message = "budget of " + budget_id + " is deleted successfully";
        budgetRepository.deleteById(budget_id);
//        }
//        return message;
    }


    //    update budget
    @Transactional
    public void updateBudget(Integer budget_id, String title, Double amount, String description) {
        Budget budget = budgetRepository.findById(budget_id)
                .orElseThrow(() -> new IllegalStateException("Budget with the id " + budget_id + " is not found"));

        if (title != null &&
                title.length() > 0 &&
                !Objects.equals(budget.getTitle(), title)
        ) {
            budget.setTitle(title);
        }

        if (amount != null &&
                !Objects.equals(budget.getAmount(), amount)
        ) {
            budget.setAmount(amount);
        }

        if (description != null &&
                description.length() > 0 &&
                !Objects.equals(budget.getDescription(), description)
        ) {
            budget.setDescription(description);
        }

    }

    //    get total amount for a group
    public Double getTotalAmount(Integer group_id) {
        return budgetRepository.getTotalAmount(group_id);
    }
}
