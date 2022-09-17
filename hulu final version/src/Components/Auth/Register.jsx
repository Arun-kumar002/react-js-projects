import { createUserWithEmailAndPassword,sendEmailVerification,updateProfile } from 'firebase/auth';

import { auth } from './../../apis/Firebase';

import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

import Styles from '../../Pages/home/home.module.css'
import md5 from 'md5';
// import { ToastContainer, toast } from 'react-toastify';

 

const Register = () => {
  let navigate=useNavigate()
  let [email,setemail]=useState('')
  let [dob,setdob]=useState('')
  let [name,setname]=useState('')
  let [password,setpassword]=useState('')
  let [loading,setloading]=useState(false)
   let submit=async (e)=>{
    e.preventDefault()
    try {
      let userdata=await createUserWithEmailAndPassword(auth,email,password)
      let confirmMail=`the verification mail has been sent t0${email} please verify `;
      console.log(userdata.user);
      //email verication
      sendEmailVerification(userdata.user)
      //update profile
     updateProfile(userdata.user,{
      displayName:name,
      photoURL:`http://gravatar.com/avatar/${md5(email)}q=identicon`
     })
     
      navigate('/')
    } catch (error) {
      console.log(error.message);
      // toast.error("user is already created")
    }
   }
  return (
    <>
    
<section className={Styles.registerBlock}>
<article>
<div>
  <h1>Create Your Account</h1>
  <p>Use your email and password to watch on your favorite devices.</p>
  </div>
<form  onSubmit={submit}>
  
      <div>
        <label htmlFor="">EMAIL</label>
        <input type="email" name="email" id=""  onChange={(e)=>setemail(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="">PASSWORD</label>
        <input type="password" name="password" id=""  onChange={(e)=>setpassword(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">NAME</label>
        <input type="text" name="NAME" id=""  onChange={(e)=>setname(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="">DOB</label>
        <input type="date" name="date" id=""  onChange={(e)=>setdob(e.target.value)}/>
      </div>
      <div>
        <button>Register</button>
      </div>
  </form>
</article>
</section>
</>

  

  )
}

export default Register