import {View,Text,StyleSheet} from "react-native";
import { GlobalStyles } from "../../constant/style";
export default function ExpensesSummary({expenses,expensesPeriodName}){
  const expensesum=expenses.reduce((sum,expenses)=>{return sum+expenses.amount},0);
    return(<View style={style.container}>
        <Text style={style.period}>
            {expensesPeriodName}
        </Text>
        <Text style={style.sum}>
            ${expensesum.toFixed(2)}
        </Text>
    </View>)
}

const style=StyleSheet.create({
       container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
        padding:8,
        borderRadius:6,
        backgroundColor:GlobalStyles.colors.primary50,
       },
       period:{
        fontSize:12,
        color:GlobalStyles.colors.primary400,
       },
       sum:{
        fontSize:16,
        color:GlobalStyles.colors.primary500,
        fontWeight:'bold'
       }
})