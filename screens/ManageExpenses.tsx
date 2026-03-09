import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../components/UiParts/IconButton";
import { GlobalStyles } from "../constant/style";
import { ExpenseContext } from "../store/StoreContext";
import { RootStackPramsList } from "../App";
import { RouteProp } from "@react-navigation/native"; // from react native
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; // from the native stack
import ExpensesForm from "../components/ManageExoensesComponents/ExpensesForm";
import { ExpensesObjectType } from "../store/StoreContext";
import { ExpenseCreation } from "../utils/http";



type ManageExpenseRouteProp = RouteProp<RootStackPramsList, "ManageExpense">; // route props
type ManageExpenseNavigationProp = NativeStackNavigationProp<
  RootStackPramsList,
  "ManageExpense"
>; // for navigation props

type props = {
  route: ManageExpenseRouteProp;
  navigation: ManageExpenseNavigationProp; // defining both the route and navigation props
};

export default function ManageExpenses({ route, navigation }: props) {
  const ExpenseCNTX = useContext(ExpenseContext);

  const ExpenseID: string = route.params?.ExpenseId;

  const DateForId = ExpenseCNTX.expenses.find(
    (expenses) => expenses.id === ExpenseID,
  );

  const IsEditing = !!ExpenseID;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: IsEditing ? "Expense_Editing" : "Expenses_Adding",
    });
  }, [navigation, IsEditing]);

  function deleteExpenseHandler() {
    ExpenseCNTX.deleteExpenses(ExpenseID);
    navigation.goBack();
  }

  function cancelhandler() {
    navigation.goBack();
  }

  function confirmedHandler(ExpenseData: Omit<ExpensesObjectType, "id">) {
    if (IsEditing) {
      ExpenseCNTX.updateExpenses(ExpenseID, ExpenseData);
    } else {
      ExpenseCNTX.addExpenses(ExpenseData);
      ExpenseCreation(ExpenseData);
    }
    navigation.goBack();
  }

  return (
    <View style={style.container}>

      <ExpensesForm
        Oncancel={cancelhandler}
        IsEditing={IsEditing}
        OnSubmit={confirmedHandler}
        Data={DateForId}
      />
      <View style={style.deleteContainer}>
        {IsEditing && (
          <IconButton
            nameBtn={"trash"}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        )}
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
