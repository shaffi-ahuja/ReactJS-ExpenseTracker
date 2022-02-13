import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
const dummy_expenses = [
  {
    id: 1,
    title: "car insurance",
    date: new Date(2021, 2, 23),
    amount: 18.44,
  },
  {
    id: 2,
    title: "bike insurance",
    date: new Date(2021, 2, 23),
    amount: 28.44,
  },
  {
    id: 3,
    title: "cat food",
    date: new Date(2021, 1, 23),
    amount: 38.44,
  },
  {
    id: 4,
    title: "house rent",
    date: new Date(2021, 4, 23),
    amount: 48.44,
  },
];
function App() {
  const [expenses, setExpense] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpense((prevExpenses) => [expense, ...prevExpenses]);
    console.log(expenses);
  };
  console.log(expenses);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
