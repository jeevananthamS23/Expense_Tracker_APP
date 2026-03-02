
import {FlatList ,Text,View} from "react-native";
import { ExpenseItem } from "./ExpensesItem";
export default function ExpensesList({expenses}){
    function renderItems(itemData){
        return <ExpenseItem {...itemData.item}/>
    }
    return <FlatList data={expenses} renderItem={renderItems} keyExtractor={(item)=>item.id} />;
}