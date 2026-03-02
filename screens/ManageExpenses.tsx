import { useLayoutEffect } from "react";
import { View,StyleSheet } from "react-native";
import IconButton from "../components/UiParts/IconButton";
import { GlobalStyles } from "../constant/style";
import Button from "../components/UiParts/Button";




export default function ManageExpenses({route,navigation}){
    const ExpenseID=route.params?.ExpenseId;
    const IsEditing=!!ExpenseID;
    useLayoutEffect(()=>{
       navigation.setOptions({
        title:IsEditing?"Expense_Editing":"Expenses_Adding"
       })
    },[navigation,IsEditing]);


    function deleteExpenseHandler(){
        navigation.goBack();
    }

    function cancelhandler(){
          navigation.goBack();
    }

    function confirmedHandler(){
          navigation.goBack();
    }

    return(
        <View style={style.container}>
            <View style={style.ButtonsContainer}>
                <Button Style={style.ButtonStyle} mode={"flat"} onPress={cancelhandler} >Cancel</Button>

                <Button Style={style.ButtonsContainer} onPress={confirmedHandler} >{IsEditing?'update':'Add'}</Button>
            </View>
            <View style={style.deleteContainer}>           {IsEditing &&  <IconButton nameBtn={"trash"} color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}/>}
</View>
        </View>
    )
}
const style=StyleSheet.create({
     container:{
        flex:1,
        padding:24,
        backgroundColor:GlobalStyles.colors.primary800
     },
     ButtonsContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
     },
     ButtonStyle:{
     minWidth:120,
     marginHorizontal:8
     },
     deleteContainer:{
        marginTop:16,
        paddingTop:8,
        borderTopWidth:2,
        borderTopColor:GlobalStyles.colors.primary200,
        alignItems:'center'
     }
})