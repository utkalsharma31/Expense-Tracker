import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2023, 6, 1),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 794.99,
    date: new Date(2023, 2, 2),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 3, 6),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2023, 5, 23),
  },
];


const App = () => {
  
  const [expenses, setExpenses] = useState(Dummy_Expenses)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div >
  );
}

export default App;
