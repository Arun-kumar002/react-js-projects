import React ,{useEffect,useState}from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import AxiosInstance from './helper/AxiosInstance';

const Update = () => {
    let navigate=useNavigate()
    let [state,setstate]=useState({
        user:"",
        password:"",
        email:"",
    })
    let {user,password,email}=state
    let {id}=useParams()
    useEffect(()=>{
        let fetch=async()=>{
            console.log(id);
             let {data}=await AxiosInstance.get(`/posts/${id}`)
             setstate(data)
        }
        fetch()
    },[id])
    let submit=async(e)=>{
        e.preventDefault()
        try {
            
            let payload={user,password,email}
            console.log(payload);
            await AxiosInstance.put(`/posts/${id}`,payload)
            navigate('/getall')
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
                <button >create</button>
            </div>
        </form>
  )
}

export default Update