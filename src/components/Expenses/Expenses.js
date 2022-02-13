import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setYear] = useState("2021");

  const YearChangeHandler = (year) => {
    console.log(year);
    setYear(year);
  };
  const filteredExpenses = props.expenses.filter(
    (el) => el.date.getFullYear().toString() === selectedYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onYearChange={YearChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      {filteredExpenses.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
