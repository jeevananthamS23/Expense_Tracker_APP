import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { GlobalStyles } from './constant/style';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/UiParts/IconButton';
import Contextprovider from './store/StoreContext';

const Stack=createNativeStackNavigator();
const BottomTab=createBottomTabNavigator();

function ExpenseOverView(){
  return(
  <BottomTab.Navigator 
  screenOptions={({navigation})=>({headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
  headerTintColor:'white',
  tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
  tabBarActiveTintColor:GlobalStyles.colors.accent500,
  headerRight:({tintColor})=><IconButton nameBtn="add"  color={tintColor} size={24} onPress={()=> navigation.navigate("ManageExpense")}/> })}>
    <BottomTab.Screen name="RecentExpenses" component={RecentExpenses} options={{title:"Recent_Expenses", tabBarLabel:"Recent",  tabBarIcon: ({ color, size }) => (
      <Ionicons name="hourglass" color={color} size={size} />
    )}}/>
    <BottomTab.Screen name="AllExpenses" component={AllExpenses}options={{title:"All_Expenses", tabBarLabel:"All_Expenses",  tabBarIcon: ({ color, size }) => (
      <Ionicons name="calendar" color={color} size={size}/>)}} />
  </BottomTab.Navigator>);
}

export default function App() {
  return (
    <>
    <StatusBar style='light'/>

    <Contextprovider>
     <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:GlobalStyles.colors.primary500},headerTintColor:"white"}}>
        <Stack.Screen name="ExpensesOverview" component={ExpenseOverView} options={{headerShown:false}}/>
        <Stack.Screen name="ManageExpense" component={ManageExpenses} options={{presentation:'modal'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Contextprovider>
    

    </>
  );
}

