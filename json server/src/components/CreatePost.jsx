import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify'
import AxiosInstance from './helper/AxiosInstance';


const CreatePost = () => {
    let navigate=useNavigate()
    let[state,setstate]=useState({
        user:"",
        password:"",
        email:"",
    })
    let {user,password,email}=state
    let submit=async(e)=>{
        e.preventDefault()
        try {
            
            let payload={user,password,email}
            console.log(payload);
            await AxiosInstance.post('/posts',payload)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }
    let change=(e)=>{
        let {name,value}=e.target;
        console.log(name,value);
        setstate({...state,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <form onSubmit={submit}>
            <div>
                <input type="text" name="user" value={user} onChange={change}/>
            </div>
            <div>
                <input type="password" name="password" id="" value={password} onChange={change}/>
            </div>
            <div>
                <input type="email" name="email" id="" value={email}  onChange={change} />
            </div>
            <div>
                <button>create</button>
            </div>
        </form>
    </div>
  )
}

export default CreatePost