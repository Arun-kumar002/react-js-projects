import React ,{useEffect,useState}from 'react'

let useFetch = (url) => {
 let[state,setstate]=useState([])
   useEffect( ()=>{
   let fetch=async ()=>{
    let data=await (await window.fetch(url)).json()
    console.log(data);
    setstate(data)
   }
   fetch()
  
  },[url])
  return state
}

export default useFetch