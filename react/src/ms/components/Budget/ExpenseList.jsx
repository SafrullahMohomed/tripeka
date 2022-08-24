import React, { useState } from "react";
import ButtonSet from "./ButtonSet";
import ListItem from "./ListItem";
import ListItemsAll from "./AllExpenses/ListItemsAll";
import FormPart from "./FormPart";

const ExpenseList = (props) => {
  const [isIndividual, setIsIndividual] = useState(true);
  return (
    <div className="Expenses flex flex-col">
      <div className="ButtonSet flex justify-between">
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border-2 border-blue-100 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => {
              setIsIndividual(true);
            }}
          >
            My Expenses
          </button>
          <button
            type="button"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-2 border-blue-100 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => {
              setIsIndividual(false);
            }}
          >
            All expenses
          </button>
        </div>
      </div>
      <div className="bothFormAndExpenses">
        <div className="forConditionalRender">
          {isIndividual ? (
            <div>
              <div className="m-auto text-3xl my-4">My expenses</div>
              <div className="lists-of-expenses overflow-y-scroll max-h-96">
                <div className="list-container">
                  <ListItem
                    title="Train Ticket"
                    description="some description will be added here to"
                    amount="1200.00"
                    date="2019-02-09"
                    time="10:09:03"
                  />
                  <ListItem
                    title="Train Ticket"
                    description="some description will be added here to"
                    amount="1200.00"
                    date="2019-02-09"
                    time="10:09:03"
                  />
                  <ListItem
                    title="Train Ticket"
                    description="some description will be added here to"
                    amount="1200.00"
                    date="2019-02-09"
                    time="10:09:03"
                  />
                  <ListItem
                    title="Train Ticket"
                    description="some description will be added here to"
                    amount="1200.00"
                    date="2019-02-09"
                    time="10:09:03"
                  />
                  <ListItem
                    title="Train Ticket"
                    description="some description will be added here to"
                    amount="1200.00"
                    date="2019-02-09"
                    time="10:09:03"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="m-auto text-3xl my-4">All expenses</div>
              <div className="lists-of-expenses overflow-y-scroll max-h-96">
                <div className="list-container">
                  <ListItemsAll
                    title="Train Ticket"
                    description="some description will be added here to"
                    amount="1200.00"
                    date="2019-02-09"
                    time="10:09:03"
                  />

                  <ListItemsAll
                    title="Train Ticket"
                    description="some description will be added here to"
                    amount="1200.00"
                    date="2019-02-09"
                    time="10:09:03"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="formPart mx-60 md:mx-30 sm:mx-20">
            <FormPart></FormPart>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
