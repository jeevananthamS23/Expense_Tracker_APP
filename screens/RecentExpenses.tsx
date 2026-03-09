import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/StoreContext";
import { useContext, useState } from "react";
import { LastSevenDays } from "../utils/DateFormater";
import { useEffect } from "react";
import { ExpenseFetch } from "../utils/http";
import { useFocusEffect } from "@react-navigation/native";



export default function RecentExpenses() {
  // const ExpenseCNTX = useContext(ExpenseContext);

  const [FetchExpenses, setExpense] = useState([]);

  useFocusEffect(() => {
    async function Fetching() {
      const data = await ExpenseFetch();
      setExpense(data);
    }
    Fetching();
  });

  const today = new Date();
  const lastSevenDaysDate = LastSevenDays(today, 7);

  const recentDays = FetchExpenses.filter((expense) => {
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
