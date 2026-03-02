import { View,Text,Pressable,StyleSheet, } from "react-native";
import { GlobalStyles } from "../../constant/style";

export default function Button({children,onPress,mode,Style }){
     return(
        <View style={Style}>
            <Pressable onPress={onPress} style={({pressed})=>pressed&& style.pressed}>
                <View style={[style.buttoncont,mode==='flat'&&style.flat]}>
                    <Text style={[style.buttonText,mode==='flat' && style.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
     )
}
const style=StyleSheet.create({
    buttoncont:{
        borderRadius:4,
        padding:8,
        backgroundColor:GlobalStyles.colors.primary500
    },
    flat:{
        backgroundColor:'transparent'
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    }
    ,flatText:{
        color:GlobalStyles.colors.primary200,
    }
    ,pressed:{
        opacity:0.75,
        backgroundColor:GlobalStyles.colors.primary100,
        borderRadius:4
    },
    
})