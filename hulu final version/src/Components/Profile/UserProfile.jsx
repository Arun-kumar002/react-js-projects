import React,{useContext} from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from './../../helpers/contextApi/AuthContext';

const UserProfile = () => {
  let {pathname}=useLocation()
  console.log(pathname);
    let {user,toggleMenu ,toggleDropDown}=useContext(AuthContext)
    

    return(
      <>{
     pathname =='/auth/MyAccount' ?  <>
     <header>
     <img src={
     user === null ?  'https://media.istockphoto.com/photos/businesswoman-icon-picture-id501338715?b=1&k=20&m=501338715&s=170667a&w=0&h=odRElnh_7cJRzCvB11k1YAkEe4N8cbVvi0ZO9Q3WmTo='  : user.photoURL 
    } alt='Myprofile' />
     </header>
     <main>
         <h1>{user !=null ?user.displayName:''}</h1>
         <h1>{user !=null ?user.email:''}</h1>
     </main>
     </>:<Outlet/>
      }
      </>
    )
  
}

export default UserProfile