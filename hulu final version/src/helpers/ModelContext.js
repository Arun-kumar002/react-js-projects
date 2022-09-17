import React ,{  createContext,useState } from "react";

export let ModelContext=createContext()

let ModelProvider=({children})=>{
    let [open,setopen]=useState(false)
    let toggleModel=()=>{
        setopen(!open)
    }

    return <ModelContext.Provider value={{open,toggleModel}}>
        {children}
    </ModelContext.Provider>
}

export default ModelProvider;