import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/StoreContext";
import { useContext, useState } from "react";
import { LastSevenDays } from "../utils/DateFormater";
import { useEffect } from "react";
import { ExpenseFetch } from "../utils/http";
import { useFocusEffect } from "@react-navigation/native";
import Loading from "../components/UiParts/Loading";
import ErrorLoading from "../components/UiParts/ErrorLoading";



export default function RecentExpenses() {
  const ExpenseCNTX = useContext(ExpenseContext);

  // const [FetchExpenses, setExpense] = useState([]);

  const [FetchingData, SetFetching] = useState(true);
  const [Error,SetError]=useState();

  useEffect(() => {
    async function Fetching() {
      SetFetching(true);
      try{
           const data = await ExpenseFetch();
           ExpenseCNTX.setExpense(data);
      }
      catch(error){
        SetError("could not fetch the data");
      }
     
      SetFetching(false);
      
    }
    Fetching();
  },[]);


  if(Error && !FetchingData){
    return <ErrorLoading message={Error} Confirm={()=>SetError(null)}/>

  }


  if (FetchingData) {
    return <Loading />;
  }

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
