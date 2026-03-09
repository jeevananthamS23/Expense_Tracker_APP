import {View,StyleSheet,Text,Button } from "react-native";
import { GlobalStyles } from "../../constant/style";

type ErrorLoadingPros={
   message:string;
   Confirm:()=>void;
}

export default function ErrorLoading({message,Confirm}:ErrorLoadingPros){
    return <View style={style.Loading}>
        <Text style={[style.text,style.title]}>An error Occured!</Text>
        <Text style={style.text}>{message}</Text>
        <Button title="Okay" onPress={Confirm}></Button>
    </View>
}


const style=StyleSheet.create({
    Loading:{
        flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: GlobalStyles.colors.primary700
    },
    title:{
    fontSize:18,
    fontWeight:'bold'
    },
    text:{
color:'white',
textAlign:'center',
marginBottom:8,
    }
})

