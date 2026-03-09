import { createContext } from "react";
import { useReducer } from "react";

export type ExpensesObjectType = {
  id: string;
  description: string;
  amount: number;
  date: Date; // for object typing
};

type ExpensesContext = {
  expenses: ExpensesObjectType[];
  addExpenses: (expense: ExpensesObjectType) => void;
  updateExpenses: (
    id: string,
    expenses: Omit<ExpensesObjectType, "id">,
  ) => void; // for context typing
  deleteExpenses: (id: string) => void;
  setExpense: (expense: ExpensesObjectType) => void;
};

type ActionReducer =
  | { type: "add"; payload: ExpensesObjectType }
  | { type: "set"; payload: ExpensesObjectType }
  | {
      type: "update";
      payload: { id: string; data: Omit<ExpensesObjectType, "id"> };
    } // for action type and payload typing
  | { type: "delete"; payload: string };

export const ExpenseContext = createContext<ExpensesContext>({
  expenses: [],
  addExpenses: () => {},
  updateExpenses: () => {},
  deleteExpenses: () => {},
  setExpense: () => {},
});

// const Dummy_Expenses = [
//   {
//     id: "e1",
//     description: "Gold buying",
//     amount: 1500,
//     date: new Date("2005-09-15"),
//   },
//   {
//     id: "e2",
//     description: "Groceries",
//     amount: 850,
//     date: new Date("2005-09-18"),
//   },
//   {
//     id: "e3",
//     description: "Electricity Bill",
//     amount: 2300,
//     date: new Date("2005-09-20"),
//   },
//   {
//     id: "e4",
//     description: "Petrol",
//     amount: 1200,
//     date: new Date("2005-09-22"),
//   },
//   {
//     id: "e5",
//     description: "Mobile Recharge",
//     amount: 399,
//     date: new Date("2005-09-25"),
//   },
//   {
//     id: "e6",
//     description: "Restaurant",
//     amount: 1750,
//     date: new Date("2005-09-27"),
//   },
//   {
//     id: "e7",
//     description: "Movie Tickets",
//     amount: 600,
//     date: new Date("2005-09-28"),
//   },
//   {
//     id: "e8",
//     description: "Books Purchase",
//     amount: 950,
//     date: new Date("2005-09-29"),
//   },
//   {
//     id: "e9",
//     description: "Silver Buying",
//     amount: 15005,
//     date: new Date("2026-02-28"),
//   },
//   {
//     id: "e10",
//     description: "car buying",
//     amount: 150000,
//     date: new Date("2026-02-27"),
//   },
// ];

//returning new state if it update or add

function ExpenseReducer(state: ExpensesObjectType[], action: ActionReducer) {
  switch (action.type) {
    case "add":
      // const id = new Date().toString() + Math.random().toString(); // we get the id from firsbase no need to create here
      return [{ ...action.payload }, ...state];
    case "update":
      const ExpenseId = state.findIndex(
        (expense) => expense.id === action.payload.id,
      );
      if (ExpenseId < 0) return state; // safety check
      const NeedForUpdate = state[ExpenseId];
      const UpdatedExpense = { ...NeedForUpdate, ...action.payload.data };
      const EntireSate = [...state];
      EntireSate[ExpenseId] = UpdatedExpense;
      return EntireSate;
    case "delete":
      return state.filter((expense) => expense.id !== action.payload);
    case "set":
      const reversed = action.payload.reverse(); // reverse function in javascript
      return reversed;
    default:
      return state;
  }
}

export default function Contextprovider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ExpenseState, dispatch] = useReducer(ExpenseReducer, []);

  function addExpenses(expenseData: ExpensesObjectType) {
    dispatch({ type: "add", payload: expenseData });
  }

  function updateExpenses(
    id: string,
    expenseData: Omit<ExpensesObjectType, "id">,
  ) {
    dispatch({ type: "update", payload: { id: id, data: expenseData } });
  }

  function deleteExpenses(id: string) {
    dispatch({ type: "delete", payload: id });
  }

  function setExpense(expense: ExpensesObjectType) {
    dispatch({ type: "set", payload: expense });
  }

  const value = {
    expenses: ExpenseState,
    addExpenses: addExpenses,
    updateExpenses: updateExpenses,
    deleteExpenses: deleteExpenses,
    setExpense: setExpense,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}
