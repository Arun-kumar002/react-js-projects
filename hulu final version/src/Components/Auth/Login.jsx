import React, { useContext ,useState} from 'react'
import Styles from '../../Pages/home/home.module.css'
import { Link,useNavigate } from 'react-router-dom'
import { ModelContext } from './../../helpers/ModelContext'
import { AiOutlineClose } from 'react-icons/ai'
import { FaEye,FaEyeSlash, FaLaptopHouse } from 'react-icons/fa'
import { auth } from './../../apis/Firebase';
import { signInWithEmailAndPassword ,GoogleAuthProvider} from 'firebase/auth'
import gimg from './ga.png'
import SocialProvider from './sociallogins/SocialProvider';

const Login = () => {
 function googleAuth(){
  console.log('im fun');
  return  SocialProvider(new GoogleAuthProvider())
  console.log('im fun');
  let credentaial=GoogleAuthProvider.credentialFromResult()
  console.log(credentaial);
  console.log('im fun');
  navigate('/')
 }

 

  let navigate=useNavigate()
  let [email,setemail]=useState('');
  let [password,setpassword]=useState('')
  let  [load,setload]=useState(false)
  let [toggle,settoggle]=useState(false)
  let [passshow,setpassshow]=useState(false)
  let { open } = useContext(ModelContext)
  
 let eyeico=()=>{
  settoggle(!toggle)
  setpassshow(!passshow)
 }
 let submit=async(e)=>{
  e.preventDefault()
  setload(true)
  try {
    // console.log({email,password});
    console.log('im sign in');
    let userdata= await signInWithEmailAndPassword(auth,email,password)
    console.log(userdata);
    //check verified or not
    if(userdata.user.emailVerified === true){
      console.log('user logged');
      navigate('/')
    }
  
  } catch (error) {
    console.log(error.message);
        navigate('/auth/register')
      console.log('user not verified'); //give toast message
     
  }
  setload(false)
 }
  return (
    <section className={Styles.ModelBlock}>
      <article>
        
        <form  onSubmit={submit}>
          <div>
            <h1>
              Log In
              <figure >
          <img src={gimg} alt="" className={Styles.google}  onClick={googleAuth}/>
        </figure>
            </h1>
          </div>
          <div>
            <label htmlFor="email">EMAIL </label>
            <input type="text" id="email" placeholder="" onChange={(e)=>setemail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">PASSWORD </label>
            <input type={passshow ===true ? 'text':'password'} id="password" placeholder="" value={password} onChange={(e)=>setpassword(e.target.value)}  />
            <span onClick={eyeico} className={Styles.eyeico}>{toggle !== true ? <FaEyeSlash/> : <FaEye/>}</span>
          </div>
          <div>
            <Link to="/">Forgot your email or password?</Link>
            <button >{load === false ? 'LOG IN':"Loading"}</button>
          </div>
          <div>
            <h1>Do you have account <Link to='/auth/register' >start with free trail</Link> </h1>
          </div>
        </form>
      </article>
    </section>
  )
}

export default Login
