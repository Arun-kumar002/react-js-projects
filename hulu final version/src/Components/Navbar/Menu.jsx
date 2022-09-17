import React,{useContext,useRef,useState} from 'react'
import Styles from './navbar.module.css'
import { ModelContext } from '../../helpers/ModelContext'
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../helpers/contextApi/AuthContext';
import { auth } from './../../apis/Firebase';
import Dropdown from './Dropdown';

const Menu = () => {
   let dropDownRef=useRef()
  let {user,toggleMenu ,toggleDropDown}=useContext(AuthContext)
  let {toggleModel}=useContext(ModelContext)
  let Authenticateduser=()=>{
    return <>
                <span className={Styles.span} >
                <img src={user.photoURL} alt="" className={Styles.img}  onClick={()=>toggleDropDown()}/>
                </span>
                 <div className={Styles.dropDown}>
                  {
                      toggleMenu === true ?<Dropdown/> : ''
                  }
                 </div>

    </>
  }
  let AnonymousUse=()=>{
      return(
        <>
        <Link to='/auth/login' className={Styles.Link}>login</Link>
        </>
      )
  }
 
  return (
    <div className={Styles.menu}>
        <ul >
           {
            user ? <Authenticateduser/> : <AnonymousUse/>
           }
        </ul>
    </div>
  )
}

export default Menu