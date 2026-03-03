import {FlatList ,Text,View,ListRenderItem} from "react-native";
import { ExpenseItem } from "./ExpensesItem";
import { ExpensesObjectType } from "../../store/StoreContext";

type ListProps={
    expenses:ExpensesObjectType[]
}
export default function ExpensesList({expenses}:ListProps){
     const renderItems: ListRenderItem<ExpensesObjectType> = ({ item }) => {
    return <ExpenseItem {...item} />;
  };

    return <FlatList data={expenses} renderItem={renderItems} keyExtractor={(item)=>item.id} />;
}