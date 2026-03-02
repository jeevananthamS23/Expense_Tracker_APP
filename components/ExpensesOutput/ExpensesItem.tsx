import { View,Text,StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constant/style";
import DateFormater from "../../utils/DateFormater";
import { useNavigation } from "@react-navigation/native";

export function ExpenseItem({id,description,date,amount}){
    const navigation=useNavigation();
 function ExpensesHandler(){
     navigation.navigate("ManageExpense",{
        ExpenseId:id
     });
 }
    return<Pressable onPress={ExpensesHandler} style={({pressed})=>pressed && style.pressed}>
        <View style={style.containerItems}> 
            <View>
                <Text style={[style.textbase,style.description]}>{description}</Text>
                <Text style={style.textbase}>{DateFormater(date)}</Text>
            </View>
            <View style={style.amountcontainer}>
                <Text style={style.amount}>{amount.toFixed(2)}</Text>
            </View>
        </View>
    </Pressable>

}

const style=StyleSheet.create({
    pressed:{
        opacity:0.50},
    containerItems:{
        padding:12,
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:8,
        backgroundColor:GlobalStyles.colors.primary500,
        borderRadius:8,
        elevation:3,
        shadowColor:GlobalStyles.colors.gray500,
        shadowRadius:4,
        shadowOffset:{width:1,height:1},
    },
    textbase:{
        color:GlobalStyles.colors.primary50,   
    },
    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:'bold'
    },
    amountcontainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        minWidth:80,
    },
    amount:{
        color:GlobalStyles.colors.primary500,
        fontWeight:'bold'
    }

})