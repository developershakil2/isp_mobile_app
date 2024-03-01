
import React , {useEffect, useState,} from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { Entypo,Foundation , MaterialIcons, Feather,FontAwesome} from '@expo/vector-icons';

const Profile = ({navigation})=>{
  
const [user, setUser] = useState(null);


useEffect(()=>{
  const getUser = async()=>{
      const us = await AsyncStorage.getItem('user');
      const cuser = JSON.parse(us);
      setUser(cuser)
  }
  getUser()
},[])

const logout = async()=>{
 await AsyncStorage.removeItem('user');
 alert('you logout');
 navigation.navigate('login')
}
      
    return(

        <View style={styles.container}>
        <View style={{width:"100%", justifyContent:"center", flexDirection:"row"}}>
            <View >
               <View>
                 <Image source={require("../assets/images/pro.jpeg")}
                   style={{width:150, height:150, marginTop:20, borderRadius:100}}
                   />
                 <Text style={{textAlign:"center", marginTop:10, fontSize:22, fontWeight:"bold"}}>{user?.fullname}</Text>
               </View>
            </View>
        </View>


     <View  style={{ width:"100%", flexDirection:"row", justifyContent:"center"}}>
        <View style={{width:320,  padding:10, borderRadius:20,backgroundColor:"#11111170"}}>
           <View style={{flexDirection:"row",marginVertical:10, alignItems:"center"}}>
             <Text><Feather name="user" size={30} color="white" /></Text>
             <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:18}}>{user?.username}</Text>
           </View>

           <View style={{flexDirection:"row",marginVertical:10, alignItems:"center"}}>
           <Text><MaterialIcons name="contact-phone" size={30} color="white" /></Text>
           <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:18}}>{user?.ispid}</Text>
         </View>


         <View style={{flexDirection:"row",marginVertical:10, alignItems:"center"}}>
         <Text><MaterialIcons name="speed" size={30} color="white" /></Text>
         <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:18}}>{user?.mbps} Mbps</Text>
       </View>


       <View style={{flexDirection:"row",marginVertical:10, alignItems:"center"}}>
       <Text><Entypo name="phone" size={30} color="white" /></Text>
       <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:18}}>{user?.phone}</Text>
     </View>
     
     
     <View style={{flexDirection:"row",marginVertical:10, alignItems:"center"}}>
     <Text><Entypo name="location-pin" size={30} color="white" /></Text>
     <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:18}}>{user?.location}</Text>
   </View>
   
   <TouchableOpacity  onPress={()=> logout()} style={{flexDirection:"row",marginVertical:10, alignItems:"center"}}>
   <Text><MaterialIcons name="logout" size={30} color="white" /></Text>
   <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:18}}>Logout</Text>
 </TouchableOpacity>


        </View>
     </View>



            <View style={styles.bottomWrap}>
            <TouchableOpacity  onPress={()=> navigation.navigate("dashboard")}><Text><Entypo name="home" size={30} color="white" /></Text></TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate("superuser")}><Text><Foundation name="results-demographics" size={30} color="white" /></Text></TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate("profile")}><Text><FontAwesome name="user-circle" size={30} color="white" /> </Text></TouchableOpacity>
           
                 </View>

        </View>


        
    )
}

export default Profile;


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