import React,{useContext} from 'react'
import { AuthContext } from './../../helpers/contextApi/AuthContext';
import UserProfile from './UserProfile';


const MyProfile = () => {
  let {user,toggleMenu ,toggleDropDown}=useContext(AuthContext)
  return (
    <>
    <UserProfile/>
  </>
  )
}

export default MyProfile