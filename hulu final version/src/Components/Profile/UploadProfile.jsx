
import Styles from './profile.module.css'
import React,{useContext,useState} from 'react'
import { AuthContext } from './../../helpers/contextApi/AuthContext';
import  {FaEdit} from 'react-icons/fa'
//upload import
import {ref as photoRef,getDownloadURL,uploadBytesResumable} from 'firebase/storage'
import { storage } from '../../apis/Firebase';
import { updateProfile } from 'firebase/auth';
import { async } from '@firebase/util';

const UploadProfile = () => {
  
  let {user,toggleMenu ,toggleDropDown}=useContext(AuthContext)
  let [photo,setphoto]=useState('')
  let [loading,setloading]=useState(false)
  let [progress,setprogress]=useState(0)
  let [barStatus,setbarStatus]=useState(false)

  let submit=(e)=>{
    e.preventDefault()
    try {
      setloading(true)
      console.log(photo);
       let storageRef=photoRef(storage,`/profile-photo/${photo.name}`)
       let uploadTask=uploadBytesResumable(storageRef,photo)
       //firebase event
       uploadTask.on('state_changed',(snapShot)=>{
        //progress bar
        let progressbar=(snapShot.bytesTransferred/snapShot.totalBytes)*100
        setprogress(progressbar)
        setbarStatus(true)
       },()=>{
        //error handling
       },
       async()=>{
        let DownloadUrl=await getDownloadURL(storageRef)
        await updateProfile(user,{
          photoURL:DownloadUrl
        })
        setloading(false)
        setbarStatus(false)
        window.location.assign('/auth/MyAccount')
        //completion of tasks
       }) 

    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <>
    <aside className={Styles.uploadprofile}>
      {
        barStatus === true ? <div className={Styles.progress} style={{width:`${progress}`} }>
        <p>{Math.round(progress)+'%'}</p>
      </div> :''
      }
      <header>
        <h1>upload profile</h1>
        <img src={
     user === null ?  'https://media.istockphoto.com/photos/businesswoman-icon-picture-id501338715?b=1&k=20&m=501338715&s=170667a&w=0&h=odRElnh_7cJRzCvB11k1YAkEe4N8cbVvi0ZO9Q3WmTo='  : user.photoURL 
    } alt='Myprofile' />
      </header>
      <main>

        <form onSubmit={submit}>
          <div>
            <label htmlFor="photo"><FaEdit/></label>
            <input type="file" name="photo" id="photo"  accept='image/*' style={{display:'none'}  } onChange={e=>setphoto(e.target.files[0])}/>
          </div> 
          <div>
          <button>{
            loading === true ? 'loading' : 'upload'
}</button>
          </div>
        </form>
      </main>
    </aside>
    </>
  )
}

export default UploadProfile