import {View , Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useContext} from 'react';
import { ContextApi } from '../utilities';


const Message = ()=>{

  const {setIsResponse,resMessage, isResponse}= useContext(ContextApi)

    return(

   <>
    {
        isResponse == true ? <View style={styles.MessageWrap}>
        <View style={{width:300, padding:8, height:250, borderRadius:18,justifyContent:'center', alignItems:"center"}}>
            <Text style={{fontWeight:'bold',fontSize:23, color:"#fff", textAlign:'center'}}>{resMessage}</Text>
            <TouchableOpacity style={{marginTop:20, backgroundColor:'#fff' , paddingHorizontal:34, paddingVertical:10, borderRadius:13}} onPress={()=>setIsResponse(false)}>
              <Text style={{fontWeight:'bold', fontSize:18}}>Okay</Text>
            </TouchableOpacity>
        </View>
  </View>:null
    }
   </>
    )
}


const styles = StyleSheet.create({
 MessageWrap:{
    width:'100%', 
    height:'100%',
    backgroundColor:'#111111ed',
    zIndex:29,
    justifyContent:'center',
    alignItems:'center'
    ,position:'absolute',
    top:'0%',
    left:"0%"
 }
})

export default Message;