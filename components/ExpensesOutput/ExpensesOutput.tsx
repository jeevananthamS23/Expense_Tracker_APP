import { View,StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constant/style";

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
];
export default function ExpensesOutput({expenses,expensesPeriod}){
    return<View style={style.container}>
        <ExpensesSummary expenses={Dummy_Expenses} expensesPeriodName={expensesPeriod}/>
        <ExpensesList expenses={Dummy_Expenses}/>
    </View>
}


const style=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary700
    }
})