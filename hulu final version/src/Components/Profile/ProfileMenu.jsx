import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from './../../helpers/contextApi/AuthContext';

const ProfileMenu = () => {
  let {user,toggleMenu ,toggleDropDown}=useContext(AuthContext)



  return (
    <>
         
      <ul>
       
        <li>
          <Link to='/auth/MyAccount/updatePass'>Update password</Link>
        </li>
        <li>
          <Link to='/auth/MyAccount/auth/uploadphoto'> upload profile</Link>
        </li>
        <li>
          <Link to='/auth/MyAccount/forgotPass'> change Password</Link>
        </li>
        <li>
          <Link to=''>delete Account</Link>
        </li>
      </ul>
    </>
  )
}

export default ProfileMenu