import { View, Text, Pressable, StyleSheet, StyleProp } from "react-native";
import { GlobalStyles } from "../../constant/style";
import { ViewStyle } from "react-native";

type ButtonProps = {
  name: string;
  onPress: () => void;
  mode: string;
  Style?: StyleProp<ViewStyle>;
};

export default function Button({ name, onPress, mode, Style }: ButtonProps) {
  return (
    <View style={Style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && style.pressed}
      >
        <View style={[style.buttoncont, mode === "flat" && style.flat]}>
          <Text style={[style.buttonText, mode === "flat" && style.flatText]}>
            {name}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
const style = StyleSheet.create({
  buttoncont: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
