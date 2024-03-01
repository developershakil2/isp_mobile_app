
import React , {useEffect,useContext,  useState} from "react"

import {View, Text, StyleSheet,ScrollView,Image,TextInput, TouchableOpacity, ActivityIndicator} from "react-native";
import { Entypo,Foundation ,SimpleLineIcons,FontAwesome} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ContextApi } from "../utilities";
import Message from "../components/Message";

const Dashboard = ({navigation})=>{
    const [seconds, setSeconds] = useState(new Date().getSeconds());
    const [modal, setModal] = useState("none")
    const [user, setUser] = useState({
      fullname:'',
      username:'',
      phone:'',
      userType:'',
      mbps:'',
      location:'',
      ispid:'',
      userId:'',
    });
    if(isLoad==true){
      setModal('none')
    }

   
    const [trans, setTrans] = useState([])
    const {transUser,isLoad, request} = useContext(ContextApi)
    const [transHash, setTransHash] = useState('')
    const [transAmount, setTransAmount] = useState('')
    useEffect(()=>{
        const interval = setInterval(()=>{
           setSeconds(new Date().getSeconds())
        },1000)
     
       return ()=> clearInterval(interval)
      }, [])

   useEffect(()=>{
          const userCheck = async()=>{
            const us = await AsyncStorage.getItem('user');
            const cuser = JSON.parse(us);
               
                const transData = await transUser(cuser.userId);
                setTrans(transData.reverse());
               
             setUser(cuser)
              if(cuser.userId == '' || cuser.userId == null){
                navigation.reset({index:0, routes:[{name:'login'}]})
              }
          }
          userCheck()
   },[])

    function getCurrentLocalTime() {
        const date = new Date();
        let hours = date.getHours();
        const minutes = date.getMinutes();
      
        let amOrPm = 'AM';
        let greeting = '';
      
        if (hours >= 5 && hours < 12) {
          greeting = 'Good morning';
        } else if (hours >= 12 && hours < 16) {
          greeting = 'Good afternoon';
        } else if (hours >= 16 && hours < 22) {
          greeting = 'Good evening';
        } else {
          greeting = 'Good night';
        }
      
        if (hours > 12) {
          hours -= 12;
          amOrPm = 'PM';
        } else if (hours === 0) {
          hours = 12;
        }
    
        return `${greeting}, ${hours}:${minutes}:${seconds} ${amOrPm}`;
      }
      

      const requestTrans = ()=>{
        if(transAmount=='' || transHash == ''){
          alert('please insert input data')
        }else{
          request(transAmount, transHash, user?.userId)

          setTimeout(()=>{
           setTransAmount('')
           setTransHash('')
          },3000)
        }
            
           
      }
      
    return(

      <>
     
     {isLoad == true?
     <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
      <ActivityIndicator size="large" color="green"/>
     </View>:
     <View style={styles.container}>
     <Message/>
   <View style={{position:"absolute", display:modal, flex:1, left:8, justifyContent:"center", alignItems:"center", paddingLeft:20, paddingRight:20, width:"100%", height:"100%", backgroundColor:"#111", zIndex:1}}>
   <View style={{width:"100%", backgroundColor:"#fff" , paddingHorizontal:10, paddingVertical:10, borderRadius:20,  height:250}}>
        <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
            <TouchableOpacity onPress={()=> setModal("none")}>
            <Text><SimpleLineIcons name="close" size={24} color="black" /></Text>
            </TouchableOpacity>
        </View>

        <View style={{width:"100%", marginTop:10}}>
        <TextInput
        placeholderTextColor="#aab2b5"
        onChangeText={setTransAmount}
        value={transAmount}
        keyboardType="number-pad"
        style={{ width: "100%", height: 40, color: "#111", borderBottomColor: "#111", borderBottomWidth: 1 }}
        placeholder="Enter Amount"
      />
    </View>
    
    <View style={{ width: "100%", paddingLeft: 5, marginTop: 30 }}>
      <TextInput
        onChangeText={setTransHash}
        value={transHash}
        autoCapitalize="characters"
        placeholderTextColor="#aab2b5"
        style={{ width: "100%", height: 40, color:"#111" , borderBottomColor: "#111", borderBottomWidth: 1 }}
        placeholder="Enter Transaction #ID"
      />


     <View style={{width:"100%" , flexDirection:"row" , justifyContent:"center"}}>
     <TouchableOpacity onPress={requestTrans} style={{backgroundColor:"#111", paddingHorizontal:20, paddingVertical:14 , width:160,marginHorizontal:"auto", marginTop:30, borderRadius:10}}>
     <Text style={{color:"#fff", textAlign:"center"}}>Send <FontAwesome name="send-o" size={18} color="white" /></Text>
    </TouchableOpacity>
     </View>
        
        </View>
   </View>
</View>


   <View >
   <Text style={{fontSize:20,fontWeight:"bold", }}>Hi {user?.fullname}</Text>
   <Text>{getCurrentLocalTime()} </Text>

    <View style={{width:"100%", height:"auto", borderWidth:1,marginTop:10 , borderRadius:20,paddingBottom:30, alignItems:"center", paddingHorizontal:10, justifyContent:"center"}}>
 
 
    <View style={{width:"100%" , paddingHorizontal:20, flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between"}}>
     <Image source={require("../assets/images/bkash.png")}
     style={{width:100, height:60, borderRadius:84, objectFit:"contain"}}
  />
   <View style={{flexDirection:"column" , marginTop:10}}>
   <Text >Bkash Marchant Number</Text>
   <Text style={{fontSize:18, fontWeight:"bold"}} >01717462626</Text>
      
   </View>
  
  </View>


  <View>
    <Text style={{marginVertical:13, textAlign:"center"}}>First Make Payment by Bkash Marchant Number and Simply request with transaction ID for active your WIFI Network</Text>
  </View>

 <TouchableOpacity onPress={()=> setModal("flex")} style={{backgroundColor:"#111", paddingHorizontal:20, paddingVertical:10 , borderRadius:10}}>
  <Text style={{color:"#fff"}}>Send Request</Text>
 </TouchableOpacity>
    </View>
   </View>
       
        <View style={{width:"100%",marginTop:40,  }}><Text style={{fontWeight:"bold"}}>All History</Text></View>
         <ScrollView style={{height:250}}>
        {
         trans?.map((el, indx)=>(
           <View key={indx} style={{marginVertical:10, borderRadius:10, paddingHorizontal:12, backgroundColor:"#111", width:"100%", paddingVertical:9, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
           <View>
             <Text style={{fontWeight:"bold", color:"white"}}>Transaction</Text>
             <Text style={{color:"white", fontSize:12, marginTop:5}}>{el.transId}</Text>
           </View>

           <View>
             <Text style={{fontWeight:"bold", color:"white"}}>Amount</Text>
             <Text style={{color:"white", fontSize:12, marginTop:5}}>{el.amount}</Text>
           </View>

           <View>
           <Text style={{fontWeight:"bold", color:"white"}}>Status</Text>
           <Text style={{color:el.status == 'pending'? "yellow":el.status == 'approved'? "green":"red"}}>{el.status}</Text>
           </View>
        </View>

         ))
        }

            
         </ScrollView>


       <View style={styles.bottomWrap}>
       <TouchableOpacity  onPress={()=> navigation.navigate("dashboard")}><Text><Entypo name="home" size={30} color="white" /></Text></TouchableOpacity>
       <TouchableOpacity  onPress={()=> navigation.navigate("superuser")}><Text><Foundation name="results-demographics" size={30} color="white" /></Text></TouchableOpacity>
       <TouchableOpacity  onPress={()=> navigation.navigate("profile")}><Text><FontAwesome name="user-circle" size={30} color="white" /> </Text></TouchableOpacity>
      
            </View>

   </View>

     
     }
      
      </>

        
    )
}

export default Dashboard;


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