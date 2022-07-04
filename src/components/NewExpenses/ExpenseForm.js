import { React, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [EnteredTitle, setEnteredTitle] = useState(" ");
  const [EnteredAmount, setEnteredAmount] = useState(" ");
  const [EnteredDate, setEnteredDate] = useState(" ");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const ExpenseData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };

    console.log(ExpenseData);
    EnteredTitle(" ");
    EnteredAmount(" ");
    EnteredDate(" ");
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={EnteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={EnteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={EnteredDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="Submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
