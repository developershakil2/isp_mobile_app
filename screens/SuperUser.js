
import React , {useEffect, useState, useContext} from "react"
import { ContextApi } from "../utilities";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {View, Text, TextInput, StyleSheet,ActivityIndicator, TouchableOpacity, } from "react-native";
import { Entypo,Foundation , MaterialIcons, Feather,FontAwesome} from '@expo/vector-icons';
import Message from "../components/Message";
const SuperUser = ({navigation})=>{
const [user, setUser] = useState(null)
const {requestSuper,isLoad, userFind} = useContext(ContextApi);
const [hash, setHash] = useState('');
const [amount, setAmount] = useState('');
const [username, setUsername] = useState('')
const [fuser, setFuser] = useState(null);

useEffect(()=>{
  const d = async()=>{
    const us = await AsyncStorage.getItem('user');
    const use = JSON.parse(us)
    setUser(use);
  }
  d()
},[])

const findUser = async()=>{
        const u = await userFind(username);
        setFuser(u)
}
const requestBysuper  = async()=>{
    await requestSuper(amount, hash,fuser?._id, user?.userId );
}
    return(

     <>
     {
      isLoad == true? <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
          <ActivityIndicator size='large' color="green"/>
      </View>:    <>

<Message/>
   {
     user?.userType == 'super'?  <View style={styles.container}>

     <View style={{paddingHorizontal:20, borderWidth:2, borderRadius:20, height:70, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
           <TextInput  value={username} onChangeText={setUsername} placeholder="Search User" style={{height:70, width:"70&"}} />
           <TouchableOpacity  onPress={findUser}><Text><FontAwesome name="search" size={20} color="black" /> </Text></TouchableOpacity>
        
     </View>



    {
     fuser?.username? <View style={{display:"flex", marginTop:10}}>
     
     <View  style={{ width:"100%", flexDirection:"row", justifyContent:"center"}}>
     <View style={{width:320,  padding:10, borderRadius:20,backgroundColor:"#11111170"}}>
        <View style={{flexDirection:"row",marginVertical:0, alignItems:"center"}}>
          <Text><Feather name="user" size={30} color="white" /></Text>
          <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:12}}>{fuser?.username}</Text>
        </View>

        <View style={{flexDirection:"row",marginVertical:0, alignItems:"center"}}>
        <Text><Entypo name="phone" size={30} color="white" /></Text>
        <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:12}}>{fuser?.phone}</Text>
      </View>

        <View style={{flexDirection:"row",marginVertical:0, alignItems:"center"}}>
        <Text><MaterialIcons name="contact-phone" size={30} color="white" /></Text>
        <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:12}}>{fuser?.fullname}</Text>
      </View>


      <View style={{flexDirection:"row",marginVertical:0, alignItems:"center"}}>
      <Text><MaterialIcons name="speed" size={30} color="white" /></Text>
      <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:12}}>{fuser?.mbps} Mbps</Text>
    </View>


  <View style={{flexDirection:"row",marginVertical:0, alignItems:"center"}}>
  <Text><Entypo name="location-pin" size={30} color="white" /></Text>
  <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:12}}>{fuser?.location}</Text>
</View>




     </View>
  </View>
     
     <View style={{width:320, backgroundColor:"#fff" , marginLeft:10, marginTop:10,paddingHorizontal:10, paddingVertical:10, borderRadius:20,  height:230}}>
       

          <View style={{width:"100%", marginTop:10}}>
          <TextInput
          placeholderTextColor="#aab2b5"
          value={amount}
          onChangeText={setAmount}
          keyboardType="number-pad"
          style={{ width: "100%", height: 40, color: "#111", borderBottomColor: "#111", borderBottomWidth: 1 }}
          placeholder="Enter Amount"
        />
      </View>
      
      <View style={{ width: "100%", paddingLeft: 5, marginTop: 30 }}>
        <TextInput
          value={hash}
          onChangeText={setHash}
          autoCapitalize="characters"
          placeholderTextColor="#aab2b5"
          style={{ width: "100%", height: 40, color:"#111" , borderBottomColor: "#111", borderBottomWidth: 1 }}
          placeholder="Enter Transaction #ID"
        />


       <View style={{width:"100%" , flexDirection:"row" , justifyContent:"center"}}>
       <TouchableOpacity onPress={requestBysuper} style={{backgroundColor:"#111", paddingHorizontal:20, paddingVertical:14 , width:160,marginHorizontal:"auto", marginTop:30, borderRadius:10}}>
       <Text style={{color:"#fff", textAlign:"center"}}>Send <FontAwesome name="send-o" size={18} color="white" /></Text>
      </TouchableOpacity>
       </View>
          
          </View>
     </View>

     </View>:<Text style={{textAlign:'center', color:'gray'}}>NO User Found</Text>
    }

    
         <View style={styles.bottomWrap}>
         <TouchableOpacity  onPress={()=> navigation.navigate("dashboard")}><Text><Entypo name="home" size={30} color="white" /></Text></TouchableOpacity>
         <TouchableOpacity  onPress={()=> navigation.navigate("superuser")}><Text><Foundation name="results-demographics" size={30} color="white" /></Text></TouchableOpacity>
         <TouchableOpacity  onPress={()=> navigation.navigate("profile")}><Text><FontAwesome name="user-circle" size={30} color="white" /> </Text></TouchableOpacity>
        
              </View>

     </View>
:<View style={{height:"100%", width:'100%', justifyContent:'center', alignItems:'center'}}>
<Text style={{textAlign:'center',fontSize:18, color:'gray'}}>Only For Super User </Text>
<TouchableOpacity onPress={()=> navigation.navigate('dashboard')} style={{paddingHorizontal:20, paddingVertical:10, borderRadius:10,marginTop:18, backgroundColor:'#111'}}>
<Text style={{color:'#fff'}}>Go Back</Text>
</TouchableOpacity>
</View>  
   }
</>
     }
     </>

        
    )
}

export default SuperUser;


const styles = StyleSheet.create({
    bottomWrap:{
        paddingVertical:16
        , paddingHorizontal : 20, 
         height:70,
        borderRadius:16, 
        alignItems:"center",
        flexDirection:"row", justifyContent:"space-between",
        backgroundColor:"#111"
    },
    container:{
        flex :1,
        position:"relative",
        width:"100%",
        justifyContent:"space-between",
        paddingHorizontal:10,
        paddingVertical:20,

    }
})