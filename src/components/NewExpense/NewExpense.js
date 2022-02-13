import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isAdding, setIsAdding] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsAdding(false);
  };
  const startAddingHandler = () => {
    setIsAdding(true);
  };
  const stopAddingHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {!isAdding && (
        <button onClick={startAddingHandler}>Add New Expense</button>
      )}
      {isAdding && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopAddingHandler}
        />
      )}
    </div>
  );
}
export default NewExpense;
