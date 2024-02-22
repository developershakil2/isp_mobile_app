import React, {createContext} from "react";


export const ContextApi = createContext();


export const ContextComponent = ({children})=>{
  const shakil = "Shakil Hossain";


  
    return(
       <ContextApi.Provider  value={{shakil}}>
          {children}
        </ContextApi.Provider>
    )
}


