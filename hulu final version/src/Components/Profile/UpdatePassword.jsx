import React,{useState,useContext} from 'react'
import Styles from '../../Pages/home/home.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../helpers/contextApi/AuthContext';
import {updatePassword,getAuth} from 'firebase/auth'
import { auth } from './../../apis/Firebase';

const UpdatePassword = () => {
  let {user,toggleMenu ,toggleDropDown}=useContext(AuthContext)
  let navigate=useNavigate()
  let [newpass,setpass]=useState('');
  let  [load,setload]=useState(false)
  let submit=  (e)=>{
    e.preventDefault()
      updatePassword(user,newpass).then(x=>{
        console.log(x);
        navigate('/auth/MyAccount')}
      ).catch(y=>{
        console.log(y);
      })
    
  }
  return (
    
      
      <form onSubmit={submit} className={Styles.forgetpass}>
          <div>
            <h1>
             update password
            </h1>
          </div>
          <div>
            <label htmlFor="pass">password </label>
            <input type="password" id="pass" placeholder="" onChange={(e)=>setpass(e.target.value)}/>
          </div>
          <div>
            <Link to="/auth/MyAccount">Go Back to Dashboard</Link>
            <button >{load === false ? 'update ':"Loading"}</button>
          </div>
          
        </form>
  
  )
}

export default UpdatePassword