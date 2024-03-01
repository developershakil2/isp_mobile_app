import React, { useState, useContext , useEffect} from "react";
import { View, Text, StyleSheet,ActivityIndicator, TouchableOpacity, Image, TextInput } from "react-native";
import { ContextApi } from "../utilities";
import Message from "../components/Message";
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function Login({ navigation }) {
  const {LoginAccount, isLoad} = useContext(ContextApi);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const logi =async()=>{

  await LoginAccount(username, password, navigation)

  }

  useEffect(()=>{
     const userCheck = async ()=>{
      const us = await AsyncStorage.getItem('user');
      const cuser = JSON.parse(us) 
       if(cuser?.userId){
        navigation.reset({index:0, routes:[{name:'dashboard'}]})
       }else{
        return ''
       }
     }

     userCheck()
  },[])
  return (
    <>
   {
      isLoad == true? <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
          <ActivityIndicator size='large' color="green"/>
      </View>:
    <View style={styles.container}>
    <Message/>
      <View>
        <Image
          source={require("../assets/images/logo.jpg")}
          style={{ width: 130, height: 130, borderRadius: 70 }}
          resizeMode="cover"
        />
      </View>

      <View style={styles.loginwrap}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#111" }}>Login</Text>
        <View style={{ width: "100%", paddingLeft: 5, marginTop: 60 }}>
          <TextInput
            onChangeText={setUsername}
            value={username}
            placeholderTextColor="#aab2b5"
            style={{ width: "100%", height: 40, color: "#fff", borderBottomColor: "#111", borderBottomWidth: 1 }}
            placeholder="Enter username"
          />
        </View>
        
        <View style={{ width: "100%", paddingLeft: 5, marginTop: 30 }}>
          <TextInput
            onChangeText={setPassword}
            secureTextEntry={true}
            value={password}
            placeholderTextColor="#aab2b5"
            style={{ width: "100%", height: 40, color:"#fff" , borderBottomColor: "#111", borderBottomWidth: 1 }}
            placeholder="Enter password"
          />
        </View>

        <View style={{ width: "100%", paddingLeft: 5, marginTop: 60 }}>
          <TouchableOpacity
            onPress={logi}
            style={{ width: "100%", borderRadius: 20, paddingVertical: 10, backgroundColor: "#111" }}
          >
            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold", fontSize: 17 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    }
    </>
   
  )
}

const styles = StyleSheet.create({
  loginwrap: {
    marginTop: 40,
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#11111170",
    opacity: 0.6,
    padding: 20,
    backdropFilter: 'blur("30px")'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#03adfc"
  }
});
