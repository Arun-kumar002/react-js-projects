import { onAuthStateChanged, signOut } from 'firebase/auth';
//it check user signin or not
import React,{ createContext ,useEffect,useState} from 'react';
import { auth } from './../../apis/Firebase';


 export let AuthContext=createContext()

 let AuthProvider=({children})=>{
    let [toggleMenu,setToggleMenu]=useState(false)
    let toggleDropDown=()=>{
     setToggleMenu(!toggleMenu)
    }
    let [user,setuser]=useState(null)
    let signout=async()=>{
        await signOut(auth)
        window.sessionStorage.removeItem('token')
        window.location.assign('/')
      }
    useEffect(()=>{
       return onAuthStateChanged(auth , (userdata)=>{
        // console.log('im user data',userdata);
        if(  userdata && userdata.emailVerified === true){    
            let token=userdata.accessToken
            window.sessionStorage.setItem('token',token)
            setuser(userdata)
           
        }
        else{
            // console.log(userdata)
            console.log('im in else');
            window.sessionStorage.removeItem('token')
            setuser(null)
        }
       },[user])
    })
    return (
    <AuthContext.Provider value={{user,toggleDropDown,signout,toggleMenu}}>
        {children}
    </AuthContext.Provider>
    )
 }

 export default AuthProvider;