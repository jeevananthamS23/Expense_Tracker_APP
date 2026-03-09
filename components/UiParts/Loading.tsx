import {View,ActivityIndicator,StyleSheet } from "react-native";
import { GlobalStyles } from "../../constant/style";

export default function Loading(){
    return <View style={style.Loading}>
        <ActivityIndicator color={"white"} size={"large"} />
    </View>
}


const style=StyleSheet.create({
    Loading:{
        flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: GlobalStyles.colors.primary700
    }
})

