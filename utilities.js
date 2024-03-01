import React, {createContext, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
export const ContextApi = createContext();


export const ContextComponent = ({children})=>{
  const endpoint = 'https://isp-backend.onrender.com'

  const [isLoad, setIsLoad] = useState(false);
  const [isResponse, setIsResponse] = useState(false);
  const [resMessage, setResMessage] = useState('');

     const LoginAccount = async(username, password, navigation)=>{
      try{
        setIsLoad(true)
         const res = await axios.post(`${endpoint}/login`,{
            username:username, password:password
         })
         if(res.status == 200){
          const resp = await axios.get(`${endpoint}/logged`, 
          {
            headers: {
              "Authorization": `Bearer ${res.data.token}`,
              "Content-Type": "application/json"
            }
           }
          );
            if(resp.status == 200){
              setIsLoad(false)
              setIsResponse(true)
              setResMessage('login success')
               
              const userItems={
                fullname:resp.data.fullname,
                username:resp.data.username,
                phone:resp.data.phone,
                userType:resp.data.userType,
                mbps:resp.data.mbps,
                location:resp.data.location,
                ispid:resp.data.ispid,
                userId:resp.data.userId,
              }
         
            await  AsyncStorage.setItem("user", JSON.stringify(userItems))
            navigation.reset({index:0, routes:[{name:'dashboard'}]})
            }
         }
      }catch(error){
        if(error.response){
          setIsLoad(false)
          setIsResponse(true)
          setResMessage(error.response.data.message)
        }
      }
     }

     const transUser = async (id)=>{
      try{
        const res = await axios.get(`${endpoint}/trans-by-user/${id}`);
        return res.data.message;
      }catch(error){
        if(error.response){
          setIsLoad(false);
          setIsResponse(false),
          setResMessage(error.response.data.message)
        }
      }
     }
      

    const request = async(amount, transId, user)=>{
      try{
        setIsLoad(true)
        const res = await axios.post(`${endpoint}/request`,{amount:amount, transId:transId, user:user})
        if(res.status == 200){
          setIsLoad(false)
          setIsResponse(true)
          setResMessage(res.data.message)
        }
      }catch(error){
        if(error.response){
          setIsLoad(false)
          setIsResponse(true)
          setResMessage(error.response.data.message)
        }
      }
    }
   

    const requestSuper = async(amount, transId, user, superUser)=>{
      try{
        setIsLoad(true)
       if(amount == '' || transId == '' || user == '' || superUser == ''){
        alert("something went wrong")
       }else{

        const res = await axios.post(`${endpoint}/request-super`,{amount:amount, transId:transId, user:user, superUser:superUser})
        if(res.status == 200){
          setIsLoad(false)
          setIsResponse(true)
          setResMessage(res.data.message)
        }else{
          alert("something went wrong")
        }
       }
      }catch(error){
        if(error.response){
          setIsLoad(false)
          setIsResponse(true)
          setResMessage(error.response.data.message)
        }
      }
    }

    const userFind = async (username)=>{
      try{
        setIsLoad(true)
        const res = await axios.get(`${endpoint}/get-user-by-username/${username}`)
        if(res.status == 200){
          setIsLoad(false)
          return res.data.message;
        }
      }catch(error){
        if(error.response){
          setIsLoad(false)
          setIsResponse(true)
          setResMessage(error.response.data.message)
        }
      }
    }
  
    return(
       <ContextApi.Provider  value={{userFind, requestSuper,request, transUser,setIsResponse, isLoad, setIsLoad, isResponse, resMessage,endpoint, LoginAccount}}>
          {children}
        </ContextApi.Provider>
    )
}


