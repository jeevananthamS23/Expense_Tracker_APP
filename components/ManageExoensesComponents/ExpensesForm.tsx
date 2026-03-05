import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UiParts/Button";
import { GlobalStyles } from "../../constant/style";
import { ExpensesObjectType } from "../../store/StoreContext";

type ExpenseFormProps = {
  Oncancel: () => void;
  IsEditing: boolean;
  OnSubmit: (ExpenseData: Omit<ExpensesObjectType, "id">) => void;
  Data?: ExpensesObjectType;
};

export default function ExpensesForm({
  Oncancel,
  IsEditing,
  OnSubmit,
  Data,
}: ExpenseFormProps) {
  // creating a state and also if already value there for the id then it store or empty
  const [EnteredValue, setValues] = useState({
    amount: { value: Data ? Data.amount.toString() : "", isValid: true },
    date: {
      value: Data ? Data.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
    description: { value: Data ? Data.description : "", isValid: true },
  });

  //updating the state
  function OnInputHandler(
    inputIdentifier: "amount" | "date" | "description",
    enteredValue: string,
  ) {
  

    setValues((Current) => {
    const updated = { ...Current };
    updated[inputIdentifier] = { value: enteredValue, isValid: true };
    return updated;
  });


  }

  // Handling the Submission
  function OnSubmitHandler() {
    // entered Value in the state
    const ExpensesData = {
      amount: +EnteredValue.amount.value,
      date: new Date(EnteredValue.date.value),
      description: EnteredValue.description.value,
    };

    // valid the entered state
    const AmountIsValid =!isNaN(ExpensesData.amount) && ExpensesData.amount > 0;
    const DateIsValid = ExpensesData.date.toString() !== "Invalid Date";
    const DescriptionIsValid = ExpensesData.description.trim().length > 0;

    // checking if invalid the keep the existing data and show error message
    if (!AmountIsValid || !DateIsValid || !DescriptionIsValid) {
      setValues((currentInp) => {
        return {
          amount: { value: EnteredValue.amount.value, isValid: AmountIsValid },
          date: { value: EnteredValue.date.value, isValid: DateIsValid },
          description: {
            value: EnteredValue.description.value,
            isValid: DescriptionIsValid,
          },
        };
      });

      return;
    }

    // pass the data to update the general State
    OnSubmit(ExpensesData);
  }
  const EnteredFormDataIsValid =
    !EnteredValue.amount.isValid ||
    !EnteredValue.date.isValid ||
    !EnteredValue.description.isValid;
  return (
    <View style={style.mainContainer}>
      <Text style={style.text}>YOuRs Expenses</Text>
      <View style={style.warpContainer}>
        <Input
          label={"Amount"}
          Style={style.inputBoxStyle}
          invalid={!EnteredValue.amount.isValid}
          TextInputprops={{
            keyboardType: "decimal-pad",
            onChangeText:(text) => OnInputHandler("amount", text),
            value: EnteredValue.amount.value,
          }}
        />
        <Input
          label={"Date"}
          Style={style.inputBoxStyle}
          invalid={!EnteredValue.date.isValid}
          TextInputprops={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (text) => OnInputHandler("date", text),
            value: EnteredValue.date.value,
          }}
        />
      </View>

      <Input
        label={"Description"}
        invalid={!EnteredValue.description.isValid}
        TextInputprops={{
          multiline: true,
          /*autoCorrect:false*/
          /* autoCapitalize:false*/
          onChangeText: (text) => OnInputHandler("description", text),
          value: EnteredValue.description.value,
        }}
      />
      {EnteredFormDataIsValid && (
        <Text style={style.ErrorText}>
          Entered Value is not correct so please check and correct it
        </Text>
      )}

      <View style={style.ButtonsContainer}>
        <Button
          Style={style.ButtonStyle}
          mode={"flat"}
          onPress={Oncancel}
          name={"Cancel"}
        />

        <Button
          Style={style.ButtonStyle}
          mode={""}
          onPress={OnSubmitHandler}
          name={IsEditing ? "update" : "Add"}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
  },
  warpContainer: {
    flexDirection: "row",
  },
  inputBoxStyle: {
    flex: 1,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonStyle: {
    minWidth: 120,
    marginHorizontal: 8,
  },

  ErrorText: {
    color: GlobalStyles.colors.error500,
    textAlign: "center",
    margin: 8,
  },
});
