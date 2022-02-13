import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  //   const expenseDate = new Date(2021, 2, 23);
  //   const expenseTitle = "Car Insurance";
  //   const expensePrice = 98.33;
  const [title, setTitle] = useState(props.title);
  function ClickHandler() {
    console.log(title);
    setTitle("Updated!!");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={ClickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
