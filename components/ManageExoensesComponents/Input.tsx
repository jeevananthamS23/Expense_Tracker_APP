import { View, TextInput, Text, StyleSheet,StyleProp,TextInputProps, TextStyle} from "react-native";
import { GlobalStyles } from "../../constant/style";
import { ViewStyle } from "react-native";





type InputPros={
    label:string,
    invalid:boolean,
    Style?:StyleProp<ViewStyle>,
    TextInputprops:TextInputProps // this typing is take care by the react native
}


export default function Input({ label, invalid, TextInputprops, Style }:InputPros) {
  const inputStyle: TextStyle[] = [style.input];  // using TextStyle by prop

  if (TextInputprops && TextInputprops.multiline) {
    inputStyle.push(style.inputMultiline);
  }

  if (invalid) {
    inputStyle.push(style.TextinputError);
  }

  return (
    <View style={[style.InputContainer, Style]}>
      <Text style={[style.label, invalid ? style.labelError : null]}>
        {label}
      </Text>
      <TextInput style={inputStyle} {...TextInputprops} />
    </View>
  );
}

const style = StyleSheet.create({
  InputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  labelError: {
    color: GlobalStyles.colors.error500,
  },
  TextinputError: {
    backgroundColor: GlobalStyles.colors.error50,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
