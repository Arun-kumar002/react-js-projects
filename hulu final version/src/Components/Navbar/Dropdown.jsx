import React ,{useContext}from 'react'
import { AuthContext } from './../../helpers/contextApi/AuthContext';
import { Link } from 'react-router-dom';
import Styles from './navbar.module.css'

const Dropdown = () => {
    let {signout,toggleDropDown}=useContext(AuthContext)
  return (
    <>
        
            <li>
                <Link to='/auth/MyAccount' onClick={()=>toggleDropDown()}>my profile</Link>
            </li>
            <li>
            <Link to='/' onClick={signout} className={Styles.Link} >
            logout
           </Link>
            </li>
           
        

       
    </>
  )
}

export default Dropdown