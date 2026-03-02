import { createContext } from "react";
import { useReducer } from "react";

export const ExpenseContext = createContext({
  expenses: [],
  addExpenses: () => {},
  updateExpenses: () => {},
  deleteExpenses: () => {},
});

const Dummy_Expenses = [
  {
    id: "e1",
    description: "Gold buying",
    amount: 1500,
    date: new Date("2005-09-15"),
  },
  {
    id: "e2",
    description: "Groceries",
    amount: 850,
    date: new Date("2005-09-18"),
  },
  {
    id: "e3",
    description: "Electricity Bill",
    amount: 2300,
    date: new Date("2005-09-20"),
  },
  {
    id: "e4",
    description: "Petrol",
    amount: 1200,
    date: new Date("2005-09-22"),
  },
  {
    id: "e5",
    description: "Mobile Recharge",
    amount: 399,
    date: new Date("2005-09-25"),
  },
  {
    id: "e6",
    description: "Restaurant",
    amount: 1750,
    date: new Date("2005-09-27"),
  },
  {
    id: "e7",
    description: "Movie Tickets",
    amount: 600,
    date: new Date("2005-09-28"),
  },
  {
    id: "e8",
    description: "Books Purchase",
    amount: 950,
    date: new Date("2005-09-29"),
  },
  {
    id: "e9",
    description: "Silver Buying",
    amount: 15005,
    date: new Date("2026-02-28"),
  },
  {
    id: "e10",
    description: "car buying",
    amount: 150000,
    date: new Date("2026-02-27"),
  },
];

function ExpenseReducer(state, action) {
  switch (action.type) {
    case "add":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "update":
      const ExpenseId = state.findIndex(
        (expense) => expense.id === action.payload.id,
      );
      const NeedForUpdate = state[ExpenseId];
      const UpdatedExpense = { ...action.payload.data, ...NeedForUpdate };
      const EntireSate = [...state];
      EntireSate[ExpenseId] = UpdatedExpense;
      return EntireSate;
    case "delete":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

export default function Contextprovider({ children }) {
  const [ExpenseState, dispatch] = useReducer(ExpenseReducer, Dummy_Expenses);

  function addExpenses(expenseData) {
    dispatch({ type: "add", payload: expenseData });
  }

  function updateExpenses(id, expenseData) {
    dispatch({ type: "update", payload: { id: id, data: expenseData } });
  }

  function deleteExpenses(id) {
    dispatch({ type: "delete", payload: id });
  }

  const value = {
    expenses: ExpenseState,
    addExpenses: addExpenses,
    updateExpenses: updateExpenses,
    deleteExpenses: deleteExpenses,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}
