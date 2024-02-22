
import React , {useEffect, useState} from "react"

import {View, Text, TextInput, StyleSheet, TouchableOpacity, } from "react-native";
import { Entypo,Foundation , MaterialIcons, Feather,FontAwesome} from '@expo/vector-icons';

const SuperUser = ({navigation})=>{
  

      
    return(

        <View style={styles.container}>
       
        <View style={{paddingHorizontal:20,display:"none", borderWidth:2, borderRadius:20, height:70, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
              <TextInput placeholder="Search User" style={{height:70, width:"70&"}} />
              <TouchableOpacity  onPress={()=> navigation.navigate("profile")}><Text><FontAwesome name="search" size={20} color="black" /> </Text></TouchableOpacity>
           
        </View>



        <View style={{display:"flex"}}>
        
        <View  style={{ width:"100%", flexDirection:"row", justifyContent:"center"}}>
        <View style={{width:320,  padding:10, borderRadius:20,backgroundColor:"#11111170"}}>
           <View style={{flexDirection:"row",marginVertical:3, alignItems:"center"}}>
             <Text><Feather name="user" size={30} color="white" /></Text>
             <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:18}}>sft.Shakil</Text>
           </View>

           <View style={{flexDirection:"row",marginVertical:3, alignItems:"center"}}>
           <Text><Entypo name="phone" size={30} color="white" /></Text>
           <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:18}}>01631636292</Text>
         </View>

           <View style={{flexDirection:"row",marginVertical:3, alignItems:"center"}}>
           <Text><MaterialIcons name="contact-phone" size={30} color="white" /></Text>
           <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:18}}>Shakil Hossain</Text>
         </View>


         <View style={{flexDirection:"row",marginVertical:3, alignItems:"center"}}>
         <Text><MaterialIcons name="speed" size={30} color="white" /></Text>
         <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:18}}>8 Mbps</Text>
       </View>


     <View style={{flexDirection:"row",marginVertical:3, alignItems:"center"}}>
     <Text><Entypo name="location-pin" size={30} color="white" /></Text>
     <Text style={{marginLeft:8, fontWeight:"bold", color:"white", fontSize:18}}>Rajpat ,Rajapur</Text>
   </View>
   
  


        </View>
     </View>
        
        <View style={{width:320, backgroundColor:"#fff" , marginLeft:10, marginTop:10,paddingHorizontal:10, paddingVertical:10, borderRadius:20,  height:250}}>
          

             <View style={{width:"100%", marginTop:10}}>
             <TextInput
             placeholderTextColor="#aab2b5"
             keyboardType="number-pad"
             style={{ width: "100%", height: 40, color: "#111", borderBottomColor: "#111", borderBottomWidth: 1 }}
             placeholder="Enter Amount"
           />
         </View>
         
         <View style={{ width: "100%", paddingLeft: 5, marginTop: 30 }}>
           <TextInput
           
             placeholderTextColor="#aab2b5"
             style={{ width: "100%", height: 40, color:"#111" , borderBottomColor: "#111", borderBottomWidth: 1 }}
             placeholder="Enter Transaction #ID"
           />


          <View style={{width:"100%" , flexDirection:"row" , justifyContent:"center"}}>
          <TouchableOpacity style={{backgroundColor:"#111", paddingHorizontal:20, paddingVertical:14 , width:160,marginHorizontal:"auto", marginTop:30, borderRadius:10}}>
          <Text style={{color:"#fff", textAlign:"center"}}>Send <FontAwesome name="send-o" size={18} color="white" /></Text>
         </TouchableOpacity>
          </View>
             
             </View>
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