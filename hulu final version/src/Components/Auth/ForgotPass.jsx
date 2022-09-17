import React, { useContext ,useState} from 'react'
import Styles from '../../Pages/home/home.module.css'
import { Link,useNavigate } from 'react-router-dom'
import { ModelContext } from './../../helpers/ModelContext'
import { AiOutlineClose } from 'react-icons/ai'
import { FaEye,FaEyeSlash, FaLaptopHouse } from 'react-icons/fa'
import { auth } from './../../apis/Firebase';
import { signInWithEmailAndPassword ,sendPasswordResetEmail} from 'firebase/auth'
 

const ForgotPass = () => {
  let navigate=useNavigate()
  let [email,setemail]=useState('');
  let  [load,setload]=useState(false)
 let submit= async e=>{
    e.preventDefault()
    try {
        await sendPasswordResetEmail(auth,email)
        console.log(`please check for resetting pass   --->${email}`);
        navigate('/auth/login')
        
    } catch (error) {
        console.log(error);
    }
 }

  return (
    
        <form onSubmit={submit} className={Styles.forgetpass}>
          <div>
            <h1>
             Forgot password
            </h1>
          </div>
          <div>
            <label htmlFor="email">EMAIL </label>
            <input type="text" id="email" placeholder="" onChange={(e)=>setemail(e.target.value)}/>
          </div>
          <div>
            <Link to="/auth/login">Back to login?</Link>
            <button >{load === false ? 'Forget':"Loading"}</button>
          </div>
          
        </form>
      
  )
}

export default ForgotPass
