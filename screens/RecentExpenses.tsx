import { View,Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/StoreContext";
import { useContext } from "react";
import { LastSevenDays } from "../utils/DateFormater";


export default function RecentExpenses() {
  const ExpenseCNTX = useContext(ExpenseContext);

  const today = new Date();
  const lastSevenDaysDate = LastSevenDays(today, 7);

  const recentDays = ExpenseCNTX.expenses.filter((expense) => {
    return expense.date >= lastSevenDaysDate;
  });

  return (
    <ExpensesOutput
      expenses={recentDays}
      expensesPeriod="Last 7 Days"
      infoText={"No Recent Expenses"}
    />
  );
}
