import { View,StyleSheet,Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constant/style";


export default function ExpensesOutput({expenses,expensesPeriod,infoText}){

  let content=<Text style={style.infoText}>{infoText}</Text>;
  if(expenses.length>0){
    content=  <ExpensesList expenses={expenses}/>
  }

    return<View style={style.container}>
        <ExpensesSummary expenses={expenses} expensesPeriodName={expensesPeriod}/>
      {content}
    </View>
}


const style=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary700
    },
    infoText:{
      color:'white',
      fontSize:16,
      fontWeight:'bold',
      marginTop:32
    }
})