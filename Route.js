import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "./screens/Login";
const Stack = createNativeStackNavigator();
import { Image,  View ,Text} from "react-native";

import Dashboard from "./screens/Dashboard";
import Profile from "./screens/Profile";
import SuperUser from "./screens/SuperUser";
function Logo(){
    return(
        <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        <Image source={require("./assets/images/logo.jpg")}
        style={{width:30, height:30, borderRadius:20, objectFit:"cover"}}
        resizeMode="contain"
        />
        <Text style={{marginLeft:4, fontWeight:"bold", fontSize:18}}>ISP WIFI</Text>
        </View>
    )
}


export default function Route(){

    return(
        <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
              <Stack.Screen name="login" options={{headerShown:false}} component={Login}/>
              <Stack.Screen name="dashboard" options={{headerTitle:(op)=> <Logo options={op}/>, headerTitleAlign:"center"}} component={Dashboard}/>
              <Stack.Screen name="profile" options={{headerTitle:"", headerTitleAlign:"center"}} component={Profile}/>
              <Stack.Screen name="superuser" options={{headerTitle:"", headerTitleAlign:"center"}} component={SuperUser}/>
          </Stack.Navigator>
        </SafeAreaProvider>
        
        </NavigationContainer>
    )
}