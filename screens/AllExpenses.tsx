import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/StoreContext";
export default function AllExpenses(){
    const ExpenseCNTX=useContext(ExpenseContext);
    return (<ExpensesOutput  expenses={ExpenseCNTX.expenses} expensesPeriod={"Total"} infoText={"There is not Expenses Added"}/>);
}
